import {
  Dimensions,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import AddressBar from "@/components/AddressBar";
import { Text600 } from "@/primitives";
import { Image } from "expo-image";

const { width } = Dimensions.get("window");
const CARD_WIDTH = (width - 64) / 2;

type Service = {
  id: number | string;
  title: string;
  subtitle: string;
  image: string;
  color: string;
};

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

// Reusable ServiceCard Component
const ServiceCard = ({
  service,
  onPress,
}: {
  service: Service;
  onPress: any;
}) => {
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

export default function HomeScreen() {
  const router = useRouter();

  const handleServicePress = (service: Service) => {
    console.log("Selected service:", service.title);
    router.navigate("/(tabs)/service/service");
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#F0EFEF",
        paddingTop: 24,
        paddingHorizontal: 24,
      }}
    >
      <StatusBar style="dark" />

      <AddressBar />

      <View
        style={{
          backgroundColor: "#D9D9D9",
          height: 176,
          marginTop: 24,
          borderRadius: 4,
        }}
      />

      <View
        style={{
          marginTop: 24,
          marginBottom: 24,
          flex: 1,
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        {SERVICES.map((service) => (
          <ServiceCard
            key={service.id}
            service={service}
            onPress={handleServicePress}
          />
        ))}
      </View>

      {/* <View
        style={{
          marginTop: 24,
          flexDirection: "row",
          flexWrap: "wrap",
          flex: 1,
          justifyContent: "space-between",
        }}
      >
        {[1, 2, 3, 4].map((item, i) => (
          <Pressable
            key={item}
            onPress={() => router.navigate("/(tabs)/service/service")}
            style={{
              borderWidth: 1,
              borderColor: "#8E50C1",
              borderRadius: 8,
              width: "48.75%",
              columnGap: 16,
              rowGap: 24,
              marginTop: i > 1 ? 8 : 0,
              paddingTop: 8,
              paddingLeft: 8,
            }}
          >
            <Text600>Sellam</Text600>
            <View
              style={{
                alignSelf: "flex-end",
                backgroundColor: "gray",
                width: 100,
                height: 136,
                borderTopLeftRadius: 7,
                borderBottomRightRadius: 7,
              }}
            />
          </Pressable>
        ))}
      </View> */}
    </View>
  );
}

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
    resizeMode: "cover",
  },
});
