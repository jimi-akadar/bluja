import {
  View,
  Text,
  ScrollView,
  Pressable,
  StyleSheet,
  Image,
  ActivityIndicator,
} from "react-native";
import React, { useState } from "react";
import { Screen, Text600 } from "@/primitives";
import Card from "@/primitives/cards/Card";
import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";

type Props = {};

const RequestSummaryScreen = (props: Props) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  // TODO: Replace with actual data from form state/context
  const requestData = {
    category: {
      name: "Temizlik",
      emoji: "🏠",
      bgColor: "#CCFBF1",
    },
    location: {
      address: "Kadıköy, İstanbul",
      details: "Daire 5, 3. kat",
    },
    description:
      "3+1 daire genel temizliği yapılacak. Mutfak ve banyolar dahil.",
    budget: "500",
    urgency: "Today",
    dateTime: {
      date: "15 Ocak 2025",
      time: "14:00",
    },
    photos: [
      // Array of photo URIs
    ],
  };

  const handleEdit = () => {
    router.back();
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    try {
      // TODO: Handle request submission
      console.log("Submitting request...");
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));
      // Navigate to success screen or home after successful submission
      // router.push("/request/success");
    } catch (error) {
      console.error("Error submitting request:", error);
      // Handle error (show error message)
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Screen>
      <ScrollView style={{ flex: 1 }} contentContainerStyle={styles.container}>
        <Text600 style={styles.headerSubtitle}>
          Göndermeden önce talebinizi gözden geçirin
        </Text600>

        {/* Category */}
        <Card>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Hizmet</Text>
            <Pressable onPress={handleEdit}>
              <Text style={styles.editButton}>Düzenle</Text>
            </Pressable>
          </View>
          <View style={styles.categoryRow}>
            <View
              style={[
                styles.categoryIcon,
                { backgroundColor: requestData.category.bgColor },
              ]}
            >
              <Text style={styles.categoryEmoji}>
                {requestData.category.emoji}
              </Text>
            </View>
            <Text style={styles.categoryName}>{requestData.category.name}</Text>
          </View>
        </Card>

        {/* Location */}
        <Card>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Konum</Text>
            <Pressable onPress={handleEdit}>
              <Text style={styles.editButton}>Düzenle</Text>
            </Pressable>
          </View>
          <View style={styles.locationRow}>
            <MaterialIcons name="location-on" size={20} color="#6B7280" />
            <View style={{ flex: 1 }}>
              <Text style={styles.locationAddress}>
                {requestData.location.address}
              </Text>
              {requestData.location.details && (
                <Text style={styles.locationDetails}>
                  {requestData.location.details}
                </Text>
              )}
            </View>
          </View>
        </Card>

        {/* Description */}
        <Card>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Açıklama</Text>
            <Pressable onPress={handleEdit}>
              <Text style={styles.editButton}>Düzenle</Text>
            </Pressable>
          </View>
          <Text style={styles.descriptionText}>{requestData.description}</Text>
        </Card>

        {/* Budget & Urgency */}
        <View style={styles.rowContainer}>
          <Card style={styles.halfCard}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>Bütçe</Text>
            </View>
            <Text style={styles.budgetText}>₺{requestData.budget}</Text>
          </Card>

          <Card style={styles.halfCard}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>Aciliyet</Text>
            </View>
            <Text style={styles.urgencyText}>{requestData.urgency}</Text>
          </Card>
        </View>

        {/* Date & Time */}
        <Card>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Tarih ve Saat</Text>
            <Pressable onPress={handleEdit}>
              <Text style={styles.editButton}>Düzenle</Text>
            </Pressable>
          </View>
          <View style={styles.dateTimeRow}>
            <View style={styles.dateTimeItem}>
              <MaterialIcons name="calendar-today" size={20} color="#6B7280" />
              <Text style={styles.dateTimeText}>
                {requestData.dateTime.date}
              </Text>
            </View>
            <View style={styles.dateTimeItem}>
              <MaterialIcons name="access-time" size={20} color="#6B7280" />
              <Text style={styles.dateTimeText}>
                {requestData.dateTime.time}
              </Text>
            </View>
          </View>
        </Card>

        {/* Photos */}
        {requestData.photos.length > 0 && (
          <Card>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>Fotoğraflar</Text>
              <Pressable onPress={handleEdit}>
                <Text style={styles.editButton}>Düzenle</Text>
              </Pressable>
            </View>
            <View style={styles.photosGrid}>
              {requestData.photos.map((photoUri, index) => (
                <Image
                  key={index}
                  source={{ uri: photoUri }}
                  style={styles.photoThumbnail}
                />
              ))}
            </View>
          </Card>
        )}
      </ScrollView>

      {/* Action Buttons */}
      <View style={styles.actionsContainer}>
        <Pressable
          style={styles.backButton}
          onPress={handleEdit}
          disabled={isSubmitting}
        >
          <Text style={styles.backButtonText}>Geri Dön</Text>
        </Pressable>
        <Pressable
          style={[styles.submitButton, isSubmitting && styles.submitButtonDisabled]}
          onPress={handleSubmit}
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <View style={styles.loadingContainer}>
              <ActivityIndicator color="#FFFFFF" size="small" />
              <Text style={styles.submitText}>Gönderiliyor...</Text>
            </View>
          ) : (
            <Text style={styles.submitText}>Talebi Gönder</Text>
          )}
        </Pressable>
      </View>
    </Screen>
  );
};

export default RequestSummaryScreen;

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "700",
    color: "#1F2937",
    marginBottom: 8,
  },
  headerSubtitle: {
    fontSize: 14,
    color: "#6B7280",
    marginBottom: 24,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: "600",
    color: "#1F2937",
  },
  editButton: {
    fontSize: 14,
    fontWeight: "500",
    color: "#0D9488",
  },
  categoryRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
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
  locationRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 8,
  },
  locationAddress: {
    fontSize: 14,
    fontWeight: "600",
    color: "#1F2937",
  },
  locationDetails: {
    fontSize: 14,
    color: "#6B7280",
    marginTop: 4,
  },
  descriptionText: {
    fontSize: 14,
    color: "#4B5563",
    lineHeight: 20,
  },
  rowContainer: {
    flexDirection: "row",
    gap: 12,
  },
  halfCard: {
    flex: 1,
  },
  budgetText: {
    fontSize: 20,
    fontWeight: "700",
    color: "#1F2937",
  },
  urgencyText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#1F2937",
  },
  dateTimeRow: {
    flexDirection: "row",
    gap: 16,
  },
  dateTimeItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  dateTimeText: {
    fontSize: 14,
    fontWeight: "500",
    color: "#1F2937",
  },
  photosGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  photoThumbnail: {
    width: 80,
    height: 80,
    borderRadius: 8,
    backgroundColor: "#F3F4F6",
  },
  actionsContainer: {
    flexDirection: "row",
    gap: 12,
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 24,
    backgroundColor: "#FFFFFF",
    borderTopWidth: 1,
    borderTopColor: "#E5E7EB",
  },
  backButton: {
    flex: 1,
    backgroundColor: "#F3F4F6",
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: "center",
  },
  backButtonText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#4B5563",
  },
  submitButton: {
    flex: 2,
    backgroundColor: "#0D9488",
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: "center",
    shadowColor: "#0D9488",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
  },
  submitButtonDisabled: {
    backgroundColor: "#6B7280",
    shadowColor: "#6B7280",
  },
  submitText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#FFFFFF",
  },
  loadingContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
});
