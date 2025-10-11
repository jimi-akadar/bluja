import {
  Modal,
  Pressable,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import React, { useState, useEffect } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { Text600 } from "@/primitives";

type Address = {
  id: string;
  name: string;
  address: string;
  isDefault?: boolean;
};

type Props = {
  visible: boolean;
  onClose: () => void;
  onSelect: (address: Address) => void;
  selectedAddressId?: string;
};

const AddressSelectModal = ({
  visible,
  onClose,
  onSelect,
  selectedAddressId,
}: Props) => {
  const [searchQuery, setSearchQuery] = useState("");

  // Reset states when modal is closed
  useEffect(() => {
    if (!visible) {
      setSearchQuery("");
    }
  }, [visible]);

  // TODO: Replace with actual data from API/state
  const addresses: Address[] = [
    {
      id: "1",
      name: "Ev",
      address:
        "Sık Mahallesi, Sok Sokak No:1, Kat:3 Daire:11 35123 Karşıyaka/İzmir",
      isDefault: true,
    },
    {
      id: "2",
      name: "İş",
      address: "Cumhuriyet Mahallesi, Atatürk Caddesi No:45, Konak/İzmir",
    },
    {
      id: "3",
      name: "Anne",
      address: "Bornova Mahallesi, 1453 Sokak No:28, Bornova/İzmir",
    },
  ];

  const filteredAddresses = addresses.filter(
    (addr) =>
      addr.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      addr.address.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleAddNewAddress = () => {
    // TODO: Navigate to add address screen
    console.log("Add new address");
    onClose();
  };

  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={onClose}
    >
      <KeyboardAvoidingView
        behavior={Platform.select({ ios: "padding", android: "padding" })}
        style={styles.keyboardView}
        keyboardVerticalOffset={Platform.select({ ios: 0, android: -200 })}
      >
        <View style={styles.overlay}>
          <Pressable style={styles.backdrop} onPress={onClose} />
          <View style={styles.modalContent}>
            {/* Header */}
            <View style={styles.header}>
              <Text600 style={styles.title}>Adres Seç</Text600>
              <Pressable onPress={onClose} style={styles.closeButton}>
                <MaterialIcons name="close" size={24} color="#6B7280" />
              </Pressable>
            </View>

            {/* Search Bar */}
            <View style={styles.searchContainer}>
              <MaterialIcons
                name="search"
                size={20}
                color="#9CA3AF"
                style={styles.searchIcon}
              />
              <TextInput
                style={styles.searchInput}
                placeholder="Adres ara..."
                placeholderTextColor="#9CA3AF"
                value={searchQuery}
                onChangeText={setSearchQuery}
              />
            </View>

            {/* Addresses List */}
            <ScrollView
              style={styles.addressList}
              showsVerticalScrollIndicator={false}
              keyboardShouldPersistTaps="handled"
            >
              {filteredAddresses.map((address) => (
                <Pressable
                  key={address.id}
                  style={[
                    styles.addressItem,
                    selectedAddressId === address.id && styles.selectedAddress,
                  ]}
                  onPress={() => {
                    onSelect(address);
                    onClose();
                  }}
                >
                  <View style={styles.addressIconContainer}>
                    <MaterialIcons
                      name="location-on"
                      size={24}
                      color={
                        selectedAddressId === address.id ? "#0D9488" : "#6B7280"
                      }
                    />
                  </View>
                  <View style={styles.addressInfo}>
                    <View style={styles.addressNameRow}>
                      <Text style={styles.addressName}>{address.name}</Text>
                      {address.isDefault && (
                        <View style={styles.defaultBadge}>
                          <Text style={styles.defaultBadgeText}>
                            Varsayılan
                          </Text>
                        </View>
                      )}
                    </View>
                    <Text style={styles.addressText} numberOfLines={2}>
                      {address.address}
                    </Text>
                  </View>
                  {selectedAddressId === address.id && (
                    <MaterialIcons
                      name="check-circle"
                      size={24}
                      color="#0D9488"
                    />
                  )}
                </Pressable>
              ))}

              {filteredAddresses.length === 0 && (
                <View style={styles.emptyState}>
                  <MaterialIcons
                    name="location-off"
                    size={48}
                    color="#D1D5DB"
                  />
                  <Text style={styles.emptyText}>Adres bulunamadı</Text>
                </View>
              )}
            </ScrollView>

            {/* Add New Address Button */}
            <Pressable style={styles.addButton} onPress={handleAddNewAddress}>
              <MaterialIcons name="add-location" size={24} color="#0D9488" />
              <Text style={styles.addButtonText}>Yeni Adres Ekle</Text>
            </Pressable>
          </View>
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
};

export default AddressSelectModal;

const styles = StyleSheet.create({
  keyboardView: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  backdrop: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  modalContent: {
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    maxHeight: "85%",
    minHeight: "50%",
    paddingBottom: 24,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#F3F4F6",
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    color: "#1F2937",
  },
  closeButton: {
    padding: 4,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F9FAFB",
    borderRadius: 12,
    marginHorizontal: 20,
    marginTop: 16,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: "#E5E7EB",
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    paddingVertical: 12,
    fontSize: 14,
    color: "#1F2937",
  },
  addressList: {
    marginTop: 16,
    paddingHorizontal: 20,
  },
  addressItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 16,
    paddingHorizontal: 12,
    borderRadius: 12,
    marginBottom: 8,
    backgroundColor: "#F9FAFB",
    borderWidth: 1,
    borderColor: "#E5E7EB",
  },
  selectedAddress: {
    backgroundColor: "#F0FDFA",
    borderColor: "#0D9488",
  },
  addressIconContainer: {
    marginRight: 12,
  },
  addressInfo: {
    flex: 1,
  },
  addressNameRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 4,
  },
  addressName: {
    fontSize: 16,
    fontWeight: "600",
    color: "#1F2937",
    marginRight: 8,
  },
  defaultBadge: {
    backgroundColor: "#DBEAFE",
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 4,
  },
  defaultBadgeText: {
    fontSize: 10,
    fontWeight: "600",
    color: "#1E40AF",
  },
  addressText: {
    fontSize: 14,
    color: "#6B7280",
    lineHeight: 20,
  },
  emptyState: {
    alignItems: "center",
    paddingVertical: 32,
  },
  emptyText: {
    fontSize: 14,
    color: "#9CA3AF",
    marginTop: 12,
  },
  addButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 20,
    marginTop: 16,
    paddingVertical: 16,
    borderRadius: 12,
    backgroundColor: "#F0FDFA",
    borderWidth: 2,
    borderColor: "#0D9488",
    borderStyle: "dashed",
  },
  addButtonText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#0D9488",
    marginLeft: 8,
  },
});
