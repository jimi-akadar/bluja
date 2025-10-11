import { Dimensions, ScrollView, StyleSheet, View } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { Image } from "expo-image";

type Props = {
  items: { id: string; image: string }[];
};

const { width: SCREEN_WIDTH } = Dimensions.get("window");
const SLIDER_WIDTH = SCREEN_WIDTH - 48; // Account for horizontal padding

const Slider = ({ items }: Props) => {
  const scrollViewRef = useRef<ScrollView>(null);
  const autoPlayIntervalRef = useRef<number | null>(null);

  const [activeSlide, setActiveSlide] = useState(0);
  const [isUserInteracting, setIsUserInteracting] = useState(false);

  useEffect(() => {
    startAutoPlay();

    return () => {
      stopAutoPlay();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeSlide, isUserInteracting]);

  // Create infinite loop by duplicating first and last slides
  const infiniteSlides = [
    items[items.length - 1], // Last slide at the beginning
    ...items,
    items[0], // First slide at the end
  ];

  const handleScrollBeginDrag = () => {
    setIsUserInteracting(true);
  };

  const handleScroll = (event: any) => {
    const offsetX = event.nativeEvent.contentOffset.x;
    const slideIndex = Math.round(offsetX / SLIDER_WIDTH);

    // Calculate actual slide index (excluding duplicates)
    let actualIndex = slideIndex - 1;
    if (actualIndex < 0) actualIndex = items.length - 1;
    if (actualIndex >= items.length) actualIndex = 0;

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
        x: SLIDER_WIDTH * items.length,
        animated: false,
      });
    }

    setIsUserInteracting(false);
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

  return (
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
        {items.map((_, index) => (
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
  );
};

export default Slider;

const styles = StyleSheet.create({
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
});
