import React, { useState } from "react";
import { Platform, StyleSheet, Text, Pressable } from "react-native";
import { Text400, Text700 } from "@/primitives";
import { MaterialIcons } from "@expo/vector-icons";
import AddressSelectModal from "./modals/AddressSelectModal";

type Address = {
  id: string;
  name: string;
  address: string;
  isDefault?: boolean;
};

const AddressBar = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState<Address>({
    id: "1",
    name: "Ev",
    address: "Sık Mahallesi, Sok Sokak No:1, Kat:3 Daire:11 35123 Karşıyaka/İzmir",
    isDefault: true,
  });

  const handleAddressSelect = (address: Address) => {
    setSelectedAddress(address);
    // TODO: Save to state management/storage
  };

  return (
    <>
      <Pressable
        style={styles.container}
        onPress={() => setModalVisible(true)}
      >
        <Text
          style={styles.wrapperAddress}
          numberOfLines={1}
          ellipsizeMode="tail"
        >
          <Text700 style={styles.textAddress}>{selectedAddress.name}, </Text700>
          <Text400 style={styles.textAddress}>
            {selectedAddress.address}
          </Text400>
        </Text>
        <MaterialIcons name="keyboard-arrow-down" size={14} color="#1F2937" />
      </Pressable>

      <AddressSelectModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onSelect={handleAddressSelect}
        selectedAddressId={selectedAddress.id}
      />
    </>
  );
};

export default AddressBar;

const styles = StyleSheet.create({
  container: {
    height: 26,
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.19,
        shadowRadius: 6,
      },
      android: { elevation: 6 },
    }),
    backgroundColor: "#fff",
    borderRadius: 1,
    paddingHorizontal: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    zIndex: 1,
  },
  wrapperAddress: {
    flexDirection: "row",
    flex: 1,
    marginRight: 4,
  },
  textAddressName: {},
  textAddress: { fontSize: 10, lineHeight: 12 },
});
