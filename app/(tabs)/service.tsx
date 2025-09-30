import AddressBar from "@/components/AddressBar";

import React from "react";
import { Text, View } from "react-native";

type Props = {};

const ServiceScreen = (props: Props) => {
  return (
    <View>
      <AddressBar />

      <Text>ServiceScreen</Text>
    </View>
  );
};

export default ServiceScreen;
