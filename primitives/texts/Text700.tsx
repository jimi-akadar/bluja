import React from "react";
import { StyleSheet, Text, type TextProps } from "react-native";
import { INTER_700 } from "@/assets/fonts/Inter";
import { COLOR_TEXT } from "@/constants/colors";

export const Text700 = ({ style, ...props }: TextProps) => (
  <Text style={[styles.text, style]} {...props} />
);

const styles = StyleSheet.create({
  text: {
    fontFamily: INTER_700,
    color: COLOR_TEXT,
  },
});
