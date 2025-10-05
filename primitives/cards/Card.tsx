import { StyleSheet, View, type ViewProps } from "react-native";
import React from "react";

const Card = ({ style, ...props }: ViewProps) => (
  <View style={[cardStyles.card, style]} {...props} />
);

export default Card;

export const cardStyles = StyleSheet.create({
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
});
