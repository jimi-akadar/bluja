import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Feather } from "@expo/vector-icons";
import Card from "@/primitives/cards/Card";
import DateTimeSelectModal from "./DateTimeSelectModal";

type Props = Record<string, never>;

const RequestDateTime = (_props: Props) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string | null>(null);

  const formatDate = (date: Date) => {
    const days = ["Paz", "Pzt", "Sal", "Çar", "Per", "Cum", "Cmt"];
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

    const dayName = days[date.getDay()];
    const day = date.getDate();
    const month = months[date.getMonth()];

    return `${day} ${month}, ${dayName}`;
  };

  const getDisplayText = () => {
    if (selectedDate && selectedTimeSlot) {
      return `${formatDate(selectedDate)} • ${selectedTimeSlot}`;
    }
    return "Tercih edilen tarih ve saat seçin";
  };

  return (
    <>
      <Pressable onPress={() => setModalVisible(true)}>
        <Card>
          <View style={styles.dateTimeRow}>
            <View style={styles.dateTimeLeft}>
              <View style={styles.dateTimeIcon}>
                <Feather name="calendar" size={20} color="#2563EB" />
              </View>
              <View style={styles.dateTimeInfo}>
                <Text style={styles.dateTimeTitle}>Tarih & Saat</Text>
                <Text
                  style={[
                    styles.dateTimeSubtitle,
                    selectedDate && selectedTimeSlot && styles.dateTimeSelected,
                  ]}
                >
                  {getDisplayText()}
                </Text>
              </View>
            </View>
            <Feather name="chevron-right" size={20} color="#9CA3AF" />
          </View>
        </Card>
      </Pressable>

      <DateTimeSelectModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        selectedDate={selectedDate}
        selectedTimeSlot={selectedTimeSlot}
        onConfirm={(date, timeSlot) => {
          setSelectedDate(date);
          setSelectedTimeSlot(timeSlot);
          setModalVisible(false);
        }}
      />
    </>
  );
};

export default RequestDateTime;

const styles = StyleSheet.create({
  dateTimeRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  dateTimeLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    flex: 1,
  },
  dateTimeIcon: {
    width: 40,
    height: 40,
    backgroundColor: "#DBEAFE",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  dateTimeInfo: {
    flex: 1,
  },
  dateTimeTitle: {
    fontSize: 14,
    fontWeight: "600",
    color: "#1F2937",
  },
  dateTimeSubtitle: {
    fontSize: 12,
    color: "#6B7280",
    marginTop: 2,
  },
  dateTimeSelected: {
    color: "#1F2937",
    fontWeight: "500",
  },
});
