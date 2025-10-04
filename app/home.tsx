import { Pressable, View } from "react-native";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import AddressBar from "@/components/AddressBar";
import { Text600 } from "@/primitives";

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#F0EFEF",
        paddingTop: 24,
        paddingHorizontal: 24,
      }}
    >
      <StatusBar style="dark" />

      <AddressBar />

      <View
        style={{
          backgroundColor: "#D9D9D9",
          height: 176,
          marginTop: 24,
          borderRadius: 4,
        }}
      />

      <View
        style={{
          marginTop: 24,
          flexDirection: "row",
          flexWrap: "wrap",
          flex: 1,
          justifyContent: "space-between",
        }}
      >
        {[1, 2, 3, 4].map((item, i) => (
          <Pressable
            key={item}
            onPress={() => router.navigate("/(tabs)/service/service")}
            style={{
              borderWidth: 1,
              borderColor: "#8E50C1",
              borderRadius: 8,
              width: "48.75%",
              columnGap: 16,
              rowGap: 24,
              marginTop: i > 1 ? 8 : 0,
              paddingTop: 8,
              paddingLeft: 8,
            }}
          >
            <Text600>Sellam</Text600>
            <View
              style={{
                alignSelf: "flex-end",
                backgroundColor: "gray",
                width: 100,
                height: 136,
                borderTopLeftRadius: 7,
                borderBottomRightRadius: 7,
              }}
            />
          </Pressable>
        ))}
      </View>
    </View>
  );
}
