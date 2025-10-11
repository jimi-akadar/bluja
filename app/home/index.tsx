import React, { useRef, useState, useEffect } from "react";
import { View, StyleSheet, ScrollView, Dimensions } from "react-native";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Image } from "expo-image";
import AddressBar from "@/components/AddressBar";
import ServiceCard, { type Service } from "./components/ServiceCard";

const { width: SCREEN_WIDTH } = Dimensions.get("window");
const SLIDER_WIDTH = SCREEN_WIDTH - 48; // Account for horizontal padding

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
  const scrollViewRef = useRef<ScrollView>(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const [isUserInteracting, setIsUserInteracting] = useState(false);
  const autoPlayIntervalRef = useRef<number | null>(null);

  // Create infinite loop by duplicating first and last slides
  const infiniteSlides = [
    SLIDER_ITEMS[SLIDER_ITEMS.length - 1], // Last slide at the beginning
    ...SLIDER_ITEMS,
    SLIDER_ITEMS[0], // First slide at the end
  ];

  const handleServicePress = (service: Service) => {
    console.log("Selected service:", service.title);
    router.navigate("/(tabs)/service");
  };

  const goToNextSlide = () => {
    const nextSlide = activeSlide + 1;
    const scrollToIndex = nextSlide + 1; // +1 because of the duplicate slide at the beginning

    scrollViewRef.current?.scrollTo({
      x: SLIDER_WIDTH * scrollToIndex,
      animated: true,
    });
  };

  const startAutoPlay = () => {
    if (autoPlayIntervalRef.current) {
      clearInterval(autoPlayIntervalRef.current);
    }

    autoPlayIntervalRef.current = setInterval(() => {
      if (!isUserInteracting) {
        goToNextSlide();
      }
    }, 5000);
  };

  const stopAutoPlay = () => {
    if (autoPlayIntervalRef.current) {
      clearInterval(autoPlayIntervalRef.current);
      autoPlayIntervalRef.current = null;
    }
  };

  useEffect(() => {
    startAutoPlay();

    return () => {
      stopAutoPlay();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeSlide, isUserInteracting]);

  const handleScrollBeginDrag = () => {
    setIsUserInteracting(true);
  };

  const handleScroll = (event: any) => {
    const offsetX = event.nativeEvent.contentOffset.x;
    const slideIndex = Math.round(offsetX / SLIDER_WIDTH);

    // Calculate actual slide index (excluding duplicates)
    let actualIndex = slideIndex - 1;
    if (actualIndex < 0) actualIndex = SLIDER_ITEMS.length - 1;
    if (actualIndex >= SLIDER_ITEMS.length) actualIndex = 0;

    setActiveSlide(actualIndex);
  };

  const handleScrollEnd = (event: any) => {
    const offsetX = event.nativeEvent.contentOffset.x;
    const slideIndex = Math.round(offsetX / SLIDER_WIDTH);

    // If at the duplicate first slide (end), jump to actual first
    if (slideIndex === infiniteSlides.length - 1) {
      scrollViewRef.current?.scrollTo({
        x: SLIDER_WIDTH,
        animated: false,
      });
    }
    // If at the duplicate last slide (beginning), jump to actual last
    else if (slideIndex === 0) {
      scrollViewRef.current?.scrollTo({
        x: SLIDER_WIDTH * SLIDER_ITEMS.length,
        animated: false,
      });
    }

    setIsUserInteracting(false);
  };

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />

      <AddressBar />

      <View style={styles.sliderContainer}>
        <ScrollView
          ref={scrollViewRef}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScrollBeginDrag={handleScrollBeginDrag}
          onScroll={handleScroll}
          onMomentumScrollEnd={handleScrollEnd}
          scrollEventThrottle={16}
          style={styles.slider}
          contentOffset={{ x: SLIDER_WIDTH, y: 0 }}
        >
          {infiniteSlides.map((item, index) => (
            <Image
              key={`${item.id}-${index}`}
              source={{ uri: item.image }}
              style={styles.sliderItem}
              contentFit="cover"
            />
          ))}
        </ScrollView>

        <View style={styles.pagination}>
          {SLIDER_ITEMS.map((_, index) => (
            <View
              key={index}
              style={[
                styles.paginationDot,
                activeSlide === index && styles.paginationDotActive,
              ]}
            />
          ))}
        </View>
      </View>

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
  sliderContainer: {
    marginTop: 24,
    height: 176,
    position: "relative",
  },
  slider: {
    borderRadius: 4,
    overflow: "hidden",
  },
  sliderItem: {
    width: SLIDER_WIDTH,
    height: 176,
    borderRadius: 4,
  },
  pagination: {
    position: "absolute",
    bottom: 12,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 6,
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "rgba(255, 255, 255, 0.5)",
  },
  paginationDotActive: {
    backgroundColor: "#FFFFFF",
    width: 24,
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
