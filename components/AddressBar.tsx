import React from "react";
import { StyleSheet, Text, View } from "react-native";

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
          Home, Sik Mahallesi, Sok Sokak No:1, Kat:3 Daire:11 35123
          Karşıyaka/İzmir
        </Text>
      </Text>
    </View>
  );
};

export default AddressBar;

const styles = StyleSheet.create({
  container: {
    height: 26,
    elevation: 6,
    backgroundColor: "#fff",
    borderRadius: 1,
    paddingHorizontal: 8,
    justifyContent: "center",
  },
  wrapperAddress: { flexDirection: "row" },
  textAddressName: { fontWeight: "700" },
  textAddress: { fontSize: 10, lineHeight: 12 },
});
