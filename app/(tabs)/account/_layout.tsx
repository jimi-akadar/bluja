import React, { useEffect } from "react";
import { View, Text } from "react-native";
import { Stack, useNavigation, usePathname } from "expo-router";
import HeaderWithBackButton from "@/components/headers/HeaderWithBackButton";

const AccountLayout = () => {
  const navigation = useNavigation();
  const pathname = usePathname();

  useEffect(() => {
    if (pathname.startsWith("/account") && pathname !== "/account") {
      navigation.getParent()?.setOptions({ headerShown: false });
      return () => {
        navigation.getParent()?.setOptions({ headerShown: true });
      };
    }
  }, [pathname]);

  return (
    <Stack
      screenLayout={(props) => (
        <View style={{ flex: 1, backgroundColor: "#fff" }} {...props} />
      )}
      screenOptions={{ header: (props) => <HeaderWithBackButton {...props} /> }}
    >
      <Stack.Screen name="index" options={{ headerShown: false }} />

      <Stack.Screen
        name="personal-information"
        options={{
          presentation: "modal",
          title: "Personal Information",
        }}
      />

      <Stack.Screen
        name="security"
        options={{
          presentation: "modal",
          title: "Security",
        }}
      />
    </Stack>
  );
};

export default AccountLayout;
