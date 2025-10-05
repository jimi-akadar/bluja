import { StyleSheet, Text, TextInput } from "react-native";
import React, { useState } from "react";
import Card from "@/primitives/cards/Card";

type Props = {};

const RequestDescription = (props: Props) => {
  const [description, setDescription] = useState("");

  return (
    <Card>
      <Text style={styles.label}>Describe your request</Text>
      <TextInput
        style={styles.textArea}
        value={description}
        onChangeText={setDescription}
        placeholder="What needs to be done? Include any specific details..."
        placeholderTextColor="#9CA3AF"
        multiline
        maxLength={500}
      />
      <Text style={styles.characterCount}>
        {description.length}/500 characters
      </Text>
    </Card>
  );
};

export default RequestDescription;

const styles = StyleSheet.create({
  label: {
    fontSize: 14,
    fontWeight: "600",
    color: "#1F2937",
    marginBottom: 12,
  },
  textArea: {
    height: 112,
    backgroundColor: "#F9FAFB",
    borderWidth: 1,
    borderColor: "#E5E7EB",
    borderRadius: 12,
    padding: 12,
    fontSize: 14,
    color: "#1F2937",
    textAlignVertical: "top",
  },
  characterCount: {
    fontSize: 12,
    color: "#9CA3AF",
    marginTop: 8,
  },
});
