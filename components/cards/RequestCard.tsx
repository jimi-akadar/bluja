import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Request } from "@/types";
import { Image } from "expo-image";
import { Text400, Text600, Text700 } from "@/primitives";

type Props = {
  request: Request;
};

const RequestCard = ({ request }: Props) => {
  return (
    <View key={request.id} style={styles.requestCard}>
      {/* Status Badge */}
      <View style={styles.statusContainer}>
        <View
          style={[styles.statusBadge, { backgroundColor: request.statusBg }]}
        >
          <Text style={[styles.statusText, { color: request.statusColor }]}>
            {request.status}
          </Text>
        </View>
      </View>

      <View style={styles.cardContent}>
        {/* Left Content */}
        <View style={styles.leftContent}>
          <Text600 style={styles.serviceName}>{request.service}</Text600>

          <View style={styles.providerInfo}>
            <Text400 style={styles.providerLabel}>Provider: </Text400>
            <Text600 style={styles.providerName}>{request.provider}</Text600>
            <Text700 style={styles.separator}> • </Text700>
            <Text400 style={styles.rating}>⭐ {request.rating}</Text400>
          </View>

          <Text400 style={styles.timeInfo}>🕐 {request.time}</Text400>
        </View>

        {/* Right Image */}
        <View style={styles.imageContainer}>
          <Image source={{ uri: request.image }} style={styles.serviceImage} />
          {request.hasRibbon && (
            <View style={styles.ribbon}>
              <Text style={styles.ribbonText}>{request.ribbonText}</Text>
            </View>
          )}
        </View>
      </View>
    </View>
  );
};

export default RequestCard;

const styles = StyleSheet.create({
  requestCard: {
    backgroundColor: "white",
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  statusContainer: {
    marginBottom: 12,
  },
  statusBadge: {
    alignSelf: "flex-start",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
  },
  statusText: {
    fontSize: 12,
    fontWeight: "600",
  },
  cardContent: {
    flexDirection: "row",
    gap: 12,
  },
  leftContent: {
    flex: 1,
  },
  serviceName: {
    fontSize: 18,
    color: "#111827",
    marginBottom: 8,
  },
  providerInfo: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 4,
  },
  providerLabel: {
    fontSize: 14,
    color: "#6B7280",
  },
  providerName: {
    fontSize: 14,
    color: "#2563EB",
    fontWeight: "500",
  },
  separator: {
    fontSize: 14,
    color: "#9CA3AF",
  },
  rating: {
    fontSize: 14,
    fontWeight: "600",
    color: "#111827",
  },
  timeInfo: {
    fontSize: 13,
    color: "#6B7280",
  },
  imageContainer: {
    position: "relative",
  },
  serviceImage: {
    width: 128,
    height: 96,
    borderRadius: 12,
  },
  ribbon: {
    position: "absolute",
    top: -4,
    right: -4,
    backgroundColor: "#EF4444",
    paddingHorizontal: 12,
    paddingVertical: 4,
    transform: [{ rotate: "12deg" }],
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
  },
  ribbonText: {
    color: "white",
    fontSize: 10,
    fontWeight: "bold",
  },
});
