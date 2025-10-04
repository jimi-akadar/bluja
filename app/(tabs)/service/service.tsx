import React from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

type Props = {};

const ServiceScreen = (props: Props) => {
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

  const activeRequests = [
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
    },
  ];

  const handleCreateRequest = () => {};

  return (
    <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
      {/* Service Header */}
      <View style={styles.serviceHeader}>
        <View style={styles.serviceHeaderText}>
          <Text style={styles.serviceTitle}>{serviceData.title}</Text>
          <Text style={styles.serviceSubtitle}>{serviceData.subtitle}</Text>
        </View>
        <View style={styles.serviceIconContainer}>
          <Text style={styles.serviceIcon}>🧹</Text>
          <Text style={styles.serviceIconEmoji}>💧</Text>
        </View>
      </View>

      {/* Service Categories */}
      <View style={styles.categoriesContainer}>
        <View style={styles.categoriesGrid}>
          {serviceData.categories.map((category) => (
            <View key={category.id} style={styles.categoryItem}>
              <View style={styles.categoryIconBox}>
                <Text style={styles.categoryIcon}>{category.icon}</Text>
              </View>
              <Text style={styles.categoryName}>{category.name}</Text>
            </View>
          ))}
        </View>
      </View>

      {/* CTA Button */}
      <View style={styles.ctaContainer}>
        <TouchableOpacity
          style={styles.ctaButton}
          onPress={handleCreateRequest}
          activeOpacity={0.8}
        >
          <Text style={styles.ctaButtonText}>Talep Oluştur</Text>
        </TouchableOpacity>
      </View>

      {/* Active Requests */}
      <View style={{ padding: 16 }}>
        <Text style={styles.requestsListTitle}>My Active Requests</Text>

        <View style={styles.requestsList}>
          {activeRequests.map((request) => (
            <View key={request.id} style={styles.requestCard}>
              {/* Status Badge */}
              <View style={styles.statusContainer}>
                <View
                  style={[
                    styles.statusBadge,
                    { backgroundColor: request.statusBg },
                  ]}
                >
                  <Text
                    style={[styles.statusText, { color: request.statusColor }]}
                  >
                    {request.status}
                  </Text>
                </View>
              </View>

              <View style={styles.cardContent}>
                {/* Left Content */}
                <View style={styles.leftContent}>
                  <Text style={styles.serviceName}>{request.service}</Text>

                  <View style={styles.providerInfo}>
                    <Text style={styles.providerLabel}>Provider: </Text>
                    <Text style={styles.providerName}>{request.provider}</Text>
                    <Text style={styles.separator}> • </Text>
                    <Text style={styles.rating}>⭐ {request.rating}</Text>
                  </View>

                  <Text style={styles.timeInfo}>🕐 {request.time}</Text>
                </View>

                {/* Right Image */}
                <View style={styles.imageContainer}>
                  <Image
                    source={{ uri: request.image }}
                    style={styles.serviceImage}
                    resizeMode="cover"
                  />
                  {request.hasRibbon && (
                    <View style={styles.ribbon}>
                      <Text style={styles.ribbonText}>
                        {request.ribbonText}
                      </Text>
                    </View>
                  )}
                </View>
              </View>
            </View>
          ))}
        </View>
      </View>

      {/* Stats Cards */}
      <View style={styles.statsContainer}>
        {/* Price Range */}
        <View style={styles.statCard}>
          <Text style={styles.statTitle}>
            Başlangıç: {serviceData.stats.priceRange}
          </Text>
          <Text style={styles.statDescription}>
            {serviceData.stats.priceRangeDesc}
          </Text>
        </View>

        {/* Response Time */}
        <View style={styles.statCard}>
          <Text style={styles.statTitle}>
            Ortalama Yanıt Süresi: {serviceData.stats.duration}
          </Text>
          <Text style={styles.statDescription}>
            {serviceData.stats.durationDesc}
          </Text>
        </View>

        {/* Recent Activity */}
        <View style={styles.statCard}>
          <Text style={styles.statTitle}>
            Son 30 günde {serviceData.stats.recentCount}
          </Text>
          <Text style={styles.statDescription}>
            {serviceData.stats.recentDesc}
          </Text>
        </View>
      </View>

      {/* <AddressBar />

      <ServiceATF />

      <ServiceInfoList />

      <Text>ServiceScreen</Text> */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
  },
  serviceHeader: {
    backgroundColor: "white",
    padding: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  serviceHeaderText: {
    flex: 1,
  },
  serviceTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1F2937",
    marginBottom: 8,
  },
  serviceSubtitle: {
    fontSize: 14,
    color: "#6B7280",
    lineHeight: 20,
  },
  serviceIconContainer: {
    marginLeft: 16,
    position: "relative",
  },
  serviceIcon: {
    fontSize: 64,
  },
  serviceIconEmoji: {
    fontSize: 24,
    position: "absolute",
    bottom: 0,
    right: -4,
  },
  categoriesContainer: {
    backgroundColor: "white",
    padding: 16,
    marginTop: 8,
  },
  categoriesGrid: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  categoryItem: {
    alignItems: "center",
    width: "23%",
  },
  categoryIconBox: {
    width: 64,
    height: 64,
    backgroundColor: "#F3E8FF",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
    elevation: 1,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
  },
  categoryIcon: {
    fontSize: 28,
  },
  categoryName: {
    fontSize: 11,
    color: "#374151",
    textAlign: "center",
    lineHeight: 14,
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

  requestCard: {
    backgroundColor: "white",
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  statusContainer: {
    marginBottom: 12,
  },
  statusBadge: {
    alignSelf: "flex-start",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
  },
  statusText: {
    fontSize: 12,
    fontWeight: "600",
  },
  cardContent: {
    flexDirection: "row",
    gap: 12,
  },
  leftContent: {
    flex: 1,
  },
  serviceName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#111827",
    marginBottom: 8,
  },
  providerInfo: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 4,
  },
  providerLabel: {
    fontSize: 14,
    color: "#6B7280",
  },
  providerName: {
    fontSize: 14,
    color: "#2563EB",
    fontWeight: "500",
  },
  separator: {
    fontSize: 14,
    color: "#9CA3AF",
  },
  statsContainer: {
    padding: 16,
    gap: 12,
  },
  statCard: {
    backgroundColor: "white",
    borderRadius: 12,
    padding: 16,
    elevation: 1,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
  },
  statTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#1F2937",
    marginBottom: 4,
  },
  statDescription: {
    fontSize: 12,
    color: "#6B7280",
    lineHeight: 16,
  },
  rating: {
    fontSize: 14,
    fontWeight: "600",
    color: "#111827",
  },
  timeInfo: {
    fontSize: 13,
    color: "#6B7280",
  },
  imageContainer: {
    position: "relative",
  },
  serviceImage: {
    width: 128,
    height: 96,
    borderRadius: 12,
  },
  ribbon: {
    position: "absolute",
    top: -4,
    right: -4,
    backgroundColor: "#EF4444",
    paddingHorizontal: 12,
    paddingVertical: 4,
    transform: [{ rotate: "12deg" }],
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
  },
  ribbonText: {
    color: "white",
    fontSize: 10,
    fontWeight: "bold",
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
    fontWeight: "600",
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
