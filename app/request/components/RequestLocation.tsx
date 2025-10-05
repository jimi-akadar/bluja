import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import Card from "@/primitives/cards/Card";
import { Feather } from "@expo/vector-icons";

type Props = {};

const RequestLocation = (props: Props) => {
  return (
    <Card>
      <View style={styles.mapContainer}>
        <View style={styles.mapPlaceholder}>
          <Text style={styles.mapText}>Map View</Text>
        </View>
        <Pressable style={styles.locationButton}>
          <Feather name="map-pin" size={16} color="#0D9488" />
          <Text style={styles.locationButtonText}>Set Location</Text>
        </Pressable>
      </View>
      <View style={styles.locationInfo}>
        <Text style={styles.locationTitle}>Service Location</Text>
        <Text style={styles.locationAddress}>Wellington, Rend City</Text>
      </View>
    </Card>
  );
};

export default RequestLocation;

const styles = StyleSheet.create({
  mapContainer: {
    position: "relative",
    height: 160,
    borderRadius: 12,
    overflow: "hidden",
    marginBottom: 12,
  },
  mapPlaceholder: {
    width: "100%",
    height: "100%",
    backgroundColor: "#94D2BD",
    alignItems: "center",
    justifyContent: "center",
  },
  mapText: {
    fontSize: 14,
    color: "#047857",
    fontWeight: "500",
  },
  locationButton: {
    position: "absolute",
    top: 12,
    right: 12,
    backgroundColor: "#FFFFFF",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
    gap: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  locationButtonText: {
    fontSize: 12,
    fontWeight: "500",
    color: "#374151",
  },
  locationInfo: {
    paddingTop: 4,
  },
  locationTitle: {
    fontSize: 14,
    fontWeight: "500",
    color: "#1F2937",
  },
  locationAddress: {
    fontSize: 12,
    color: "#6B7280",
    marginTop: 2,
  },
});
