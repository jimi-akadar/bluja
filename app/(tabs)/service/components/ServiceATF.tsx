import React from "react";
import { StyleSheet, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Text400, Text600 } from "@/primitives";
import { COLOR_TEXT } from "@/constants/colors";

type Props = {};

const ServiceATF = (props: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.upperContainer}>
        <View style={styles.textWrapper}>
          <Text600 style={styles.title}>Temizlik</Text600>
          <Text400 style={styles.description}>
            Profesyonel temizlikçiler ile eviniz pırıl pırıl.
          </Text400>
        </View>

        <View style={styles.image} />
      </View>

      <View style={styles.itemsContainer}>
        {[1, 2, 3, 4].map((item) => (
          <View key={item} style={styles.item}>
            <MaterialIcons name="calculate" color={COLOR_TEXT} size={24} />
            <Text600 style={styles.itemText}>Genel Temizlik</Text600>
          </View>
        ))}
      </View>
    </View>
  );
};

export default ServiceATF;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    paddingVertical: 20,
    paddingHorizontal: 24,
  },
  upperContainer: { flexDirection: "row" },
  textWrapper: { flexShrink: 1, marginRight: 16 },
  title: { fontSize: 20, lineHeight: 23 },
  description: { fontSize: 14, lineHeight: 20, marginTop: 10 },
  image: { width: 126, height: 126, backgroundColor: "gray" },
  itemsContainer: {
    marginTop: -1,
    flexDirection: "row",
    justifyContent: "space-between",
    columnGap: 24,
  },
  item: {
    alignItems: "center",
    backgroundColor: "#F6F7F8",
    paddingVertical: 12,
    paddingHorizontal: 8,
    borderRadius: 4,
    flexShrink: 1,
  },
  itemText: { marginTop: 4, textAlign: "center" },
});
