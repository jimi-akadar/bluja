import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import Card from "@/primitives/cards/Card";

type Props = {};

const RequestBudget = (props: Props) => {
  const [budget, setBudget] = useState("");

  return (
    <Card>
      <Text style={styles.label}>Your Budget</Text>
      <View style={styles.budgetInputContainer}>
        <Text style={styles.currencySymbol}>$</Text>
        <TextInput
          style={styles.budgetInput}
          value={budget}
          onChangeText={setBudget}
          placeholder="0.00"
          placeholderTextColor="#9CA3AF"
          keyboardType="decimal-pad"
        />
      </View>
      <Text style={styles.helperText}>
        This is your maximum budget for the service
      </Text>
    </Card>
  );
};

export default RequestBudget;

const styles = StyleSheet.create({
  label: {
    fontSize: 14,
    fontWeight: "600",
    color: "#1F2937",
    marginBottom: 12,
  },
  budgetInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F9FAFB",
    borderWidth: 1,
    borderColor: "#E5E7EB",
    borderRadius: 12,
    paddingHorizontal: 16,
  },
  currencySymbol: {
    fontSize: 14,
    fontWeight: "500",
    color: "#6B7280",
    marginRight: 4,
  },
  budgetInput: {
    flex: 1,
    paddingVertical: 12,
    fontSize: 14,
    color: "#1F2937",
  },
  helperText: {
    fontSize: 12,
    color: "#9CA3AF",
    marginTop: 8,
  },
});
