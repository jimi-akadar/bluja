import React from "react";
import { StyleSheet, Text, type TextProps } from "react-native";
import { INTER_600 } from "@/assets/fonts/Inter";
import { COLOR_TEXT } from "@/constants/colors";

export const Text600 = ({ style, ...props }: TextProps) => (
  <Text style={[styles.text, style]} {...props} />
);

const styles = StyleSheet.create({
  text: {
    fontFamily: INTER_600,
    color: COLOR_TEXT,
  },
});
