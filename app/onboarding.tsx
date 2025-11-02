import React, { useRef, useState } from "react";
import {
  View,
  StyleSheet,
  FlatList,
  Dimensions,
  Pressable,
  Platform,
} from "react-native";
import { useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";
import { Text600, Text700, Text400 } from "@/primitives";
import { COLOR_PRIMARY, COLOR_TEXT } from "@/constants/colors";

const { width: SCREEN_WIDTH } = Dimensions.get("window");

interface OnboardingSlide {
  id: string;
  title: string;
  description: string;
  icon:
    | keyof typeof MaterialCommunityIcons.glyphMap
    | keyof typeof Ionicons.glyphMap;
  iconFamily: "MaterialCommunityIcons" | "Ionicons";
}

const slides: OnboardingSlide[] = [
  {
    id: "1",
    title: "Yakınındaki Hizmet Sağlayıcıları Bul",
    description:
      "Temizlik, boyama, bahçe bakımı ve özel ders gibi hizmetler için yakınındaki profesyonellere kolayca ulaş",
    icon: "map-marker-radius",
    iconFamily: "MaterialCommunityIcons",
  },
  {
    id: "2",
    title: "Kolayca Talep Oluştur",
    description:
      "İhtiyacını belirt, bütçeni ve aciliyet durumunu paylaş. Uygun hizmet sağlayıcılar sana ulaşsın",
    icon: "hand-pointing-up",
    iconFamily: "MaterialCommunityIcons",
  },
  {
    id: "3",
    title: "Gğvenli İletişim ve Değerlendirme",
    description:
      "Onayladığın sağlayıcıyla güvenle iletişime geç. İş bitince karşılıklı değerlendirme yap",
    icon: "shield-checkmark",
    iconFamily: "Ionicons",
  },
];

const OnboardingScreen = () => {
  const router = useRouter();
  const flatListRef = useRef<FlatList>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSkip = async () => {
    await AsyncStorage.setItem("onboarding_completed", "true");
    router.replace("/(tabs)/service");
  };

  const handleNext = () => {
    if (currentIndex < slides.length - 1) {
      flatListRef.current?.scrollToIndex({
        index: currentIndex + 1,
        animated: true,
      });
    } else {
      handleSkip();
    }
  };

  const onViewableItemsChanged = useRef(({ viewableItems }: any) => {
    if (viewableItems.length > 0) {
      setCurrentIndex(viewableItems[0].index || 0);
    }
  }).current;

  const viewabilityConfig = useRef({
    itemVisiblePercentThreshold: 50,
  }).current;

  const renderSlide = ({ item }: { item: OnboardingSlide }) => {
    const IconComponent =
      item.iconFamily === "MaterialCommunityIcons"
        ? MaterialCommunityIcons
        : Ionicons;

    return (
      <View style={styles.slide}>
        <View style={styles.iconContainer}>
          <IconComponent
            name={item.icon as any}
            size={120}
            color={COLOR_PRIMARY}
          />
        </View>
        <Text700 style={styles.title}>{item.title}</Text700>
        <Text400 style={styles.description}>{item.description}</Text400>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Pressable style={styles.skipButton} onPress={handleSkip}>
        <Text600 style={styles.skipText}>Atla</Text600>
      </Pressable>

      <FlatList
        ref={flatListRef}
        data={slides}
        renderItem={renderSlide}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={viewabilityConfig}
      />

      <View style={styles.footer}>
        <View style={styles.pagination}>
          {slides.map((_, index) => (
            <View
              key={index}
              style={[styles.dot, currentIndex === index && styles.dotActive]}
            />
          ))}
        </View>

        <Pressable style={styles.nextButton} onPress={handleNext}>
          <Text600 style={styles.nextButtonText}>
            {currentIndex === slides.length - 1 ? "Başla" : "İleri"}
          </Text600>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  skipButton: {
    position: "absolute",
    top: Platform.OS === "ios" ? 60 : 40,
    right: 20,
    zIndex: 10,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  skipText: {
    fontSize: 16,
    color: COLOR_TEXT,
  },
  slide: {
    width: SCREEN_WIDTH,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 40,
  },
  iconContainer: {
    marginBottom: 40,
  },
  title: {
    fontSize: 24,
    color: COLOR_TEXT,
    textAlign: "center",
    marginBottom: 16,
  },
  description: {
    fontSize: 16,
    color: COLOR_TEXT,
    textAlign: "center",
    lineHeight: 24,
    opacity: 0.7,
  },
  footer: {
    paddingBottom: Platform.OS === "ios" ? 50 : 30,
    paddingHorizontal: 20,
  },
  pagination: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 30,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#E0E0E0",
    marginHorizontal: 4,
  },
  dotActive: {
    width: 24,
    backgroundColor: COLOR_PRIMARY,
  },
  nextButton: {
    backgroundColor: COLOR_PRIMARY,
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: "center",
    ...Platform.select({
      ios: {
        shadowColor: COLOR_PRIMARY,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  nextButtonText: {
    fontSize: 16,
    color: "#fff",
  },
});

export default OnboardingScreen;
