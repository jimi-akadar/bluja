import React from "react";
import { Platform, Pressable, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Link, usePathname } from "expo-router";
import { TabList, Tabs, TabSlot, TabTrigger } from "expo-router/ui";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

import { COLOR_PRIMARY } from "@/constants/colors";
import { Text500 } from "@/primitives";
import { StatusBar } from "expo-status-bar";

const TabLayout = () => {
  const pathname = usePathname();

  // Check if we're on a nested account screen
  const isNestedAccountScreen =
    pathname.startsWith("/account/") && pathname !== "/account";

  return (
    <>
      <StatusBar style="light" backgroundColor="#7C3AED" />
      <Tabs>
        <TabSlot />

        <TabList style={[styles.tabList, isNestedAccountScreen && { display: 'none' }]}>
            <TabTrigger
              name="service"
              href="/(tabs)/service"
              style={styles.tabTrigger}
            >
              <MaterialIcons
                name="home"
                size={24}
                color={
                  pathname === "/service/service" ? COLOR_PRIMARY : "#98A2B3"
                }
              />
              <Text500
                style={[
                  styles.textTabTrigger,
                  {
                    color: pathname === "/service/service" ? COLOR_PRIMARY : "",
                  },
                ]}
              >
                Anasayfa
              </Text500>
            </TabTrigger>

            <TabTrigger
              name="search"
              href="/(tabs)/search"
              style={styles.tabTrigger}
            >
              <Ionicons
                name="search"
                size={24}
                color={pathname === "/search" ? COLOR_PRIMARY : "#98A2B3"}
              />
              <Text500
                style={[
                  styles.textTabTrigger,
                  { color: pathname === "/search" ? COLOR_PRIMARY : "" },
                ]}
              >
                Ara
              </Text500>
            </TabTrigger>

            <Link href="/home" asChild>
              <Pressable style={styles.fabButton}>
                <MaterialCommunityIcons name="plus" size={24} color="#fff" />
              </Pressable>
            </Link>

            <TabTrigger
              name="history"
              href="/(tabs)/history"
              style={styles.tabTrigger}
            >
              <MaterialIcons
                name="history"
                size={24}
                color={pathname === "/history" ? COLOR_PRIMARY : "#98A2B3"}
              />
              <Text500
                style={[
                  styles.textTabTrigger,
                  { color: pathname === "/history" ? COLOR_PRIMARY : "" },
                ]}
              >
                Geçmiş
              </Text500>
            </TabTrigger>

            <TabTrigger
              name="account"
              href="/(tabs)/account"
              style={styles.tabTrigger}
            >
              <MaterialCommunityIcons
                name="account"
                size={24}
                color={pathname === "/account" ? COLOR_PRIMARY : "#98A2B3"}
              />
              <Text500
                style={[
                  styles.textTabTrigger,
                  { color: pathname === "/account" ? COLOR_PRIMARY : "" },
                ]}
              >
                Hesap
              </Text500>
            </TabTrigger>
          </TabList>
      </Tabs>
    </>
  );
};

export default TabLayout;

const styles = StyleSheet.create({
  tabList: { height: 64, backgroundColor: "#fff" },
  tabTrigger: {
    width: 76,
    justifyContent: "center",
    alignItems: "center",
    flexShrink: 0,
  },
  textTabTrigger: { color: "#98A2B3" },
  fabButton: {
    width: 56,
    height: 56,
    marginTop: -8,
    backgroundColor: COLOR_PRIMARY,
    borderRadius: 28,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#fff",
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: -1 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
      },
      android: { elevation: 4 },
    }),
  },
});
