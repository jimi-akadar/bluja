import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import { cardStyles } from "@/primitives/cards/Card";

type Props = {};

const RequestDateTime = (props: Props) => {
  return (
    <Pressable style={cardStyles.card}>
      <View style={styles.dateTimeRow}>
        <View style={styles.dateTimeLeft}>
          <View style={styles.dateTimeIcon}>
            <Feather name="calendar" size={20} color="#2563EB" />
          </View>
          <View>
            <Text style={styles.dateTimeTitle}>Date & Time</Text>
            <Text style={styles.dateTimeSubtitle}>
              Select preferred schedule
            </Text>
          </View>
        </View>
        <Feather name="chevron-right" size={20} color="#9CA3AF" />
      </View>
    </Pressable>
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
  },
  dateTimeIcon: {
    width: 40,
    height: 40,
    backgroundColor: "#DBEAFE",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
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
});
