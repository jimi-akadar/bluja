import React from "react";
import { StyleSheet } from "react-native";
import { Image } from "expo-image";
import { BlujaLogo } from "@/assets/logo";
import { Screen } from "@/primitives";

type Props = {};

const Bluja = (props: Props) => (
  <Screen style={styles.container}>
    <Image
      source={BlujaLogo}
      style={styles.image}
      contentFit="cover"
      transition={1000}
    />
  </Screen>
);

const styles = StyleSheet.create({
  container: { justifyContent: "center", alignItems: "center" },
  image: { width: 106, height: 48 },
});

export default Bluja;
