import { View, Text, ScrollView, Pressable, StyleSheet } from "react-native";
import React, { useState } from "react";
import { Screen } from "@/primitives";
import RequestCategory from "./components/RequestCategory";
import RequestLocation from "./components/RequestLocation";
import RequestDescription from "./components/RequestDescription";
import RequestBudget from "./components/RequestBudget";
import RequestUrgency from "./components/RequestUrgency";
import RequestDateTime from "./components/RequestDateTime";
import RequestPhotos from "./components/RequestPhotos";

type Props = {};

const RequestScreen = (props: Props) => {
  return (
    <Screen>
      <ScrollView style={{ flex: 1 }} contentContainerStyle={{ padding: 16 }}>
        <RequestCategory />

        <RequestLocation />

        <RequestDescription />

        <RequestBudget />

        <RequestUrgency />

        <RequestDateTime />

        <RequestPhotos />
      </ScrollView>

      <View style={styles.submitContainer}>
        <Pressable style={styles.submitButton}>
          <Text style={styles.submitText}>Submit Request</Text>
        </Pressable>
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  /* Submit */
  submitContainer: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 24,
    backgroundColor: "#FFFFFF",
    borderTopWidth: 1,
    borderTopColor: "#E5E7EB",
  },
  submitButton: {
    backgroundColor: "#0D9488",
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: "center",
    shadowColor: "#0D9488",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
  },
  submitText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#FFFFFF",
  },
  /* END - Submit */
});

export default RequestScreen;
