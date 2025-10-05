// app/(tabs)/search.tsx
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Image,
  StyleSheet,
  StatusBar,
  Modal,
  Platform,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const SearchScreen = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<{
    id: number;
    name: string;
    icon: string;
    color: string;
  } | null>(null);
  const [filterModalVisible, setFilterModalVisible] = useState(false);
  const [locationModalVisible, setLocationModalVisible] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState("Karşıyaka, İzmir");
  const [filters, setFilters] = useState({
    sortBy: "relevance",
    maxDistance: 10,
    minRating: 0,
    priceRange: "all",
  });

  const categories = [
    { id: 1, name: "Temizlik", icon: "🧹", color: "#F3E8FF" },
    { id: 2, name: "Boyama", icon: "🎨", color: "#DBEAFE" },
    { id: 3, name: "Bahçe", icon: "🌱", color: "#D1FAE5" },
    { id: 4, name: "Özel Ders", icon: "📚", color: "#FED7AA" },
    { id: 5, name: "Elektrik", icon: "⚡", color: "#FEF3C7" },
    { id: 6, name: "Tadilat", icon: "🔨", color: "#FEE2E2" },
  ];

  const popularSearches = [
    "Ev Temizliği",
    "Derin Temizlik",
    "Bahçe Bakımı",
    "Boya Badana",
    "Matematik Dersi",
  ];

  const recentSearches = [
    { text: "Ofis Temizliği", time: "2 saat önce" },
    { text: "Çim Biçme", time: "Dün" },
    { text: "Elektrik Tamiri", time: "3 gün önce" },
  ];

  const featuredProviders = [
    {
      id: 1,
      name: "Ahmet Y.",
      service: "Temizlik",
      rating: 4.9,
      reviews: 127,
      distance: "2.3 km",
      image: "https://i.pravatar.cc/150?img=12",
    },
    {
      id: 2,
      name: "Ayşe K.",
      service: "Bahçe Bakımı",
      rating: 4.8,
      reviews: 89,
      distance: "3.1 km",
      image: "https://i.pravatar.cc/150?img=45",
    },
    {
      id: 3,
      name: "Mehmet D.",
      service: "Boyama",
      rating: 4.7,
      reviews: 156,
      distance: "1.8 km",
      image: "https://i.pravatar.cc/150?img=33",
    },
  ];

  const savedLocations = [
    {
      id: 1,
      label: "Ev",
      address: "Karşıyaka, İzmir",
      detail: "Atatürk Cad. No:123",
      icon: "home",
    },
    {
      id: 2,
      label: "İş",
      address: "Bornova, İzmir",
      detail: "Ege Üniversitesi Kampüsü",
      icon: "briefcase",
    },
    {
      id: 3,
      label: "Anne Evi",
      address: "Konak, İzmir",
      detail: "Cumhuriyet Bulvarı No:45",
      icon: "home-outline",
    },
  ];

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="white" />

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Arama</Text>

        {/* Search Input */}
        <View style={styles.searchContainer}>
          <Ionicons
            name="search"
            size={20}
            color="#9CA3AF"
            style={styles.searchIcon}
          />
          <TextInput
            style={styles.searchInput}
            value={searchQuery}
            onChangeText={setSearchQuery}
            placeholder="Hizmet veya sağlayıcı ara..."
            placeholderTextColor="#9CA3AF"
          />
          {searchQuery.length > 0 && (
            <TouchableOpacity
              onPress={() => setSearchQuery("")}
              style={styles.clearButton}
            >
              <Ionicons name="close-circle" size={20} color="#9CA3AF" />
            </TouchableOpacity>
          )}
        </View>

        {/* Location & Filter */}
        <View style={styles.filterRow}>
          <TouchableOpacity
            style={styles.filterButton}
            onPress={() => setLocationModalVisible(true)}
          >
            <Ionicons name="location" size={16} color="#7C3AED" />
            <Text style={styles.filterText}>{selectedLocation}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.filterButton}
            onPress={() => setFilterModalVisible(true)}
          >
            <Ionicons name="options" size={16} color="#7C3AED" />
            <Text style={styles.filterText}>Filtrele</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Content */}
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Categories */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Kategoriler</Text>
          <View style={styles.categoriesGrid}>
            {categories.map((cat) => (
              <TouchableOpacity
                key={cat.id}
                onPress={() => setSelectedCategory(cat)}
                style={[
                  styles.categoryCard,
                  { backgroundColor: cat.color },
                  selectedCategory?.id === cat.id &&
                    styles.categoryCardSelected,
                ]}
              >
                <Text style={styles.categoryIcon}>{cat.icon}</Text>
                <Text style={styles.categoryName}>{cat.name}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Popular Searches */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Ionicons name="trending-up" size={16} color="#7C3AED" />
            <Text style={styles.sectionTitle}>Popüler Aramalar</Text>
          </View>
          <View style={styles.tagsContainer}>
            {popularSearches.map((search, idx) => (
              <TouchableOpacity key={idx} style={styles.tag}>
                <Text style={styles.tagText}>{search}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Recent Searches */}
        <View style={styles.section}>
          <View style={styles.sectionHeaderRow}>
            <View style={styles.sectionHeader}>
              <Ionicons name="time-outline" size={16} color="#6B7280" />
              <Text style={styles.sectionTitle}>Son Aramalar</Text>
            </View>
            <TouchableOpacity>
              <Text style={styles.clearAllText}>Temizle</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.recentList}>
            {recentSearches.map((search, idx) => (
              <View key={idx} style={styles.recentItem}>
                <View style={styles.recentLeft}>
                  <View style={styles.recentIconBox}>
                    <Ionicons name="search" size={16} color="#6B7280" />
                  </View>
                  <View>
                    <Text style={styles.recentText}>{search.text}</Text>
                    <Text style={styles.recentTime}>{search.time}</Text>
                  </View>
                </View>
                <TouchableOpacity>
                  <Ionicons name="close" size={16} color="#9CA3AF" />
                </TouchableOpacity>
              </View>
            ))}
          </View>
        </View>

        {/* Featured Providers */}
        <View style={[styles.section, { marginBottom: 100 }]}>
          <Text style={styles.sectionTitle}>Öne Çıkan Sağlayıcılar</Text>
          <View style={styles.providersList}>
            {featuredProviders.map((provider) => (
              <View key={provider.id} style={styles.providerCard}>
                <Image
                  source={{ uri: provider.image }}
                  style={styles.providerImage}
                />
                <View style={styles.providerInfo}>
                  <Text style={styles.providerName}>{provider.name}</Text>
                  <Text style={styles.providerService}>{provider.service}</Text>
                  <View style={styles.providerMeta}>
                    <View style={styles.ratingContainer}>
                      <Text style={styles.ratingStar}>⭐</Text>
                      <Text style={styles.ratingText}>{provider.rating}</Text>
                      <Text style={styles.reviewsText}>
                        ({provider.reviews})
                      </Text>
                    </View>
                    <Text style={styles.metaSeparator}>•</Text>
                    <View style={styles.distanceContainer}>
                      <Ionicons name="location" size={12} color="#9CA3AF" />
                      <Text style={styles.distanceText}>
                        {provider.distance}
                      </Text>
                    </View>
                  </View>
                </View>
                <TouchableOpacity style={styles.viewButton}>
                  <Text style={styles.viewButtonText}>Görüntüle</Text>
                </TouchableOpacity>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>

      {/* Filter Modal */}
      <Modal
        visible={filterModalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setFilterModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            {/* Modal Header */}
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Filtrele</Text>
              <TouchableOpacity onPress={() => setFilterModalVisible(false)}>
                <Ionicons name="close" size={24} color="#111827" />
              </TouchableOpacity>
            </View>

            <ScrollView showsVerticalScrollIndicator={false}>
              {/* Sort By */}
              <View style={styles.filterSection}>
                <Text style={styles.filterSectionTitle}>Sıralama</Text>
                <View style={styles.optionsContainer}>
                  {[
                    { value: "relevance", label: "En İlgili" },
                    { value: "rating", label: "En Yüksek Puan" },
                    { value: "distance", label: "En Yakın" },
                    { value: "reviews", label: "En Çok Yorum" },
                  ].map((option) => (
                    <TouchableOpacity
                      key={option.value}
                      style={[
                        styles.optionButton,
                        filters.sortBy === option.value &&
                          styles.optionButtonActive,
                      ]}
                      onPress={() =>
                        setFilters({ ...filters, sortBy: option.value })
                      }
                    >
                      <Text
                        style={[
                          styles.optionText,
                          filters.sortBy === option.value &&
                            styles.optionTextActive,
                        ]}
                      >
                        {option.label}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </View>
              </View>

              {/* Distance */}
              <View style={styles.filterSection}>
                <Text style={styles.filterSectionTitle}>
                  Maksimum Mesafe: {filters.maxDistance} km
                </Text>
                <View style={styles.optionsContainer}>
                  {[5, 10, 15, 20, 50].map((distance) => (
                    <TouchableOpacity
                      key={distance}
                      style={[
                        styles.optionButton,
                        filters.maxDistance === distance &&
                          styles.optionButtonActive,
                      ]}
                      onPress={() =>
                        setFilters({ ...filters, maxDistance: distance })
                      }
                    >
                      <Text
                        style={[
                          styles.optionText,
                          filters.maxDistance === distance &&
                            styles.optionTextActive,
                        ]}
                      >
                        {distance} km
                      </Text>
                    </TouchableOpacity>
                  ))}
                </View>
              </View>

              {/* Minimum Rating */}
              <View style={styles.filterSection}>
                <Text style={styles.filterSectionTitle}>Minimum Puan</Text>
                <View style={styles.optionsContainer}>
                  {[
                    { value: 0, label: "Hepsi" },
                    { value: 3, label: "3+ ⭐" },
                    { value: 4, label: "4+ ⭐" },
                    { value: 4.5, label: "4.5+ ⭐" },
                  ].map((option) => (
                    <TouchableOpacity
                      key={option.value}
                      style={[
                        styles.optionButton,
                        filters.minRating === option.value &&
                          styles.optionButtonActive,
                      ]}
                      onPress={() =>
                        setFilters({ ...filters, minRating: option.value })
                      }
                    >
                      <Text
                        style={[
                          styles.optionText,
                          filters.minRating === option.value &&
                            styles.optionTextActive,
                        ]}
                      >
                        {option.label}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </View>
              </View>

              {/* Price Range */}
              <View style={styles.filterSection}>
                <Text style={styles.filterSectionTitle}>Fiyat Aralığı</Text>
                <View style={styles.optionsContainer}>
                  {[
                    { value: "all", label: "Hepsi" },
                    { value: "budget", label: "Ekonomik" },
                    { value: "moderate", label: "Orta" },
                    { value: "premium", label: "Premium" },
                  ].map((option) => (
                    <TouchableOpacity
                      key={option.value}
                      style={[
                        styles.optionButton,
                        filters.priceRange === option.value &&
                          styles.optionButtonActive,
                      ]}
                      onPress={() =>
                        setFilters({ ...filters, priceRange: option.value })
                      }
                    >
                      <Text
                        style={[
                          styles.optionText,
                          filters.priceRange === option.value &&
                            styles.optionTextActive,
                        ]}
                      >
                        {option.label}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </View>
              </View>
            </ScrollView>

            {/* Modal Footer */}
            <View style={styles.modalFooter}>
              <TouchableOpacity
                style={styles.resetButton}
                onPress={() =>
                  setFilters({
                    sortBy: "relevance",
                    maxDistance: 10,
                    minRating: 0,
                    priceRange: "all",
                  })
                }
              >
                <Text style={styles.resetButtonText}>Sıfırla</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.applyButton}
                onPress={() => setFilterModalVisible(false)}
              >
                <Text style={styles.applyButtonText}>Uygula</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      {/* Location Modal */}
      <Modal
        visible={locationModalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setLocationModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            {/* Modal Header */}
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Konum Seç</Text>
              <TouchableOpacity onPress={() => setLocationModalVisible(false)}>
                <Ionicons name="close" size={24} color="#111827" />
              </TouchableOpacity>
            </View>

            <ScrollView showsVerticalScrollIndicator={false}>
              {/* Choose on Map */}
              <TouchableOpacity
                style={styles.mapButton}
                onPress={() => {
                  alert("Harita özelliği yakında eklenecek!");
                }}
              >
                <View style={styles.mapIconContainer}>
                  <Ionicons name="map" size={24} color="#7C3AED" />
                </View>
                <View style={styles.mapButtonInfo}>
                  <Text style={styles.mapButtonText}>Haritadan Seç</Text>
                  <Text style={styles.mapButtonSubtext}>
                    Konum seçmek için haritayı kullan
                  </Text>
                </View>
                <Ionicons name="chevron-forward" size={20} color="#9CA3AF" />
              </TouchableOpacity>

              {/* Saved Locations */}
              <View style={styles.savedLocationsSection}>
                <Text style={styles.savedLocationsTitle}>
                  Kayıtlı Konumlar
                </Text>
                {savedLocations.map((location) => (
                  <TouchableOpacity
                    key={location.id}
                    style={[
                      styles.savedLocationItem,
                      selectedLocation === location.address &&
                        styles.savedLocationItemActive,
                    ]}
                    onPress={() => {
                      setSelectedLocation(location.address);
                      setLocationModalVisible(false);
                    }}
                  >
                    <View style={styles.savedLocationIcon}>
                      <Ionicons
                        name={location.icon as any}
                        size={20}
                        color={
                          selectedLocation === location.address
                            ? "#7C3AED"
                            : "#6B7280"
                        }
                      />
                    </View>
                    <View style={styles.savedLocationInfo}>
                      <Text
                        style={[
                          styles.savedLocationLabel,
                          selectedLocation === location.address &&
                            styles.savedLocationLabelActive,
                        ]}
                      >
                        {location.label}
                      </Text>
                      <Text style={styles.savedLocationAddress}>
                        {location.address}
                      </Text>
                      <Text style={styles.savedLocationDetail}>
                        {location.detail}
                      </Text>
                    </View>
                    {selectedLocation === location.address && (
                      <Ionicons
                        name="checkmark-circle"
                        size={20}
                        color="#7C3AED"
                      />
                    )}
                  </TouchableOpacity>
                ))}
              </View>

              {/* Add New Location */}
              <TouchableOpacity style={styles.addLocationButton}>
                <Ionicons name="add-circle-outline" size={20} color="#7C3AED" />
                <Text style={styles.addLocationText}>Yeni Konum Ekle</Text>
              </TouchableOpacity>
            </ScrollView>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9FAFB",
  },
  header: {
    backgroundColor: "white",
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#111827",
    marginBottom: 16,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F3F4F6",
    borderRadius: 12,
    paddingHorizontal: 12,
    marginBottom: 12,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    paddingVertical: 12,
    fontSize: 14,
    color: "#111827",
  },
  clearButton: {
    padding: 4,
  },
  filterRow: {
    flexDirection: "row",
    gap: 8,
  },
  filterButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F3F4F6",
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
    gap: 6,
  },
  filterText: {
    fontSize: 13,
    color: "#374151",
  },
  content: {
    flex: 1,
  },
  section: {
    backgroundColor: "white",
    paddingHorizontal: 16,
    paddingVertical: 16,
    marginBottom: 8,
  },
  sectionTitle: {
    fontSize: 13,
    fontWeight: "600",
    color: "#374151",
    marginLeft: 4,
  },
  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginBottom: 12,
  },
  sectionHeaderRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  clearAllText: {
    fontSize: 12,
    color: "#7C3AED",
    fontWeight: "500",
  },
  categoriesGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
    marginTop: 12,
  },
  categoryCard: {
    width: "30%",
    borderRadius: 12,
    padding: 12,
    alignItems: "center",
  },
  categoryCardSelected: {
    borderWidth: 2,
    borderColor: "#7C3AED",
  },
  categoryIcon: {
    fontSize: 24,
    marginBottom: 4,
  },
  categoryName: {
    fontSize: 11,
    fontWeight: "500",
    color: "#374151",
    textAlign: "center",
  },
  tagsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  tag: {
    backgroundColor: "#F3E8FF",
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 16,
  },
  tagText: {
    fontSize: 12,
    color: "#7C3AED",
    fontWeight: "500",
  },
  recentList: {
    gap: 12,
  },
  recentItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  recentLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  recentIconBox: {
    width: 32,
    height: 32,
    backgroundColor: "#F3F4F6",
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  recentText: {
    fontSize: 14,
    color: "#1F2937",
  },
  recentTime: {
    fontSize: 12,
    color: "#6B7280",
    marginTop: 2,
  },
  providersList: {
    gap: 12,
    marginTop: 12,
  },
  providerCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F9FAFB",
    borderRadius: 12,
    padding: 12,
    gap: 12,
  },
  providerImage: {
    width: 56,
    height: 56,
    borderRadius: 28,
  },
  providerInfo: {
    flex: 1,
  },
  providerName: {
    fontSize: 15,
    fontWeight: "600",
    color: "#111827",
  },
  providerService: {
    fontSize: 12,
    color: "#6B7280",
    marginTop: 2,
  },
  providerMeta: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 6,
    gap: 6,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  ratingStar: {
    fontSize: 12,
  },
  ratingText: {
    fontSize: 12,
    fontWeight: "500",
    color: "#111827",
  },
  reviewsText: {
    fontSize: 12,
    color: "#6B7280",
  },
  metaSeparator: {
    fontSize: 12,
    color: "#9CA3AF",
  },
  distanceContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 2,
  },
  distanceText: {
    fontSize: 12,
    color: "#6B7280",
  },
  viewButton: {
    backgroundColor: "#7C3AED",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
  },
  viewButtonText: {
    color: "white",
    fontSize: 12,
    fontWeight: "600",
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "flex-end",
  },
  modalContent: {
    backgroundColor: "white",
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingTop: 20,
    maxHeight: "80%",
  },
  modalHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#F3F4F6",
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#111827",
  },
  filterSection: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#F3F4F6",
  },
  filterSectionTitle: {
    fontSize: 15,
    fontWeight: "600",
    color: "#111827",
    marginBottom: 12,
  },
  optionsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  optionButton: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 20,
    backgroundColor: "#F3F4F6",
    borderWidth: 1,
    borderColor: "#F3F4F6",
  },
  optionButtonActive: {
    backgroundColor: "#F3E8FF",
    borderColor: "#7C3AED",
  },
  optionText: {
    fontSize: 13,
    color: "#6B7280",
    fontWeight: "500",
  },
  optionTextActive: {
    color: "#7C3AED",
  },
  modalFooter: {
    flexDirection: "row",
    gap: 12,
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderTopWidth: 1,
    borderTopColor: "#F3F4F6",
  },
  resetButton: {
    flex: 1,
    paddingVertical: 14,
    borderRadius: 12,
    backgroundColor: "#F3F4F6",
    alignItems: "center",
  },
  resetButtonText: {
    fontSize: 15,
    fontWeight: "600",
    color: "#6B7280",
  },
  applyButton: {
    flex: 1,
    paddingVertical: 14,
    borderRadius: 12,
    backgroundColor: "#7C3AED",
    alignItems: "center",
  },
  applyButtonText: {
    fontSize: 15,
    fontWeight: "600",
    color: "white",
  },
  mapButton: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: "#F3E8FF",
    borderBottomWidth: 1,
    borderBottomColor: "#E9D5FF",
    gap: 12,
  },
  mapIconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  mapButtonInfo: {
    flex: 1,
  },
  mapButtonText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#111827",
  },
  mapButtonSubtext: {
    fontSize: 13,
    color: "#6B7280",
    marginTop: 2,
  },
  savedLocationsSection: {
    paddingTop: 16,
  },
  savedLocationsTitle: {
    fontSize: 13,
    fontWeight: "600",
    color: "#6B7280",
    paddingHorizontal: 20,
    marginBottom: 12,
    textTransform: "uppercase",
    letterSpacing: 0.5,
  },
  savedLocationItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 14,
    gap: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#F3F4F6",
  },
  savedLocationItemActive: {
    backgroundColor: "#F9FAFB",
  },
  savedLocationIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#F3F4F6",
    justifyContent: "center",
    alignItems: "center",
  },
  savedLocationInfo: {
    flex: 1,
  },
  savedLocationLabel: {
    fontSize: 15,
    fontWeight: "600",
    color: "#111827",
  },
  savedLocationLabelActive: {
    color: "#7C3AED",
  },
  savedLocationAddress: {
    fontSize: 13,
    color: "#6B7280",
    marginTop: 2,
  },
  savedLocationDetail: {
    fontSize: 12,
    color: "#9CA3AF",
    marginTop: 1,
  },
  addLocationButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 16,
    marginHorizontal: 20,
    marginVertical: 16,
    borderWidth: 1.5,
    borderColor: "#7C3AED",
    borderRadius: 12,
    borderStyle: "dashed",
    gap: 8,
  },
  addLocationText: {
    fontSize: 15,
    fontWeight: "600",
    color: "#7C3AED",
  },
});

export default SearchScreen;
