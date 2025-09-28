import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { TabList, Tabs, TabSlot, TabTrigger } from "expo-router/ui";
import React from "react";
import { StyleSheet, Text } from "react-native";

type Props = {};

const TabLayout = (props: Props) => {
  return (
    <Tabs>
      <TabSlot />
      <TabList style={{ height: 64, backgroundColor: "#fff" }}>
        <TabTrigger
          name="service"
          href="/(tabs)/service"
          style={styles.tabTrigger}
        >
          <MaterialIcons name="home" size={24} />
          <Text style={styles.textTabTrigger}>Anasayfa</Text>
        </TabTrigger>
        <TabTrigger
          name="search"
          href="/(tabs)/search"
          style={styles.tabTrigger}
        >
          <MaterialIcons name="home" size={24} />
          <Text style={styles.textTabTrigger}>Ara</Text>
        </TabTrigger>
        <TabTrigger
          name="history"
          href="/(tabs)/history"
          style={styles.tabTrigger}
        >
          <MaterialIcons name="home" size={24} />
          <Text style={styles.textTabTrigger}>Geçmiş</Text>
        </TabTrigger>
        <TabTrigger
          name="account"
          href="/(tabs)/account"
          style={styles.tabTrigger}
        >
          <MaterialIcons name="home" size={24} />
          <Text style={styles.textTabTrigger}>Hesap</Text>
        </TabTrigger>
      </TabList>
    </Tabs>
  );
};

export default TabLayout;

const styles = StyleSheet.create({
  tabTrigger: { flex: 1, justifyContent: "center", alignItems: "center" },
  textTabTrigger: {},
});
