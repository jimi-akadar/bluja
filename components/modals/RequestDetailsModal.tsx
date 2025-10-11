import React from "react";
import {
  Modal,
  View,
  StyleSheet,
  ScrollView,
  Pressable,
  Dimensions,
} from "react-native";
import { Image } from "expo-image";
import { MaterialIcons } from "@expo/vector-icons";
import { Text400, Text500, Text600, Text700 } from "@/primitives";
import { Request } from "@/types";
import { COLOR_PRIMARY, COLOR_TEXT } from "@/constants/colors";

type Props = {
  visible: boolean;
  request: Request | null;
  onClose: () => void;
  onAccept?: () => void;
  onReject?: () => void;
};

const { height: SCREEN_HEIGHT } = Dimensions.get("window");

const RequestDetailsModal = ({
  visible,
  request,
  onClose,
  onAccept,
  onReject,
}: Props) => {
  if (!request) return null;

  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent={true}
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <Pressable style={styles.backdrop} onPress={onClose} />

        <View style={styles.modalContainer}>
          {/* Header */}
          <View style={styles.header}>
            <View style={styles.dragHandle} />
            <Pressable style={styles.closeButton} onPress={onClose}>
              <MaterialIcons name="close" size={24} color={COLOR_TEXT} />
            </Pressable>
          </View>

          <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
            {/* Service Image */}
            <Image source={{ uri: request.image }} style={styles.heroImage} />

            {/* Status Badge */}
            <View
              style={[styles.statusBadge, { backgroundColor: request.statusBg }]}
            >
              <Text600 style={[styles.statusText, { color: request.statusColor }]}>
                {request.status}
              </Text600>
            </View>

            {/* Service Title */}
            <Text700 style={styles.serviceTitle}>{request.service}</Text700>

            {/* Provider Info */}
            <View style={styles.providerCard}>
              <View style={styles.providerHeader}>
                <View style={styles.providerAvatar}>
                  {request.providerImage ? (
                    <Image
                      source={{ uri: request.providerImage }}
                      style={styles.avatarImage}
                    />
                  ) : (
                    <MaterialIcons
                      name="person"
                      size={32}
                      color={COLOR_PRIMARY}
                    />
                  )}
                </View>
                <View style={styles.providerInfo}>
                  <Text600 style={styles.providerName}>{request.provider}</Text600>
                  <View style={styles.ratingContainer}>
                    <MaterialIcons name="star" size={16} color="#F59E0B" />
                    <Text500 style={styles.ratingText}>{request.rating}</Text500>
                  </View>
                </View>
              </View>
            </View>

            {/* Details Section */}
            <View style={styles.section}>
              <Text600 style={styles.sectionTitle}>Detaylar</Text600>

              {request.description && (
                <View style={styles.detailRow}>
                  <MaterialIcons name="description" size={20} color={COLOR_PRIMARY} />
                  <Text400 style={styles.detailText}>{request.description}</Text400>
                </View>
              )}

              {request.location && (
                <View style={styles.detailRow}>
                  <MaterialIcons name="location-on" size={20} color={COLOR_PRIMARY} />
                  <Text400 style={styles.detailText}>{request.location}</Text400>
                </View>
              )}

              {request.budget && (
                <View style={styles.detailRow}>
                  <MaterialIcons name="attach-money" size={20} color={COLOR_PRIMARY} />
                  <Text400 style={styles.detailText}>{request.budget}</Text400>
                </View>
              )}

              {request.urgency && (
                <View style={styles.detailRow}>
                  <MaterialIcons name="schedule" size={20} color={COLOR_PRIMARY} />
                  <Text400 style={styles.detailText}>{request.urgency}</Text400>
                </View>
              )}

              <View style={styles.detailRow}>
                <MaterialIcons name="access-time" size={20} color={COLOR_PRIMARY} />
                <Text400 style={styles.detailText}>{request.time}</Text400>
              </View>
            </View>
          </ScrollView>

          {/* Action Buttons */}
          {(onAccept || onReject) && (
            <View style={styles.actionButtons}>
              {onReject && (
                <Pressable style={styles.rejectButton} onPress={onReject}>
                  <Text600 style={styles.rejectButtonText}>Reddet</Text600>
                </Pressable>
              )}
              {onAccept && (
                <Pressable style={styles.acceptButton} onPress={onAccept}>
                  <Text600 style={styles.acceptButtonText}>Kabul Et</Text600>
                </Pressable>
              )}
            </View>
          )}
        </View>
      </View>
    </Modal>
  );
};

export default RequestDetailsModal;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: "flex-end",
  },
  backdrop: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContainer: {
    backgroundColor: "white",
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    maxHeight: SCREEN_HEIGHT * 0.9,
  },
  header: {
    alignItems: "center",
    paddingTop: 12,
    paddingHorizontal: 24,
    paddingBottom: 8,
    position: "relative",
  },
  dragHandle: {
    width: 40,
    height: 4,
    backgroundColor: "#E5E7EB",
    borderRadius: 2,
  },
  closeButton: {
    position: "absolute",
    right: 24,
    top: 12,
    width: 32,
    height: 32,
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    paddingHorizontal: 24,
    paddingBottom: 24,
  },
  heroImage: {
    width: "100%",
    height: 200,
    borderRadius: 16,
    marginBottom: 16,
  },
  statusBadge: {
    alignSelf: "flex-start",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
    marginBottom: 16,
  },
  statusText: {
    fontSize: 14,
  },
  serviceTitle: {
    fontSize: 24,
    color: COLOR_TEXT,
    marginBottom: 20,
  },
  providerCard: {
    backgroundColor: "#F9FAFB",
    borderRadius: 12,
    padding: 16,
    marginBottom: 24,
  },
  providerHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  providerAvatar: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: "#F3E8FF",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  avatarImage: {
    width: 56,
    height: 56,
  },
  providerInfo: {
    flex: 1,
  },
  providerName: {
    fontSize: 16,
    color: COLOR_TEXT,
    marginBottom: 4,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  ratingText: {
    fontSize: 14,
    color: COLOR_TEXT,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    color: COLOR_TEXT,
    marginBottom: 16,
  },
  detailRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 12,
    marginBottom: 12,
  },
  detailText: {
    fontSize: 15,
    color: "#6B7280",
    flex: 1,
    lineHeight: 22,
  },
  actionButtons: {
    flexDirection: "row",
    gap: 12,
    padding: 24,
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: "#F3F4F6",
  },
  rejectButton: {
    flex: 1,
    paddingVertical: 14,
    borderRadius: 12,
    backgroundColor: "#F3F4F6",
    alignItems: "center",
    justifyContent: "center",
  },
  rejectButtonText: {
    fontSize: 16,
    color: COLOR_TEXT,
  },
  acceptButton: {
    flex: 1,
    paddingVertical: 14,
    borderRadius: 12,
    backgroundColor: COLOR_PRIMARY,
    alignItems: "center",
    justifyContent: "center",
  },
  acceptButtonText: {
    fontSize: 16,
    color: "white",
  },
});
