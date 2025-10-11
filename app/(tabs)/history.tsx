import {
  FlatList,
  StyleSheet,
  Pressable,
  View,
  ScrollView,
  Text,
} from "react-native";
import React, { useState } from "react";
import { Request } from "@/types";
import RequestCard from "@/components/cards/RequestCard";
import RequestDetailsModal from "@/components/modals/RequestDetailsModal";
import { Text400, Text600, Text700, Screen } from "@/primitives";
import { COLOR_PRIMARY } from "@/constants/colors";

type FilterOption = "all" | "completed" | "cancelled" | "inProgress";

const HistoryScreen = () => {
  const [selectedFilter, setSelectedFilter] = useState<FilterOption>("all");
  const [selectedRequest, setSelectedRequest] = useState<Request | null>(null);
  const [modalVisible, setModalVisible] = useState(false);

  const handleRequestPress = (request: Request) => {
    setSelectedRequest(request);
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
    setTimeout(() => setSelectedRequest(null), 300);
  };

  // Mock historical data
  const allRequests: Request[] = [
    {
      id: 1,
      status: "Tamamlandı",
      statusColor: "#059669",
      statusBg: "#ECFDF5",
      service: "Ev Temizliği",
      provider: "Ayşe K.",
      rating: 4.9,
      time: "3 gün önce",
      image:
        "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400",
      hasRibbon: false,
      description: "3+1 daire genel temizliği. Cam silme dahil.",
      location: "Kadıköy, İstanbul",
      budget: "₺500-750",
      urgency: "Bu hafta içinde",
    },
    {
      id: 2,
      status: "Devam Ediyor",
      statusColor: "#2563EB",
      statusBg: "#EFF6FF",
      service: "Boya Badana",
      provider: "Mehmet Y.",
      rating: 4.7,
      time: "1 saat önce",
      image:
        "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=400",
      hasRibbon: true,
      ribbonText: "AKTİF",
    },
    {
      id: 3,
      status: "İptal Edildi",
      statusColor: "#DC2626",
      statusBg: "#FEF2F2",
      service: "Bahçe Bakımı",
      provider: "Fatma S.",
      rating: 4.5,
      time: "1 hafta önce",
      image: "https://images.unsplash.com/photo-1558904541-efa843a96f01?w=400",
      hasRibbon: false,
    },
    {
      id: 4,
      status: "Tamamlandı",
      statusColor: "#059669",
      statusBg: "#ECFDF5",
      service: "Özel Ders",
      provider: "Ahmet D.",
      rating: 5.0,
      time: "2 hafta önce",
      image:
        "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400",
      hasRibbon: false,
    },
    {
      id: 5,
      status: "Tamamlandı",
      statusColor: "#059669",
      statusBg: "#ECFDF5",
      service: "Elektrik Tamiri",
      provider: "Can B.",
      rating: 4.8,
      time: "3 hafta önce",
      image:
        "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=400",
      hasRibbon: false,
    },
  ];

  const filterOptions: { key: FilterOption; label: string; count: number }[] = [
    { key: "all", label: "Tümü", count: allRequests.length },
    {
      key: "completed",
      label: "Tamamlandı",
      count: allRequests.filter((r) => r.status === "Tamamlandı").length,
    },
    {
      key: "inProgress",
      label: "Devam Ediyor",
      count: allRequests.filter((r) => r.status === "Devam Ediyor").length,
    },
    {
      key: "cancelled",
      label: "İptal",
      count: allRequests.filter((r) => r.status === "İptal Edildi").length,
    },
  ];

  const filteredRequests = allRequests.filter((request) => {
    if (selectedFilter === "all") return true;
    if (selectedFilter === "completed") return request.status === "Tamamlandı";
    if (selectedFilter === "inProgress")
      return request.status === "Devam Ediyor";
    if (selectedFilter === "cancelled")
      return request.status === "İptal Edildi";
    return true;
  });

  return (
    <Screen style={styles.container}>
      {/* Header */}
      {/* <View style={styles.header}>
        <Text700 style={styles.headerTitle}>Geçmiş</Text700>
        <Text400 style={styles.headerSubtitle}>
          Tüm taleplerinizi görüntüleyin
        </Text400>
      </View> */}

      {/* Filter Chips */}
      <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal
        style={{ minHeight: 4, paddingVertical: 16, maxHeight: 72 }}
        contentContainerStyle={{
          paddingHorizontal: 24,
          columnGap: 12,
        }}
      >
        {filterOptions.map((option, index) => (
          <Pressable
            key={option.key}
            style={({ pressed }) => [
              styles.filterChip,
              selectedFilter === option.key && styles.filterChipActive,
              // { paddingVertical: 16 },
              pressed && styles.filterChipPressed,
            ]}
            onPress={() => setSelectedFilter(option.key)}
          >
            <Text600
              style={[
                styles.filterChipText,
                selectedFilter === option.key && styles.filterChipTextActive,
                // { height: 20 },
              ]}
            >
              {option.label}
            </Text600>
            <View
              style={[
                styles.countBadge,
                selectedFilter === option.key && styles.countBadgeActive,
              ]}
            >
              <Text600
                style={[
                  styles.countText,
                  selectedFilter === option.key && styles.countTextActive,
                ]}
              >
                {option.count}
              </Text600>
            </View>
          </Pressable>
        ))}
      </ScrollView>

      {/* Results Count */}
      <View style={styles.resultsHeader}>
        <Text400 style={styles.resultsText}>
          {filteredRequests.length} talep bulundu
        </Text400>
      </View>

      {/* Request List */}
      <FlatList
        data={filteredRequests}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <RequestCard request={item} onPress={handleRequestPress} />
        )}
        style={{ flex: 1 }}
        contentContainerStyle={[
          styles.listContent,
          // { backgroundColor: "orange" },
        ]}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text700 style={styles.emptyTitle}>Talep bulunamadı</Text700>
            <Text400 style={styles.emptySubtitle}>
              Bu filtreye ait henüz bir talep yok
            </Text400>
          </View>
        }
      />

      {/* Request Details Modal */}
      <RequestDetailsModal
        visible={modalVisible}
        request={selectedRequest}
        onClose={handleCloseModal}
      />
    </Screen>
  );
};

export default HistoryScreen;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: "#F9FAFB",
  },
  header: {
    paddingHorizontal: 24,
    paddingTop: 16,
    paddingBottom: 12,
    backgroundColor: "white",
  },
  headerTitle: {
    fontSize: 28,
    color: "#111827",
    marginBottom: 4,
  },
  headerSubtitle: {
    fontSize: 14,
    color: "#6B7280",
  },
  filterContainer: {
    paddingHorizontal: 24,

    gap: 12,
  },
  filterChip: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 10,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#F3F4F6",
    gap: 6,
  },
  filterChipSpacing: {
    marginLeft: 8,
  },
  filterChipActive: {
    backgroundColor: COLOR_PRIMARY,
  },
  filterChipPressed: {
    opacity: 0.7,
  },
  filterChipText: {
    fontSize: 14,
    color: "#374151",
  },
  filterChipTextActive: {
    color: "white",
  },
  countBadge: {
    backgroundColor: "white",
    borderRadius: 10,
    minWidth: 24,
    height: 20,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 6,
  },
  countBadgeActive: {
    backgroundColor: "rgba(255, 255, 255, 0.25)",
  },
  countText: {
    fontSize: 12,
    color: "#6B7280",
  },
  countTextActive: {
    color: "white",
  },
  resultsHeader: {
    paddingHorizontal: 24,
    paddingVertical: 12,
  },
  resultsText: {
    fontSize: 13,
    color: "#9CA3AF",
  },
  listContent: {
    paddingHorizontal: 24,
    paddingVertical: 16,
  },
  emptyContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 64,
  },
  emptyTitle: {
    fontSize: 18,
    color: "#374151",
    marginBottom: 8,
  },
  emptySubtitle: {
    fontSize: 14,
    color: "#9CA3AF",
  },
});
