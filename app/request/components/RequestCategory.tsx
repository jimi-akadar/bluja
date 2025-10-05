import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import Card from "@/primitives/cards/Card";

type Props = {};

const RequestCategory = (props: Props) => {
  return (
    <Card>
      <View style={styles.serviceRow}>
        <View style={styles.serviceInfo}>
          <View style={styles.serviceIcon}>
            <Text style={styles.serviceEmoji}>🏠</Text>
          </View>
          <View>
            <Text style={styles.serviceLabel}>Service</Text>
            <Text style={styles.serviceName}>Home Cleaning</Text>
          </View>
        </View>
        <Pressable>
          <Text style={styles.changeButton}>Change</Text>
        </Pressable>
      </View>
    </Card>
  );
};

export default RequestCategory;

const styles = StyleSheet.create({
  serviceRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  serviceInfo: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  serviceIcon: {
    width: 48,
    height: 48,
    backgroundColor: "#CCFBF1",
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  serviceEmoji: {
    fontSize: 24,
  },
  serviceLabel: {
    fontSize: 12,
    color: "#6B7280",
    fontWeight: "500",
  },
  serviceName: {
    fontSize: 16,
    fontWeight: "600",
    color: "#1F2937",
  },
  changeButton: {
    fontSize: 14,
    fontWeight: "500",
    color: "#0D9488",
  },
});
