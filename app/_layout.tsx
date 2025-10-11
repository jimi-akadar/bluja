import { useEffect } from "react";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";

import * as SplashScreen from "expo-splash-screen";

import { useFonts } from "@expo-google-fonts/inter/useFonts";
import { Inter_400Regular } from "@expo-google-fonts/inter/400Regular";
import { Inter_500Medium } from "@expo-google-fonts/inter/500Medium";
import { Inter_600SemiBold } from "@expo-google-fonts/inter/600SemiBold";
import { Inter_700Bold } from "@expo-google-fonts/inter/700Bold";

import HeaderThemeColor from "@/components/headers/HeaderThemeColor";
import HeaderWhite from "@/components/headers/HeaderWhite";
import HeaderWithBackButton from "@/components/headers/HeaderWithBackButton";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
  });

  useEffect(() => {
    if (fontsLoaded) SplashScreen.hide();
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;

  return (
    <SafeAreaView
      style={{ flex: 1 }}
      edges={{ top: "off", bottom: "additive" }}
    >
      <StatusBar style="dark" backgroundColor="orange" translucent={false} />

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
        <Stack.Screen
          name="request/index"
          options={{
            title: "Talep Oluştur",
            presentation: "modal",
            header: (props) => <HeaderWithBackButton {...props} />,
          }}
        />
        <Stack.Screen
          name="request/summary"
          options={{
            title: "Talep Özeti",
            presentation: "modal",
            header: (props) => <HeaderWithBackButton {...props} />,
          }}
        />

        <Stack.Screen
          name="notification"
          options={{
            title: "Bildirimler",
            presentation: "modal",
            header: (props) => <HeaderWithBackButton {...props} />,
          }}
        />
      </Stack>
    </SafeAreaView>
  );
}
