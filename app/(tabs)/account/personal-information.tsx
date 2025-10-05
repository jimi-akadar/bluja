import React, { useState, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Modal,
} from "react-native";
import { Screen } from "@/primitives";

const PersonalInformationScreen = () => {
  const [fullName, setFullName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [gender, setGender] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [primaryAddress, setPrimaryAddress] = useState("");
  const [showGenderModal, setShowGenderModal] = useState(false);

  const dateInputRef = useRef<TextInput>(null);

  const handleDateChange = (text: string) => {
    // If user is deleting, handle it properly
    if (text.length < dateOfBirth.length) {
      setDateOfBirth(text);
      return;
    }

    // Remove non-numeric characters
    const cleaned = text.replace(/[^\d]/g, "");

    // Prevent further input if we have 6 digits
    if (cleaned.length > 6) {
      return;
    }

    // Format as DD/MM/YYYY
    let formatted = cleaned;
    if (cleaned.length >= 2) {
      formatted = cleaned.slice(0, 2) + "/" + cleaned.slice(2);
    }
    if (cleaned.length >= 4) {
      formatted =
        cleaned.slice(0, 2) +
        "/" +
        cleaned.slice(2, 4) +
        "/" +
        cleaned.slice(4, 8);
    }

    setDateOfBirth(formatted);

    // Blur date input when 6 digits are entered
    if (cleaned.length === 6) {
      dateInputRef.current?.blur();
    }
  };

  const handleGenderSelect = (selectedGender: string) => {
    setGender(selectedGender);
    setShowGenderModal(false);
  };

  const handlePhoneChange = (text: string) => {
    // If user is deleting, handle it properly
    if (text.length < contactNumber.length) {
      setContactNumber(text);
      return;
    }

    // Remove non-numeric characters
    const cleaned = text.replace(/[^\d]/g, "");

    // Prevent further input if we have 10 digits
    if (cleaned.length > 10) {
      return;
    }

    // Format as (XXX) XXX-XXXX
    let formatted = cleaned;
    if (cleaned.length >= 3) {
      formatted = "(" + cleaned.slice(0, 3) + ") " + cleaned.slice(3);
    }
    if (cleaned.length >= 6) {
      formatted =
        "(" +
        cleaned.slice(0, 3) +
        ") " +
        cleaned.slice(3, 6) +
        "-" +
        cleaned.slice(6, 10);
    }

    setContactNumber(formatted);
  };

  const handleSaveChanges = () => {
    console.log("Save Changes pressed");
    // Implement personal information save logic here
  };

  return (
    <Screen>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        style={{ flex: 1 }}
      >
        <ScrollView
          style={{ flex: 1 }}
          contentContainerStyle={{ flexGrow: 1 }}
          keyboardShouldPersistTaps="handled"
        >
          <View style={styles.content}>
            <Text style={styles.sectionTitle}>Personal Information</Text>

            <View style={styles.formGroup}>
              <Text style={styles.label}>Full Name</Text>
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.input}
                  placeholder="Full Name"
                  placeholderTextColor="#9CA3AF"
                  value={fullName}
                  onChangeText={setFullName}
                />
              </View>
            </View>

            <View style={styles.formGroup}>
              <Text style={styles.label}>Date of Birth</Text>
              <View style={styles.inputContainer}>
                <TextInput
                  ref={dateInputRef}
                  style={styles.input}
                  placeholder="DD/MM/YYYY"
                  placeholderTextColor="#9CA3AF"
                  value={dateOfBirth}
                  onChangeText={handleDateChange}
                  keyboardType="number-pad"
                />
              </View>
            </View>

            <View style={styles.formGroup}>
              <Text style={styles.label}>Gender (optional)</Text>
              <Pressable
                style={styles.inputContainer}
                onPress={() => setShowGenderModal(true)}
              >
                <Text
                  style={[
                    styles.input,
                    !gender && { color: "#9CA3AF" },
                  ]}
                >
                  {gender || "Gender"}
                </Text>
              </Pressable>
            </View>

            <View style={styles.formGroup}>
              <Text style={styles.label}>Contact Number</Text>
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.input}
                  placeholder="(XXX) XXX-XXXX"
                  placeholderTextColor="#9CA3AF"
                  value={contactNumber}
                  onChangeText={handlePhoneChange}
                  keyboardType="phone-pad"
                />
              </View>
            </View>

            <View style={styles.formGroup}>
              <Text style={styles.label}>Primary Address</Text>
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.input}
                  placeholder="Primary Address"
                  placeholderTextColor="#9CA3AF"
                  value={primaryAddress}
                  onChangeText={setPrimaryAddress}
                  multiline
                />
              </View>
            </View>
          </View>

          <View style={styles.footer}>
            <Pressable style={styles.saveButton} onPress={handleSaveChanges}>
              <Text style={styles.saveButtonText}>Save Changes</Text>
            </Pressable>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>

      <Modal
        visible={showGenderModal}
        transparent
        animationType="fade"
        onRequestClose={() => setShowGenderModal(false)}
      >
        <Pressable
          style={styles.modalOverlay}
          onPress={() => setShowGenderModal(false)}
        >
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Select Gender</Text>
            <Pressable
              style={styles.modalOption}
              onPress={() => handleGenderSelect("Male")}
            >
              <Text style={styles.modalOptionText}>Male</Text>
            </Pressable>
            <Pressable
              style={styles.modalOption}
              onPress={() => handleGenderSelect("Female")}
            >
              <Text style={styles.modalOptionText}>Female</Text>
            </Pressable>
            <Pressable
              style={styles.modalOption}
              onPress={() => handleGenderSelect("Other")}
            >
              <Text style={styles.modalOptionText}>Other</Text>
            </Pressable>
            <Pressable
              style={[styles.modalOption, styles.modalCancel]}
              onPress={() => setShowGenderModal(false)}
            >
              <Text style={[styles.modalOptionText, styles.modalCancelText]}>
                Cancel
              </Text>
            </Pressable>
          </View>
        </Pressable>
      </Modal>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#F3F4F6",
  },
  backButton: {
    padding: 4,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#111827",
  },
  headerSpacer: {
    width: 32,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#111827",
    marginBottom: 24,
  },
  formGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    fontWeight: "500",
    color: "#111827",
    marginBottom: 8,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F3F4F6",
    borderRadius: 12,
    paddingHorizontal: 16,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: "#6B7280",
    paddingVertical: 16,
  },
  footer: {
    paddingHorizontal: 20,
    paddingBottom: 32,
    paddingTop: 16,
  },
  saveButton: {
    backgroundColor: "#3B82F6",
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  saveButtonText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#FFFFFF",
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    padding: 20,
    width: "80%",
    maxWidth: 300,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#111827",
    marginBottom: 16,
    textAlign: "center",
  },
  modalOption: {
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#F3F4F6",
  },
  modalOptionText: {
    fontSize: 16,
    color: "#111827",
    textAlign: "center",
  },
  modalCancel: {
    borderBottomWidth: 0,
    marginTop: 8,
  },
  modalCancelText: {
    color: "#3B82F6",
  },
});

export default PersonalInformationScreen;
