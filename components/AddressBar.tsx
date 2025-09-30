import { INTER_400, INTER_700 } from "@/assets/fonts/Inter";
import React from "react";
import { Platform, StyleSheet, Text, View } from "react-native";

const AddressBar = () => {
  return (
    <View style={styles.container}>
      <Text
        style={styles.wrapperAddress}
        numberOfLines={1}
        ellipsizeMode="tail"
      >
        <Text style={[styles.textAddress, styles.textAddressName]}>Home, </Text>
        <Text style={styles.textAddress}>
          Sik Mahallesi, Sok Sokak No:1, Kat:3 Daire:11 35123 Karşıyaka/İzmir
        </Text>
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
  },
  wrapperAddress: { flexDirection: "row" },
  textAddressName: { fontFamily: INTER_700 },
  textAddress: { fontFamily: INTER_400, fontSize: 10, lineHeight: 12 },
});
