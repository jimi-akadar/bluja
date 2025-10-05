import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Card from "@/primitives/cards/Card";
import CategorySelectModal from "./CategorySelectModal";

type Category = {
  id: string;
  name: string;
  emoji: string;
  bgColor: string;
};

type Props = Record<string, never>;

const RequestCategory = (props: Props) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<Category>({
    id: "cleaning",
    name: "Temizlik",
    emoji: "🏠",
    bgColor: "#CCFBF1",
  });

  return (
    <>
      <Card>
        <View style={styles.serviceRow}>
          <View style={styles.serviceInfo}>
            <View
              style={[
                styles.serviceIcon,
                { backgroundColor: selectedCategory.bgColor },
              ]}
            >
              <Text style={styles.serviceEmoji}>{selectedCategory.emoji}</Text>
            </View>
            <View>
              <Text style={styles.serviceLabel}>Hizmet</Text>
              <Text style={styles.serviceName}>{selectedCategory.name}</Text>
            </View>
          </View>
          <Pressable onPress={() => setModalVisible(true)}>
            <Text style={styles.changeButton}>Değiştir</Text>
          </Pressable>
        </View>
      </Card>

      <CategorySelectModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onSelect={setSelectedCategory}
        selectedCategoryId={selectedCategory.id}
      />
    </>
  );
};

export default RequestCategory;

const styles = StyleSheet.create({
  serviceRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  serviceInfo: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  serviceIcon: {
    width: 48,
    height: 48,
    backgroundColor: "#CCFBF1",
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  serviceEmoji: {
    fontSize: 24,
  },
  serviceLabel: {
    fontSize: 12,
    color: "#6B7280",
    fontWeight: "500",
  },
  serviceName: {
    fontSize: 16,
    fontWeight: "600",
    color: "#1F2937",
  },
  changeButton: {
    fontSize: 14,
    fontWeight: "500",
    color: "#0D9488",
  },
});
