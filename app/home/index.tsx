import React from "react";
import { View, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";

import AddressBar from "@/components/AddressBar";
import ServiceCard, { type Service } from "./components/ServiceCard";
import Slider from "./components/Slider";

// Service data structure
const SERVICES: Service[] = [
  {
    id: "1",
    title: "Cleaning",
    subtitle: "need cleaning service?",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400",
    color: "#E8F5E9",
  },

  {
    id: "3",
    title: "Gardening",
    subtitle: "need gardening help?",
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400",
    color: "#F3E5F5",
  },
  {
    id: "4",
    title: "Painting",
    subtitle: "need painting service?",
    image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=400",
    color: "#FFF3E0",
  },
  {
    id: "5",
    title: "Tutoring",
    subtitle: "need a tutor?",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400",
    color: "#FCE4EC",
  },
];

// Slider data
const SLIDER_ITEMS = [
  {
    id: "1",
    image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800",
  },
  {
    id: "2",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800",
  },
  {
    id: "3",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800",
  },
];

const HomeScreen = () => {
  const router = useRouter();

  const handleServicePress = (service: Service) => {
    console.log("Selected service:", service.title);
    router.navigate("/(tabs)/service");
  };

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />

      <AddressBar />

      <Slider items={SLIDER_ITEMS} />

      <View style={styles.servicesGrid}>
        {SERVICES.map((service) => (
          <ServiceCard
            key={service.id}
            service={service}
            onPress={handleServicePress}
          />
        ))}
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0EFEF",
    paddingTop: 24,
    paddingHorizontal: 24,
  },

  servicesGrid: {
    marginTop: 24,
    marginBottom: 24,
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
});
