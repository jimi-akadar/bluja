import React from "react";
import { View, Text, StyleSheet, ScrollView, Pressable } from "react-native";
import { Feather } from "@expo/vector-icons";
import { Link, useNavigation, useRouter } from "expo-router";

const AccountScreen = () => {
  const router = useRouter();

  const menuSections = [
    {
      title: "Account",
      items: [
        {
          iconName: "user",
          label: "Personal Information",
          description: "Update your name, email, and phone number",
          onPress: () => router.push("/account/personal-information"),
        },
        {
          iconName: "shield",
          label: "Security",
          description: "Manage your password and security settings",
          onPress: () => router.push("/account/security"),
        },
      ],
    },
    {
      title: "Preferences",
      items: [
        {
          iconName: "settings",
          label: "App Settings",
          description: "Customize your app experience",
          onPress: () => router.push("/account/app-settings"),
        },
        {
          iconName: "bell",
          label: "Notifications",
          description: "Manage your notification preferences",
          onPress: () => router.push("/account/notifications"),
        },
      ],
    },
    {
      title: "Privacy",
      items: [
        {
          iconName: "lock",
          label: "Privacy Settings",
          description: "Manage your privacy settings",
          onPress: () => console.log("Privacy Settings pressed"),
        },
        {
          iconName: "file-text",
          label: "Terms & Privacy",
          description: "Read our terms and privacy policy",
          onPress: () => console.log("Terms & Privacy pressed"),
        },
      ],
    },
    {
      title: "General",
      items: [
        {
          iconName: "help-circle",
          label: "Help Center",
          description: "Find answers to common questions",
          onPress: () => console.log("Help Center pressed"),
        },
        {
          iconName: "info",
          label: "About",
          description: "Learn about the app version and more",
          onPress: () => console.log("About pressed"),
        },
      ],
    },
  ];

  const handleLogout = () => {
    console.log("Logout pressed");
    // Implement logout logic here
  };

  return (
    <ScrollView style={styles.container}>
      {menuSections.map((section, sectionIndex) => (
        <View key={sectionIndex} style={styles.section}>
          <Text style={styles.sectionTitle}>{section.title}</Text>

          {section.items.map((item, itemIndex) => {
            return (
              <Pressable
                style={({ pressed }) => [
                  styles.menuItem,
                  pressed && styles.menuItemPressed,
                ]}
                key={itemIndex}
                onPress={item.onPress}
              >
                <View style={styles.iconContainer}>
                  <Feather
                    name={item.iconName as keyof typeof Feather.glyphMap}
                    size={24}
                    color="#6B7280"
                  />
                </View>
                <View style={styles.menuContent}>
                  <Text style={styles.menuLabel}>{item.label}</Text>
                  <Text style={styles.menuDescription}>{item.description}</Text>
                </View>
              </Pressable>
            );
          })}
        </View>
      ))}

      <Pressable
        style={({ pressed }) => [
          styles.logoutButton,
          pressed && styles.logoutButtonPressed,
        ]}
        onPress={handleLogout}
      >
        <Text style={styles.logoutText}>Logout</Text>
      </Pressable>

      <View style={styles.bottomSpacer} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9FAFB",
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: 24,
    backgroundColor: "#FFFFFF",
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: "700",
    color: "#111827",
  },
  section: {
    marginTop: 24,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#111827",
    paddingHorizontal: 20,
    marginBottom: 12,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#F3F4F6",
  },
  menuItemPressed: {
    backgroundColor: "#F9FAFB",
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "#F3F4F6",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 16,
  },
  menuContent: {
    flex: 1,
  },
  menuLabel: {
    fontSize: 16,
    fontWeight: "600",
    color: "#111827",
    marginBottom: 4,
  },
  menuDescription: {
    fontSize: 14,
    color: "#6B7280",
    lineHeight: 20,
  },
  logoutButton: {
    marginHorizontal: 20,
    marginTop: 32,
    backgroundColor: "#FFFFFF",
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#E5E7EB",
  },
  logoutButtonPressed: {
    backgroundColor: "#F9FAFB",
  },
  logoutText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#DC2626",
  },
  bottomSpacer: {
    height: 40,
  },
});

export default AccountScreen;
