import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Card from "@/primitives/cards/Card";

type Props = {};

const RequestUrgency = (props: Props) => {
  const [selectedUrgency, setSelectedUrgency] = useState("Today");

  return (
    <Card>
      <Text style={styles.label}>Urgency</Text>
      <View style={styles.urgencyContainer}>
        {["ASAP", "Today", "3 days", "Flexible"].map((option) => (
          <Pressable
            key={option}
            onPress={() => setSelectedUrgency(option)}
            style={[
              styles.urgencyButton,
              selectedUrgency === option && styles.urgencyButtonActive,
            ]}
          >
            <Text
              style={[
                styles.urgencyText,
                selectedUrgency === option && styles.urgencyTextActive,
              ]}
            >
              {option}
            </Text>
          </Pressable>
        ))}
      </View>
    </Card>
  );
};

export default RequestUrgency;

const styles = StyleSheet.create({
  label: {
    fontSize: 14,
    fontWeight: "600",
    color: "#1F2937",
    marginBottom: 12,
  },
  urgencyContainer: {
    flexDirection: "row",
    gap: 8,
  },
  urgencyButton: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 12,
    backgroundColor: "#F9FAFB",
    borderWidth: 1,
    borderColor: "#E5E7EB",
    alignItems: "center",
  },
  urgencyButtonActive: {
    backgroundColor: "#0D9488",
    borderColor: "#0D9488",
  },
  urgencyText: {
    fontSize: 14,
    fontWeight: "500",
    color: "#4B5563",
  },
  urgencyTextActive: {
    color: "#FFFFFF",
  },
});
