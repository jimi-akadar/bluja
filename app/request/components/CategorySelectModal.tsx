import { Modal, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLOR_PRIMARY } from "@/constants/colors";

type Category = {
  id: string;
  name: string;
  emoji: string;
  bgColor: string;
};

const categories: Category[] = [
  { id: "cleaning", name: "Temizlik", emoji: "🏠", bgColor: "#CCFBF1" },
  { id: "painting", name: "Boyama", emoji: "🎨", bgColor: "#FEF3C7" },
  { id: "gardening", name: "Bahçıvanlık", emoji: "🌱", bgColor: "#D1FAE5" },
  { id: "tutoring", name: "Özel Ders", emoji: "📚", bgColor: "#DBEAFE" },
];

type Props = {
  visible: boolean;
  onClose: () => void;
  onSelect: (category: Category) => void;
  selectedCategoryId?: string;
};

const CategorySelectModal = ({
  visible,
  onClose,
  onSelect,
  selectedCategoryId,
}: Props) => {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onClose}
    >
      <Pressable style={styles.overlay} onPress={onClose}>
        <Pressable style={styles.modalContent} onPress={(e) => e.stopPropagation()}>
          <Text style={styles.title}>Hizmet Kategorisi Seç</Text>

          <View style={styles.categoriesContainer}>
            {categories.map((category) => (
              <Pressable
                key={category.id}
                style={[
                  styles.categoryItem,
                  selectedCategoryId === category.id &&
                    styles.categoryItemSelected,
                ]}
                onPress={() => {
                  onSelect(category);
                  onClose();
                }}
              >
                <View
                  style={[
                    styles.categoryIcon,
                    { backgroundColor: category.bgColor },
                  ]}
                >
                  <Text style={styles.categoryEmoji}>{category.emoji}</Text>
                </View>
                <Text style={styles.categoryName}>{category.name}</Text>
              </Pressable>
            ))}
          </View>

          <Pressable style={styles.closeButton} onPress={onClose}>
            <Text style={styles.closeButtonText}>İptal</Text>
          </Pressable>
        </Pressable>
      </Pressable>
    </Modal>
  );
};

export default CategorySelectModal;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },
  modalContent: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 24,
    width: "100%",
    maxWidth: 400,
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    color: "#1F2937",
    marginBottom: 20,
    textAlign: "center",
  },
  categoriesContainer: {
    gap: 12,
  },
  categoryItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "#E5E7EB",
    gap: 12,
  },
  categoryItemSelected: {
    borderColor: COLOR_PRIMARY,
    backgroundColor: "#F9F5FF",
  },
  categoryIcon: {
    width: 48,
    height: 48,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  categoryEmoji: {
    fontSize: 24,
  },
  categoryName: {
    fontSize: 16,
    fontWeight: "600",
    color: "#1F2937",
  },
  closeButton: {
    marginTop: 20,
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
    backgroundColor: "#F3F4F6",
  },
  closeButtonText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#6B7280",
  },
});
