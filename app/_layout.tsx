// import { Stack } from "expo-router";
// import { StatusBar } from "expo-status-bar";
// import { SafeAreaView } from "react-native-safe-area-context";

import * as SplashScreen from "expo-splash-screen";

import { useFonts } from "@expo-google-fonts/inter/useFonts";
import { Inter_400Regular } from "@expo-google-fonts/inter/400Regular";
import { Inter_500Medium } from "@expo-google-fonts/inter/500Medium";
import { Inter_600SemiBold } from "@expo-google-fonts/inter/600SemiBold";
import { Inter_700Bold } from "@expo-google-fonts/inter/700Bold";

// import HeaderThemeColor from "@/components/headers/HeaderThemeColor";
// import HeaderWhite from "@/components/headers/HeaderWhite";
import { useEffect } from "react";
import { Text, View } from "react-native";
import { Slot } from "expo-router";

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
    <View style={{ flex: 1 }}>
      <Text>Sellam</Text>
      <Slot />
    </View>
    // <SafeAreaView
    //   style={{ flex: 1 }}
    //   edges={{ top: "off", bottom: "additive" }}
    // >
    //   <StatusBar style="dark" backgroundColor="orange" translucent={false} />

    //   <Stack
    //     screenOptions={{
    //       header: (props) => <HeaderWhite {...props} />,
    //     }}
    //   >
    //     <Stack.Screen name="home" />
    //     <Stack.Screen
    //       name="(tabs)"
    //       options={{
    //         header: (props) => <HeaderThemeColor {...props} />,
    //       }}
    //     />
    //   </Stack>
    // </SafeAreaView>
  );
}
