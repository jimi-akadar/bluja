import AddressBar from "@/components/AddressBar";

import React from "react";
import { Text, View } from "react-native";
import ServiceATF from "./components/ServiceATF";
import { Screen } from "@/primitives";
import ServiceInfoList from "./components/ServiceInfoList";

type Props = {};

const ServiceScreen = (props: Props) => {
  return (
    <Screen>
      <AddressBar />

      <ServiceATF />

      <ServiceInfoList />

      <Text>ServiceScreen</Text>
    </Screen>
  );
};

export default ServiceScreen;
