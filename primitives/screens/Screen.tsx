import React from "react";
import { StyleSheet, View, type ViewProps } from "react-native";

export const Screen = ({ style, ...props }: ViewProps) => (
  <View style={[styles.screen, style]} {...props} />
);

const styles = StyleSheet.create({ screen: { flex: 1 } });
