import { Image } from "expo-image";
import React from "react";
import { Platform, Pressable, StyleSheet, Text, View } from "react-native";
import type { NativeStackHeaderProps } from "@react-navigation/native-stack";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Text500 } from "@/primitives";
import { MaterialIcons } from "@expo/vector-icons";

import { BlujaLogoWhite } from "@/assets/logo";
import { usePathname, router } from "expo-router";

const paths = [
  // { pathname: "/service", title: "Hizmet" },
  { pathname: "/search", title: "Ara" },
  { pathname: "/history", title: "Geçmiş" },
  { pathname: "/account", title: "Hesap" },
];

const HeaderThemeColor = ({
  navigation,
  options,
  route,
  back,
}: NativeStackHeaderProps) => {
  const insets = useSafeAreaInsets();
  const pathname = usePathname();

  const title =
    paths.find((item) => item.pathname === pathname)?.title || options.title;

  // console.log({ title });

  return (
    <View style={[styles.container, { paddingTop: 16 + insets.top }]}>
      <View style={styles.innerContainer}>
        <Image source={BlujaLogoWhite} style={styles.logo} />

        <Pressable
          onPress={() => router.push("/notification")}
          style={styles.notificationButton}
        >
          <MaterialIcons name="notifications" size={20} color="#8E50C1" />
        </Pressable>
      </View>

      <Text500 style={[styles.title, { top: 16 + insets.top }]}>
        {title}
      </Text500>
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
    width: 36,
    height: 36,
    backgroundColor: "#fff",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    position: "absolute",
    textAlign: "center",
    left: 0,
    right: 0,
    fontSize: 16,
    lineHeight: 24,
    fontWeight: 600,
    color: "#fff",
  },
});
