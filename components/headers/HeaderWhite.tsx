import blujaLogo from "@/assets/logo/bluja.png";
import { Image } from "expo-image";
import React from "react";
import { Platform, StyleSheet, View } from "react-native";

import type { NativeStackHeaderProps } from "@react-navigation/native-stack";

const HeaderWhite = (props: NativeStackHeaderProps) => {
  return (
    <View style={styles.container}>
      <Image source={blujaLogo} style={styles.logo} />
    </View>
  );
};

export default HeaderWhite;

const styles = StyleSheet.create({
  container: {
    height: 56,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    flexDirection: "row",
    justifyContent: "flex-end",
    backgroundColor: "#fff",
    ...Platform.select({
      ios: {
        shadowColor: "#fff",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.19,
        shadowRadius: 6,
      },
      android: { elevation: 6 },
    }),
  },
  logo: {
    width: 54,
    height: 24,
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: [{ translateX: "-50%" }, { translateY: "-50%" }],
  },
});
