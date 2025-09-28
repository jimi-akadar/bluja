import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";

import HeaderThemeColor from "@/components/headers/HeaderThemeColor";
import HeaderWhite from "@/components/headers/HeaderWhite";

export default function RootLayout() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar style="dark" />

      <Stack
        screenOptions={{
          header: (props) => <HeaderWhite {...props} />,
        }}
      >
        <Stack.Screen name="home" />
        <Stack.Screen
          name="(tabs)"
          options={{
            header: (props) => <HeaderThemeColor {...props} />,
          }}
        />
      </Stack>
    </SafeAreaView>
  );
}
