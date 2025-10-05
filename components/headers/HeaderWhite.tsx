import { Image } from "expo-image";
import React from "react";
import { Platform, StyleSheet, View } from "react-native";

import type { NativeStackHeaderProps } from "@react-navigation/native-stack";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { BlujaLogo } from "@/assets/logo";

const HeaderWhite = (props: NativeStackHeaderProps) => {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, { paddingTop: 16 + insets.top }]}>
      <Image source={BlujaLogo} style={styles.logo} />
    </View>
  );
};

export default HeaderWhite;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    alignItems: "center",
    backgroundColor: "#fff",
    ...Platform.select({
      ios: {
        shadowColor: "#000",
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
  },
});
