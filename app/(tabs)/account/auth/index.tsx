import { useState } from "react";
import {
  View,
  TextInput,
  Pressable,
  StyleSheet,
  ScrollView,
  Platform,
} from "react-native";
// import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Text600, Text700, Text400 } from "@/primitives";
import { COLOR_PRIMARY } from "@/constants/colors";

const UserLoginScreen = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const router = useRouter();

  const handleLogin = async () => {
    // Mock: Phone number ile giriş (backend entegrasyonu sonra)
    // await AsyncStorage.setItem("auth_token", "mock_token");
    // await AsyncStorage.setItem("user_phone", phoneNumber);
    router.replace("/account");
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      keyboardShouldPersistTaps="handled"
    >
      <View style={styles.header}>
        <Text700 style={styles.title}>Hoş Geldin</Text700>
        <Text400 style={styles.subtitle}>
          Telefon numaranla giriş yap veya kayıt ol
        </Text400>
      </View>

      <View style={styles.form}>
        <View style={styles.inputGroup}>
          <Text600 style={styles.label}>Telefon Numarası</Text600>
          <View style={styles.phoneContainer}>
            <View style={styles.countryCode}>
              <Text600 style={styles.countryCodeText}>🇹🇷 +90</Text600>
            </View>
            <TextInput
              style={styles.phoneInput}
              placeholder="5XX XXX XX XX"
              placeholderTextColor="#9CA3AF"
              value={phoneNumber}
              onChangeText={setPhoneNumber}
              keyboardType="phone-pad"
              maxLength={10}
            />
          </View>
          <Text400 style={styles.helperText}>
            SMS ile doğrulama kodu göndereceğiz
          </Text400>
        </View>

        <Pressable style={styles.loginButton} onPress={handleLogin}>
          <Text600 style={styles.loginButtonText}>Giriş Yap</Text600>
        </Pressable>

        <Pressable
          style={styles.registerButton}
          onPress={() => router.push("/account/auth/UserRegisterScreen")}
        >
          <Text600 style={styles.registerButtonText}>Kayıt Ol</Text600>
        </Pressable>

        <View style={styles.divider}>
          <View style={styles.dividerLine} />
          <Text400 style={styles.dividerText}>veya devam et</Text400>
          <View style={styles.dividerLine} />
        </View>

        <Pressable style={styles.providerButton} onPress={handleLogin}>
          <MaterialCommunityIcons
            name="briefcase-outline"
            size={20}
            color={COLOR_PRIMARY}
            style={styles.providerIcon}
          />
          <Text600 style={styles.providerButtonText}>
            Hizmet Sağlayıcı Olarak Devam Et
          </Text600>
        </Pressable>
      </View>
    </ScrollView>
  );
};

export default UserLoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9FAFB",
  },
  contentContainer: {
    padding: 20,
    paddingTop: 40,
  },
  header: {
    marginBottom: 32,
  },
  title: {
    fontSize: 28,
    color: "#1F2937",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 15,
    color: "#6B7280",
  },
  form: {
    gap: 16,
  },
  inputGroup: {
    gap: 8,
  },
  label: {
    fontSize: 14,
    color: "#1F2937",
  },
  input: {
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#E5E7EB",
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 15,
    color: "#1F2937",
  },
  phoneContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#E5E7EB",
    borderRadius: 12,
    overflow: "hidden",
  },
  countryCode: {
    paddingHorizontal: 12,
    paddingVertical: 14,
    borderRightWidth: 1,
    borderRightColor: "#E5E7EB",
    backgroundColor: "#F9FAFB",
  },
  countryCodeText: {
    fontSize: 15,
    color: "#1F2937",
  },
  phoneInput: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 15,
    color: "#1F2937",
  },
  helperText: {
    fontSize: 12,
    color: "#9CA3AF",
    marginTop: 6,
  },
  loginButton: {
    backgroundColor: COLOR_PRIMARY,
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: "center",
    marginTop: 8,
    ...Platform.select({
      ios: {
        shadowColor: COLOR_PRIMARY,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  loginButtonText: {
    fontSize: 16,
    color: "#FFFFFF",
  },
  registerButton: {
    backgroundColor: "#FFFFFF",
    borderWidth: 2,
    borderColor: COLOR_PRIMARY,
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: "center",
    marginTop: 8,
  },
  registerButtonText: {
    fontSize: 16,
    color: COLOR_PRIMARY,
  },
  divider: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 24,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: "#E5E7EB",
  },
  dividerText: {
    fontSize: 14,
    color: "#9CA3AF",
    paddingHorizontal: 16,
  },
  providerButton: {
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#E5E7EB",
    borderRadius: 12,
    paddingVertical: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  providerIcon: {
    marginRight: 8,
  },
  providerButtonText: {
    fontSize: 15,
    color: COLOR_PRIMARY,
  },
});
