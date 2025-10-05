import { StyleSheet, View } from "react-native";
import React from "react";
import { Text400, Text600 } from "@/primitives";

type Props = { title: string; description: string };

const StatsCard = ({ title, description }: Props) => {
  return (
    <View style={styles.statCard}>
      <Text600 style={styles.statTitle}>Başlangıç: {title}</Text600>
      <Text400 style={styles.statDescription}>{description}</Text400>
    </View>
  );
};

export default StatsCard;

const styles = StyleSheet.create({
  statCard: {
    backgroundColor: "white",
    borderRadius: 12,
    padding: 16,
    elevation: 1,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
  },
  statTitle: {
    fontSize: 16,
    color: "#12283F",
    marginBottom: 4,
  },
  statDescription: {
    fontSize: 12,
    color: "#12283F",
    lineHeight: 16,
  },
});
