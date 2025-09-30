import { Image } from "expo-image";
import React from "react";
import { Platform, Pressable, StyleSheet, Text, View } from "react-native";

import blujaWhiteLogo from "@/assets/logo/bluja-white.png";

import type { NativeStackHeaderProps } from "@react-navigation/native-stack";
import { INTER_600 } from "@/assets/fonts/Inter";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const HeaderThemeColor = ({
  navigation,
  options,
  route,
  back,
}: NativeStackHeaderProps) => {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, { paddingTop: 16 + insets.top }]}>
      <View style={styles.innerContainer}>
        <Image source={blujaWhiteLogo} style={styles.logo} />

        <Pressable onPress={() => {}} style={styles.notificationButton}>
          <Text>I</Text>
        </Pressable>
      </View>

      <Text style={[styles.title, { top: 16 + insets.top }]}>Temizlik</Text>
    </View>
  );
};

export default HeaderThemeColor;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#8E50C1",
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
  innerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    zIndex: 2,
  },
  logo: { width: 54, height: 24 },
  notificationButton: {
    elevation: 2,
    width: 18,
    height: 18,
    backgroundColor: "#fff",
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    position: "absolute",
    textAlign: "center",
    left: 0,
    right: 0,
    fontFamily: INTER_600,
    fontSize: 16,
    lineHeight: 24,
    fontWeight: 600,
    color: "#fff",
  },
});
