import AddressBar from "@/components/AddressBar";
import { useRouter } from "expo-router";
import React from "react";
import { Button, View } from "react-native";

type Props = {};

const ServiceScreen = (props: Props) => {
  const router = useRouter();

  return (
    <View>
      <AddressBar />

      <View style={{ marginVertical: 12 }} />

      <Button title="Back" onPress={() => router.back()} />
    </View>
  );
};

export default ServiceScreen;
