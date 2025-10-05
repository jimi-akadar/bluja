import React, { useState } from "react";
import { View, Text, StyleSheet, Pressable, Switch } from "react-native";
import { Feather } from "@expo/vector-icons";
import { Screen } from "@/primitives";

const AppSettingsScreen = () => {
  const [darkMode, setDarkMode] = useState(false);

  const handleLanguagePress = () => {
    console.log("Language pressed");
    // Navigate to language selection screen
  };

  const handleClearCache = () => {
    console.log("Clear Cache pressed");
    // Implement clear cache logic
  };

  const handleDataUsagePress = () => {
    console.log("Data Usage pressed");
    // Navigate to data usage settings
  };

  const handleResetApp = () => {
    console.log("Reset App pressed");
    // Implement reset app logic with confirmation
  };

  return (
    <Screen>
      <View style={styles.content}>
        {/* Appearance Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Appearance</Text>

          <View style={styles.settingRow}>
            <Text style={styles.settingLabel}>Dark Mode</Text>
            <Switch
              value={darkMode}
              onValueChange={setDarkMode}
              trackColor={{ false: "#E5E7EB", true: "#93C5FD" }}
              thumbColor={darkMode ? "#3B82F6" : "#F3F4F6"}
              ios_backgroundColor="#E5E7EB"
            />
          </View>

          <Pressable style={styles.settingRow} onPress={handleLanguagePress}>
            <Text style={styles.settingLabel}>Language</Text>
            <View style={styles.settingValue}>
              <Text style={styles.settingValueText}>English</Text>
              <Feather name="chevron-right" size={20} color="#9CA3AF" />
            </View>
          </Pressable>
        </View>

        {/* Data Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Data</Text>

          <View style={styles.settingRow}>
            <Text style={styles.settingLabel}>Clear Cache</Text>
            <Pressable style={styles.actionButton} onPress={handleClearCache}>
              <Text style={styles.actionButtonText}>Clear</Text>
            </Pressable>
          </View>

          <Pressable style={styles.settingRow} onPress={handleDataUsagePress}>
            <Text style={styles.settingLabel}>Data Usage</Text>
            <View style={styles.settingValue}>
              <Text style={styles.settingValueText}>Standard</Text>
              <Feather name="chevron-right" size={20} color="#9CA3AF" />
            </View>
          </Pressable>
        </View>

        {/* Other Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Other</Text>

          <View style={styles.settingRow}>
            <Text style={styles.settingLabel}>Reset App</Text>
            <Pressable style={styles.actionButton} onPress={handleResetApp}>
              <Text style={styles.actionButtonText}>Reset</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#F3F4F6",
  },
  backButton: {
    padding: 4,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#111827",
  },
  headerSpacer: {
    width: 32,
  },
  content: {
    flex: 1,
    paddingTop: 8,
  },
  section: {
    marginTop: 24,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#111827",
    marginBottom: 16,
  },
  settingRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#F3F4F6",
  },
  settingLabel: {
    fontSize: 16,
    color: "#111827",
    fontWeight: "400",
  },
  settingValue: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  settingValueText: {
    fontSize: 16,
    color: "#6B7280",
  },
  actionButton: {
    backgroundColor: "#F3F4F6",
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 8,
  },
  actionButtonText: {
    fontSize: 14,
    fontWeight: "500",
    color: "#111827",
  },
});

export default AppSettingsScreen;
