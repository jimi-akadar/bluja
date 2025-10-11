import React, { useEffect, useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import ServiceATF from "./components/ServiceATF";
import AddressBar from "@/components/AddressBar";
import RequestCard from "@/components/cards/RequestCard";
import RequestDetailsModal from "@/components/modals/RequestDetailsModal";
import { Request } from "@/types";
import StatsCard from "@/components/cards/StatsCard";
import { Text600 } from "@/primitives";
import { Link, useNavigation, useRouter } from "expo-router";

type Props = {};

const ServiceScreen = (props: Props) => {
  const router = useRouter();
  const navigation = useNavigation();
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

  const serviceData = {
    title: "Ev Temizliği",
    subtitle: "Profesyonel temizlikçiler ile eviniz pırıl pırıl.",
    icon: "🧹",
    categories: [
      { id: 1, name: "Genel\nTemizlik", icon: "🏠" },
      { id: 2, name: "Derin\nTemizlik", icon: "✨" },
      { id: 3, name: "Mutfak /\nBanyo", icon: "🚿" },
      { id: 4, name: "Saatlik\nYardım", icon: "⏰" },
    ],
    stats: {
      priceRange: "500-700₺",
      priceRangeDesc:
        "Fiyatlar hizmet sağlayıcıya göre değişkenlik gösterebilir.",
      duration: "1-3 saat",
      durationDesc:
        "Hizmet verenlerden, oluşturulan isteğe yanıt verdikleri ortalama süre.",
      recentCount: "200+ Temizlik",
      recentDesc:
        "Bleja, kullanarak son 30 günde gerçekleştirilen temizlik sayısı.",
    },
  };

  const activeRequests: Request[] = [
    {
      id: 1,
      status: "Pending Acceptance",
      statusColor: "#2563EB",
      statusBg: "#EFF6FF",
      service: "Plumbing",
      provider: "Alex",
      rating: 4.8,
      time: "10 min",
      image:
        "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=400",
      hasRibbon: true,
      ribbonText: "NEW",
      description: "Need urgent plumbing repair for bathroom sink leak.",
      location: "Beşiktaş, İstanbul",
      budget: "₺300-500",
      urgency: "Bugün",
    },
    {
      id: 2,
      status: "In Progress",
      statusColor: "#059669",
      statusBg: "#ECFDF5",
      service: "Electrical",
      provider: "Ben",
      rating: 4.5,
      time: "Est. 2h",
      image:
        "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=400",
      hasRibbon: false,
      description: "Light fixture installation in living room and bedroom.",
      location: "Şişli, İstanbul",
      budget: "₺400-600",
      urgency: "Yarın",
    },
  ];

  const handleCreateRequest = () => {
    router.navigate("/request");
  };

  useEffect(() => {
    navigation.getParent()?.setOptions({ title: "Temizlik" });
  }, [navigation]);

  return (
    <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
      <AddressBar />

      <ServiceATF />

      {/* CTA Button */}
      <View style={styles.ctaContainer}>
        <Link asChild href="/request">
          <Pressable style={styles.ctaButton} onPress={handleCreateRequest}>
            <Text600 style={styles.ctaButtonText}>Talep Oluştur</Text600>
          </Pressable>
        </Link>
      </View>

      {/* Active Requests */}
      <View style={{ paddingVertical: 16, paddingHorizontal: 24 }}>
        <Text style={styles.requestsListTitle}>My Active Requests</Text>

        <View style={styles.requestsList}>
          {activeRequests.map((request) => (
            <RequestCard
              key={request.id}
              request={request}
              onPress={handleRequestPress}
            />
          ))}
        </View>
      </View>

      {/* Stats Cards */}
      <View style={styles.statsContainer}>
        <StatsCard
          title={serviceData.stats.priceRange}
          description={serviceData.stats.priceRangeDesc}
        />

        <StatsCard
          title={serviceData.stats.duration}
          description={serviceData.stats.durationDesc}
        />

        <StatsCard
          title={serviceData.stats.recentCount}
          description={serviceData.stats.recentDesc}
        />
      </View>

      {/* Request Details Modal */}
      <RequestDetailsModal
        visible={modalVisible}
        request={selectedRequest}
        onClose={handleCloseModal}
      />

      {/* CTA Button */}
      <View style={styles.ctaContainer}>
        <Link asChild href="/request">
          <Pressable style={styles.ctaButton} onPress={handleCreateRequest}>
            <Text600 style={styles.ctaButtonText}>Talep Oluştur</Text600>
          </Pressable>
        </Link>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
  },

  activeRequestsSection: {
    flex: 1,
    padding: 16,
  },
  activeRequestsSectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#111827",
    marginBottom: 16,
  },

  requestsListTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#111827",
    marginBottom: 16,
  },

  requestsList: {
    gap: 12,
  },

  statsContainer: {
    marginBottom: 16,
    paddingHorizontal: 24,
    gap: 12,
  },

  ctaContainer: {
    padding: 16,
  },
  ctaButton: {
    backgroundColor: "#7C3AED",
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: "center",
    elevation: 4,
    shadowColor: "#7C3AED",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
  ctaButtonText: {
    color: "white",
    fontSize: 18,
  },
  bottomNav: {
    flexDirection: "row",
    backgroundColor: "white",
    borderTopWidth: 1,
    borderTopColor: "#E5E7EB",
    paddingBottom: 8,
    paddingTop: 8,
    elevation: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  navItem: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 8,
  },
  navItemCenter: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: -24,
  },
  navLabel: {
    fontSize: 11,
    color: "#9CA3AF",
    marginTop: 4,
  },
  navLabelActive: {
    color: "#7C3AED",
  },
  fabButton: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: "#7C3AED",
    justifyContent: "center",
    alignItems: "center",
    elevation: 8,
    shadowColor: "#7C3AED",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 8,
  },
});

export default ServiceScreen;
