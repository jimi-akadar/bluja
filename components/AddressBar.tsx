import React from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { Text400, Text700 } from "@/primitives";

const AddressBar = () => {
  return (
    <View style={styles.container}>
      <Text
        style={styles.wrapperAddress}
        numberOfLines={1}
        ellipsizeMode="tail"
      >
        <Text700 style={styles.textAddress}>Home, </Text700>
        <Text400 style={styles.textAddress}>
          Sik Mahallesi, Sok Sokak No:1, Kat:3 Daire:11 35123 Karşıyaka/İzmir
        </Text400>
      </Text>
    </View>
  );
};

export default AddressBar;

const styles = StyleSheet.create({
  container: {
    height: 26,
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.19,
        shadowRadius: 6,
      },
      android: { elevation: 6 },
    }),
    backgroundColor: "#fff",
    borderRadius: 1,
    paddingHorizontal: 8,
    justifyContent: "center",
    zIndex: 1,
  },
  wrapperAddress: { flexDirection: "row" },
  textAddressName: {},
  textAddress: { fontSize: 10, lineHeight: 12 },
});
