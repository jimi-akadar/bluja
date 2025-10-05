import {
  Modal,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useState } from "react";
import { COLOR_PRIMARY } from "@/constants/colors";

type Props = {
  visible: boolean;
  onClose: () => void;
  selectedDate: Date | null;
  selectedTimeSlot: string | null;
  onConfirm: (date: Date, timeSlot: string) => void;
};

const timeSlots = [
  "08:00 - 10:00",
  "10:00 - 12:00",
  "12:00 - 14:00",
  "14:00 - 16:00",
  "16:00 - 18:00",
  "18:00 - 20:00",
];

const DateTimeSelectModal = ({
  visible,
  onClose,
  selectedDate,
  selectedTimeSlot,
  onConfirm,
}: Props) => {
  const [tempDate, setTempDate] = useState<Date | null>(selectedDate);
  const [tempTimeSlot, setTempTimeSlot] = useState<string | null>(
    selectedTimeSlot
  );

  const generateNext14Days = () => {
    const days = [];
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    for (let i = 0; i < 14; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      days.push(date);
    }

    return days;
  };

  const formatDayLabel = (date: Date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);

    const dateOnly = new Date(date);
    dateOnly.setHours(0, 0, 0, 0);

    if (dateOnly.getTime() === today.getTime()) {
      return "Bugün";
    } else if (dateOnly.getTime() === tomorrow.getTime()) {
      return "Yarın";
    }

    const days = ["Paz", "Pzt", "Sal", "Çar", "Per", "Cum", "Cmt"];
    return days[date.getDay()];
  };

  const formatDateNumber = (date: Date) => {
    return date.getDate();
  };

  const formatMonth = (date: Date) => {
    const months = [
      "Oca",
      "Şub",
      "Mar",
      "Nis",
      "May",
      "Haz",
      "Tem",
      "Ağu",
      "Eyl",
      "Eki",
      "Kas",
      "Ara",
    ];
    return months[date.getMonth()];
  };

  const handleConfirm = () => {
    if (tempDate && tempTimeSlot) {
      onConfirm(tempDate, tempTimeSlot);
    }
  };

  const days = generateNext14Days();

  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={onClose}
    >
      <Pressable style={styles.overlay} onPress={onClose}>
        <Pressable
          style={styles.modalContent}
          onPress={(e) => e.stopPropagation()}
        >
          <View style={styles.header}>
            <Text style={styles.title}>Tarih & Saat Seçin</Text>
            <Pressable onPress={onClose} style={styles.closeIcon}>
              <Text style={styles.closeIconText}>✕</Text>
            </Pressable>
          </View>

          {/* Date Selection */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Tarih</Text>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.datesContainer}
            >
              {days.map((date, index) => {
                const isSelected =
                  tempDate?.toDateString() === date.toDateString();

                return (
                  <Pressable
                    key={index}
                    style={[
                      styles.dateCard,
                      isSelected && styles.dateCardSelected,
                    ]}
                    onPress={() => setTempDate(date)}
                  >
                    <Text
                      style={[
                        styles.dateDay,
                        isSelected && styles.dateDaySelected,
                      ]}
                    >
                      {formatDayLabel(date)}
                    </Text>
                    <Text
                      style={[
                        styles.dateNumber,
                        isSelected && styles.dateNumberSelected,
                      ]}
                    >
                      {formatDateNumber(date)}
                    </Text>
                    <Text
                      style={[
                        styles.dateMonth,
                        isSelected && styles.dateMonthSelected,
                      ]}
                    >
                      {formatMonth(date)}
                    </Text>
                  </Pressable>
                );
              })}
            </ScrollView>
          </View>

          {/* Time Slot Selection */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Zaman Dilimi</Text>
            <View style={styles.timeSlotsContainer}>
              {timeSlots.map((slot) => {
                const isSelected = tempTimeSlot === slot;

                return (
                  <Pressable
                    key={slot}
                    style={[
                      styles.timeSlotButton,
                      isSelected && styles.timeSlotButtonSelected,
                    ]}
                    onPress={() => setTempTimeSlot(slot)}
                  >
                    <Text
                      style={[
                        styles.timeSlotText,
                        isSelected && styles.timeSlotTextSelected,
                      ]}
                    >
                      {slot}
                    </Text>
                  </Pressable>
                );
              })}
            </View>
          </View>

          {/* Action Buttons */}
          <View style={styles.actions}>
            <Pressable
              style={[
                styles.confirmButton,
                (!tempDate || !tempTimeSlot) && styles.confirmButtonDisabled,
              ]}
              onPress={handleConfirm}
              disabled={!tempDate || !tempTimeSlot}
            >
              <Text style={styles.confirmButtonText}>Onayla</Text>
            </Pressable>
          </View>
        </Pressable>
      </Pressable>
    </Modal>
  );
};

export default DateTimeSelectModal;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "flex-end",
  },
  modalContent: {
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    padding: 24,
    paddingBottom: 40,
    maxHeight: "85%",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 24,
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    color: "#1F2937",
  },
  closeIcon: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "#F3F4F6",
    alignItems: "center",
    justifyContent: "center",
  },
  closeIconText: {
    fontSize: 18,
    color: "#6B7280",
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: "600",
    color: "#1F2937",
    marginBottom: 12,
  },
  datesContainer: {
    gap: 12,
    paddingRight: 24,
  },
  dateCard: {
    width: 70,
    paddingVertical: 12,
    paddingHorizontal: 8,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "#E5E7EB",
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    gap: 4,
  },
  dateCardSelected: {
    borderColor: COLOR_PRIMARY,
    backgroundColor: COLOR_PRIMARY,
  },
  dateDay: {
    fontSize: 12,
    fontWeight: "500",
    color: "#6B7280",
  },
  dateDaySelected: {
    color: "#FFFFFF",
  },
  dateNumber: {
    fontSize: 20,
    fontWeight: "700",
    color: "#1F2937",
  },
  dateNumberSelected: {
    color: "#FFFFFF",
  },
  dateMonth: {
    fontSize: 11,
    fontWeight: "500",
    color: "#9CA3AF",
  },
  dateMonthSelected: {
    color: "#FFFFFF",
  },
  timeSlotsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },
  timeSlotButton: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "#E5E7EB",
    backgroundColor: "#FFFFFF",
    minWidth: "30%",
    alignItems: "center",
  },
  timeSlotButtonSelected: {
    borderColor: COLOR_PRIMARY,
    backgroundColor: COLOR_PRIMARY,
  },
  timeSlotText: {
    fontSize: 14,
    fontWeight: "500",
    color: "#4B5563",
  },
  timeSlotTextSelected: {
    color: "#FFFFFF",
  },
  actions: {
    marginTop: 8,
  },
  confirmButton: {
    backgroundColor: "#0D9488",
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: "center",
  },
  confirmButtonDisabled: {
    backgroundColor: "#D1D5DB",
  },
  confirmButtonText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#FFFFFF",
  },
});
