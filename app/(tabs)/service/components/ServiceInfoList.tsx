import { StyleSheet, View } from "react-native";
import React from "react";

import { Text400, Text600 } from "@/primitives";

type Props = {};

const items = [
  {
    title: "Başlangıç: 500-700₺",
    description: "Fiyatlar hizmet sağlayıcıya göre değişkenlik gösterebilir.",
  },
  {
    title: "Ortalama Yanıt Süresi: 1-3 saat",
    description:
      "Hizmet vereknlerin, oluşturulan isteklere yanıt verdikleri ortalama süre.",
  },
  {
    title: "Son 30 günde 200+ Temizlik",
    description:
      "Bluja, kullanarak son 30 günde gerçekleştirilen temizlik sayısı.",
  },
];

const ServiceInfoList = (props: Props) => {
  return (
    <View style={{ backgroundColor: "red", paddingHorizontal: 24, rowGap: 16 }}>
      {items.map(({ title, description }, i) => (
        <View
          key={i}
          style={{
            borderWidth: 2,
            borderColor: "#F6F7F8",
            padding: 16,
            borderRadius: 4,
          }}
        >
          <Text600>{title}</Text600>
          <Text400 style={{ marginTop: 4 }}>{description}</Text400>
        </View>
      ))}
    </View>
  );
};

export default ServiceInfoList;

const styles = StyleSheet.create({});
