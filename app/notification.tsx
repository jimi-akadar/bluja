import { StyleSheet, Text, View, Pressable, FlatList } from "react-native";
import React, { useState } from "react";
import { Screen, Text600 } from "@/primitives";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";

type NotificationType =
  | "request_match"
  | "request_accepted"
  | "request_rejected"
  | "request_status"
  | "chat_message"
  | "service_completed"
  | "review_reminder"
  | "promotional";

type Notification = {
  id: string;
  type: NotificationType;
  title: string;
  message: string;
  timestamp: string;
  isRead: boolean;
  actionUrl?: string;
};

const NotificationScreen = () => {
  const [selectedTab, setSelectedTab] = useState<"all" | "unread">("all");

  // TODO: Replace with actual data from API/state
  const notifications: Notification[] = [
    {
      id: "1",
      type: "request_accepted",
      title: "Talep Kabul Edildi",
      message: "Ahmet K. temizlik talebinizi kabul etti. Profili görüntüle.",
      timestamp: "5 dakika önce",
      isRead: false,
    },
    {
      id: "2",
      type: "chat_message",
      title: "Yeni Mesaj",
      message: "Mehmet Y. size bir mesaj gönderdi.",
      timestamp: "1 saat önce",
      isRead: false,
    },
    {
      id: "3",
      type: "request_status",
      title: "Talep Güncellendi",
      message: "Boyama talebiniz hizmet sağlayıcılara gönderildi.",
      timestamp: "2 saat önce",
      isRead: true,
    },
    {
      id: "4",
      type: "service_completed",
      title: "Hizmet Tamamlandı",
      message: "Temizlik hizmeti tamamlandı. Değerlendirme yapabilirsiniz.",
      timestamp: "3 saat önce",
      isRead: true,
    },
    {
      id: "5",
      type: "request_match",
      title: "Yeni Talep Eşleşmesi",
      message: "Size uygun yeni bir bahçıvanlık talebi var.",
      timestamp: "5 saat önce",
      isRead: true,
    },
    {
      id: "6",
      type: "promotional",
      title: "Özel Kampanya",
      message: "Bu hafta ilk 3 hizmetinizde %20 indirim!",
      timestamp: "1 gün önce",
      isRead: true,
    },
  ];

  const filteredNotifications =
    selectedTab === "unread"
      ? notifications.filter((n) => !n.isRead)
      : notifications;

  const unreadCount = notifications.filter((n) => !n.isRead).length;

  const getNotificationIcon = (type: NotificationType) => {
    switch (type) {
      case "request_match":
        return (
          <MaterialCommunityIcons
            name="briefcase-search"
            size={24}
            color="#0D9488"
          />
        );
      case "request_accepted":
        return <MaterialIcons name="check-circle" size={24} color="#10B981" />;
      case "request_rejected":
        return <MaterialIcons name="cancel" size={24} color="#EF4444" />;
      case "request_status":
        return <MaterialIcons name="info" size={24} color="#3B82F6" />;
      case "chat_message":
        return <MaterialIcons name="chat" size={24} color="#8E50C1" />;
      case "service_completed":
        return <MaterialIcons name="task-alt" size={24} color="#10B981" />;
      case "review_reminder":
        return <MaterialIcons name="star" size={24} color="#F59E0B" />;
      case "promotional":
        return <MaterialIcons name="local-offer" size={24} color="#EC4899" />;
      default:
        return <MaterialIcons name="notifications" size={24} color="#6B7280" />;
    }
  };

  const handleNotificationPress = (notification: Notification) => {
    // TODO: Mark as read and navigate to appropriate screen
    console.log("Notification pressed:", notification.id);
  };

  const handleMarkAllAsRead = () => {
    // TODO: Mark all notifications as read
    console.log("Mark all as read");
  };

  const renderNotification = ({ item }: { item: Notification }) => (
    <Pressable
      style={[styles.notificationCard, !item.isRead && styles.unreadCard]}
      onPress={() => handleNotificationPress(item)}
    >
      <View style={styles.iconContainer}>{getNotificationIcon(item.type)}</View>
      <View style={styles.contentContainer}>
        <View style={styles.headerRow}>
          <Text600 style={styles.title}>{item.title}</Text600>
          {!item.isRead && <View style={styles.unreadDot} />}
        </View>
        <Text style={styles.message}>{item.message}</Text>
        <Text style={styles.timestamp}>{item.timestamp}</Text>
      </View>
    </Pressable>
  );

  return (
    <Screen>
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          {/* <Text style={styles.headerTitle}>Bildirimler</Text> */}
          {unreadCount > 0 && (
            <Pressable onPress={handleMarkAllAsRead}>
              <Text style={styles.markAllButton}>Tümünü Okundu İşaretle</Text>
            </Pressable>
          )}
        </View>

        {/* Tabs */}
        <View style={styles.tabs}>
          <Pressable
            style={[styles.tab, selectedTab === "all" && styles.activeTab]}
            onPress={() => setSelectedTab("all")}
          >
            <Text
              style={[
                styles.tabText,
                selectedTab === "all" && styles.activeTabText,
              ]}
            >
              Tümü ({notifications.length})
            </Text>
          </Pressable>
          <Pressable
            style={[styles.tab, selectedTab === "unread" && styles.activeTab]}
            onPress={() => setSelectedTab("unread")}
          >
            <Text
              style={[
                styles.tabText,
                selectedTab === "unread" && styles.activeTabText,
              ]}
            >
              Okunmamış ({unreadCount})
            </Text>
          </Pressable>
        </View>

        {/* Notifications List */}
        {filteredNotifications.length > 0 ? (
          <FlatList
            data={filteredNotifications}
            renderItem={renderNotification}
            keyExtractor={(item) => item.id}
            contentContainerStyle={styles.listContent}
            showsVerticalScrollIndicator={false}
          />
        ) : (
          <View style={styles.emptyState}>
            <MaterialIcons
              name="notifications-none"
              size={64}
              color="#D1D5DB"
            />
            <Text style={styles.emptyText}>
              {selectedTab === "unread"
                ? "Okunmamış bildirim yok"
                : "Henüz bildirim yok"}
            </Text>
            <Text style={styles.emptySubtext}>
              Yeni bildirimler burada görünecek
            </Text>
          </View>
        )}
      </View>
    </Screen>
  );
};

export default NotificationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9FAFB",
  },
  header: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 16,
    backgroundColor: "#FFFFFF",
    borderBottomWidth: 1,
    borderBottomColor: "#E5E7EB",
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#1F2937",
  },
  markAllButton: {
    fontSize: 14,
    fontWeight: "500",
    color: "#0D9488",
  },
  tabs: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    borderBottomWidth: 1,
    borderBottomColor: "#E5E7EB",
  },
  tab: {
    flex: 1,
    paddingVertical: 12,
    alignItems: "center",
    borderBottomWidth: 2,
    borderBottomColor: "transparent",
  },
  activeTab: {
    borderBottomColor: "#0D9488",
  },
  tabText: {
    fontSize: 14,
    fontWeight: "500",
    color: "#6B7280",
  },
  activeTabText: {
    color: "#0D9488",
    fontWeight: "600",
  },
  listContent: {
    padding: 16,
  },
  notificationCard: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#E5E7EB",
  },
  unreadCard: {
    backgroundColor: "#F0FDFA",
    borderColor: "#0D9488",
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "#F3F4F6",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  contentContainer: {
    flex: 1,
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 4,
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    color: "#1F2937",
    flex: 1,
  },
  unreadDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#0D9488",
    marginLeft: 8,
  },
  message: {
    fontSize: 14,
    color: "#4B5563",
    lineHeight: 20,
    marginBottom: 8,
  },
  timestamp: {
    fontSize: 12,
    color: "#9CA3AF",
  },
  emptyState: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 32,
  },
  emptyText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#6B7280",
    marginTop: 16,
    marginBottom: 8,
  },
  emptySubtext: {
    fontSize: 14,
    color: "#9CA3AF",
    textAlign: "center",
  },
});
