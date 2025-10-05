import React, { useState } from "react";
import { View, Text, StyleSheet, Switch, ScrollView } from "react-native";

import { Screen } from "@/primitives";

const NotificationsScreen = () => {
  const [newRequestMatches, setNewRequestMatches] = useState(true);
  const [requestStatusUpdates, setRequestStatusUpdates] = useState(true);
  const [chatMessages, setChatMessages] = useState(true);
  const [promotionalOffers, setPromotionalOffers] = useState(false);
  const [sound, setSound] = useState(true);
  const [vibration, setVibration] = useState(true);
  const [pushNotifications, setPushNotifications] = useState(true);

  return (
    <Screen>
      <ScrollView style={styles.content}>
        {/* Alerts Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Alerts</Text>

          <View style={styles.settingRow}>
            <View style={styles.settingInfo}>
              <Text style={styles.settingLabel}>New Request Matches</Text>
              <Text style={styles.settingDescription}>
                Get notified when a new request matches your preferences.
              </Text>
            </View>
            <Switch
              value={newRequestMatches}
              onValueChange={setNewRequestMatches}
              trackColor={{ false: "#E5E7EB", true: "#93C5FD" }}
              thumbColor={newRequestMatches ? "#3B82F6" : "#F3F4F6"}
              ios_backgroundColor="#E5E7EB"
            />
          </View>

          <View style={styles.settingRow}>
            <View style={styles.settingInfo}>
              <Text style={styles.settingLabel}>Request Status Updates</Text>
              <Text style={styles.settingDescription}>
                Receive updates on the status of your requests.
              </Text>
            </View>
            <Switch
              value={requestStatusUpdates}
              onValueChange={setRequestStatusUpdates}
              trackColor={{ false: "#E5E7EB", true: "#93C5FD" }}
              thumbColor={requestStatusUpdates ? "#3B82F6" : "#F3F4F6"}
              ios_backgroundColor="#E5E7EB"
            />
          </View>

          <View style={styles.settingRow}>
            <View style={styles.settingInfo}>
              <Text style={styles.settingLabel}>Chat Messages</Text>
              <Text style={styles.settingDescription}>
                Be alerted when you receive new messages in chats.
              </Text>
            </View>
            <Switch
              value={chatMessages}
              onValueChange={setChatMessages}
              trackColor={{ false: "#E5E7EB", true: "#93C5FD" }}
              thumbColor={chatMessages ? "#3B82F6" : "#F3F4F6"}
              ios_backgroundColor="#E5E7EB"
            />
          </View>

          <View style={styles.settingRow}>
            <View style={styles.settingInfo}>
              <Text style={styles.settingLabel}>Promotional Offers</Text>
              <Text style={styles.settingDescription}>
                Stay informed about special offers and promotions.
              </Text>
            </View>
            <Switch
              value={promotionalOffers}
              onValueChange={setPromotionalOffers}
              trackColor={{ false: "#E5E7EB", true: "#93C5FD" }}
              thumbColor={promotionalOffers ? "#3B82F6" : "#F3F4F6"}
              ios_backgroundColor="#E5E7EB"
            />
          </View>
        </View>

        {/* Preferences Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Preferences</Text>

          <View style={styles.settingRow}>
            <View style={styles.settingInfo}>
              <Text style={styles.settingLabel}>Sound</Text>
              <Text style={styles.settingDescription}>
                Enable or disable sound for notifications.
              </Text>
            </View>
            <Switch
              value={sound}
              onValueChange={setSound}
              trackColor={{ false: "#E5E7EB", true: "#93C5FD" }}
              thumbColor={sound ? "#3B82F6" : "#F3F4F6"}
              ios_backgroundColor="#E5E7EB"
            />
          </View>

          <View style={styles.settingRow}>
            <View style={styles.settingInfo}>
              <Text style={styles.settingLabel}>Vibration</Text>
              <Text style={styles.settingDescription}>
                Enable or disable vibration for notifications.
              </Text>
            </View>
            <Switch
              value={vibration}
              onValueChange={setVibration}
              trackColor={{ false: "#E5E7EB", true: "#93C5FD" }}
              thumbColor={vibration ? "#3B82F6" : "#F3F4F6"}
              ios_backgroundColor="#E5E7EB"
            />
          </View>

          <View style={styles.settingRow}>
            <View style={styles.settingInfo}>
              <Text style={styles.settingLabel}>Push Notifications</Text>
              <Text style={styles.settingDescription}>
                Choose whether to receive push notifications.
              </Text>
            </View>
            <Switch
              value={pushNotifications}
              onValueChange={setPushNotifications}
              trackColor={{ false: "#E5E7EB", true: "#93C5FD" }}
              thumbColor={pushNotifications ? "#3B82F6" : "#F3F4F6"}
              ios_backgroundColor="#E5E7EB"
            />
          </View>
        </View>
      </ScrollView>
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
  settingInfo: {
    flex: 1,
    marginRight: 16,
  },
  settingLabel: {
    fontSize: 16,
    color: "#111827",
    fontWeight: "500",
    marginBottom: 4,
  },
  settingDescription: {
    fontSize: 14,
    color: "#6B7280",
    lineHeight: 20,
  },
  footer: {
    paddingHorizontal: 20,
    paddingBottom: 32,
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: "#F3F4F6",
  },
  saveButton: {
    backgroundColor: "#3B82F6",
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  saveButtonText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#FFFFFF",
  },
});

export default NotificationsScreen;
