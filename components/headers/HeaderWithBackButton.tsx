import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import type { NativeStackHeaderProps } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { Feather } from "@expo/vector-icons";

const HeaderWithBackButton = (props: NativeStackHeaderProps) => {
  const insets = useSafeAreaInsets();

  return (
    <>
      <StatusBar style="dark" />

      <View style={[styles.header, { paddingTop: 16 + insets.top }]}>
        <Pressable
          style={styles.backButton}
          onPress={() => props.navigation.goBack()}
        >
          <Feather name="chevron-left" size={24} color="#1F2937" />
        </Pressable>
        <Text style={styles.headerTitle}>{props.options.title}</Text>
        <View style={styles.headerSpacer} />
      </View>
    </>
  );
};

export default HeaderWithBackButton;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 16,
    backgroundColor: "#FFFFFF",
    borderBottomWidth: 1,
    borderBottomColor: "#E5E7EB",
  },
  backButton: {
    width: 40,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#1F2937",
  },
  headerSpacer: {
    width: 40,
  },
});
