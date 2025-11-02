import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Stack, useNavigation, usePathname } from "expo-router";
import HeaderWithBackButton from "@/components/headers/HeaderWithBackButton";

type Props = {};

const AuthLayout = (props: Props) => {
  return (
    <Stack
      screenOptions={{ header: (props) => <HeaderWithBackButton {...props} /> }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: "Giriş",
        }}
      />
    </Stack>
  );
};

export default AuthLayout;

const styles = StyleSheet.create({});
