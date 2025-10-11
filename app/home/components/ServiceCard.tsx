import { Pressable, StyleSheet, Text, View, Dimensions } from "react-native";
import React from "react";
import { Image } from "expo-image";

const { width } = Dimensions.get("window");
const CARD_WIDTH = (width - 64) / 2;

export type Service = {
  id: number | string;
  title: string;
  subtitle: string;
  image: string;
  color: string;
};

type Props = {
  service: Service;
  onPress: (service: Service) => void;
};

const ServiceCard = ({ service, onPress }: Props) => {
  return (
    <Pressable style={styles.card} onPress={() => onPress(service)}>
      <Text style={styles.cardTitle}>{service.title}</Text>
      <Text style={styles.cardSubtitle}>{service.subtitle}</Text>

      <View style={[styles.imageContainer, { backgroundColor: service.color }]}>
        <Image source={{ uri: service.image }} style={styles.cardImage} />
      </View>
    </Pressable>
  );
};

export default ServiceCard;

const styles = StyleSheet.create({
  card: {
    width: CARD_WIDTH,
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#E0E0E0",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#6B4CE6",
    marginBottom: 4,
  },
  cardSubtitle: {
    fontSize: 12,
    color: "#757575",
    marginBottom: 12,
  },
  imageContainer: {
    width: "100%",
    height: 120,
    borderRadius: 12,
    overflow: "hidden",
  },
  cardImage: {
    width: "100%",
    height: "100%",
  },
});
