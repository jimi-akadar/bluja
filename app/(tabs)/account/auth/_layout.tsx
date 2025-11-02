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
      <Stack.Screen
        name="user-register"
        options={{
          title: "Kayıt Ol",
        }}
      />
      <Stack.Screen
        name="provider-login"
        options={{
          title: "Sağlayıcı Olarak Giriş Yap",
        }}
      />
      <Stack.Screen
        name="provider-register"
        options={{
          title: "Sağlayıcı Olarak Kayıt Ol",
        }}
      />
    </Stack>
  );
};

export default AuthLayout;

const styles = StyleSheet.create({});
