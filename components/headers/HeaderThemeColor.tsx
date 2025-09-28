import { Image } from "expo-image";
import React from "react";
import { Platform, Pressable, StyleSheet, Text, View } from "react-native";

import blujaWhiteLogo from "@/assets/logo/bluja-white.png";

import type { NativeStackHeaderProps } from "@react-navigation/native-stack";

const HeaderThemeColor = ({
  navigation,
  options,
  route,
  back,
}: NativeStackHeaderProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Image source={blujaWhiteLogo} style={styles.logo} />

        <Pressable onPress={() => {}} style={styles.notificationButton}>
          <Text>I</Text>
        </Pressable>
      </View>

      <Text style={styles.title}>Temizlik</Text>
    </View>
  );
};

export default HeaderThemeColor;

const styles = StyleSheet.create({
  container: {
    height: 56,
    paddingHorizontal: 16,
    backgroundColor: "#8E50C1",
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
  innerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    // backgroundColor: "red",
    flex: 1,
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
    top: "50%",
    left: 0,
    right: 0,
    transform: [{ translateY: "-50%" }],
    fontSize: 16,
    lineHeight: 24,
    fontWeight: 600,
    color: "#fff",
  },
});
