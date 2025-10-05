import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { Text400, Text600 } from "@/primitives";
import { COLOR_TEXT } from "@/constants/colors";

type Props = {};

const ServiceATF = (props: Props) => {
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

  return (
    <View
      style={{
        paddingVertical: 20,
        paddingHorizontal: 24,
        backgroundColor: "#fff",
      }}
    >
      {/* Service Header */}
      <View style={styles.serviceHeader}>
        <View style={styles.serviceHeaderText}>
          <Text600 style={styles.serviceTitle}>{serviceData.title}</Text600>
          <Text400 style={styles.serviceSubtitle}>
            {serviceData.subtitle}
          </Text400>
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
              <Text600 style={styles.categoryName}>{category.name}</Text600>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
};

export default ServiceATF;

const styles = StyleSheet.create({
  serviceHeader: {
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
    color: COLOR_TEXT,
    marginBottom: 8,
  },
  serviceSubtitle: {
    fontSize: 14,
    color: COLOR_TEXT,
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
    color: "#264364",
    textAlign: "center",
    lineHeight: 14,
  },
});
