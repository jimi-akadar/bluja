import React, { useEffect } from "react";
import { View } from "react-native";
import { Stack, useNavigation, usePathname } from "expo-router";
import HeaderWithBackButton from "@/components/headers/HeaderWithBackButton";

const navigations = [
  { name: "personal-information", title: "Personal Information" },
  { name: "security", title: "Security" },
  { name: "app-settings", title: "App Settings" },
];

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

      {navigations.map((nav) => (
        <Stack.Screen
          key={nav.name}
          name={nav.name}
          options={{
            presentation: "modal",
            title: nav.title,
          }}
        />
      ))}
    </Stack>
  );
};

export default AccountLayout;
