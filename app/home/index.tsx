import React from "react";
import { View, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import AddressBar from "@/components/AddressBar";
import ServiceCard, { type Service } from "./components/ServiceCard";

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

      <View style={styles.placeholder} />

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
  placeholder: {
    backgroundColor: "#D9D9D9",
    height: 176,
    marginTop: 24,
    borderRadius: 4,
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
