import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Feather } from "@expo/vector-icons";
import Card from "@/primitives/cards/Card";
import * as ImagePicker from "expo-image-picker";

type Props = {};

const RequestPhotos = (props: Props) => {
  const [image, setImage] = useState<string | null>(null);

  const [photos, setPhotos] = useState([]);

  console.log({ photos });

  const addPhoto = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ["images"],
      allowsEditing: false,
      aspect: [4, 3],
      quality: 1,
      cameraType: ImagePicker.CameraType.back,
    });

    console.log("result");
    console.log(result);

    if (!result.canceled) {
      setPhotos((prev) => [...prev, { id: Date.now(), ...result.assets[0] }]);
    }
  };

  const removePhoto = (id) => {
    setPhotos(photos.filter((photo) => photo.id !== id));
  };

  return (
    <>
      {image && (
        <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
      )}

      <Card>
        <View style={styles.photoHeader}>
          <Text style={styles.label}>Add Photos</Text>
          <Text style={styles.photoCount}>{photos.length}/5</Text>
        </View>

        <View style={styles.photoGrid}>
          {photos.map((photo) => (
            <View key={photo.id} style={styles.photoItem}>
              <View style={styles.photoPlaceholder}>
                {/* <Feather name="camera" size={32} color="#FFFFFF" /> */}
                <Image
                  resizeMode="cover"
                  source={{ uri: photo.uri }}
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                />
              </View>
              <Pressable
                onPress={() => removePhoto(photo.id)}
                style={styles.removePhotoButton}
              >
                <Feather name="x" size={16} color="#FFFFFF" />
              </Pressable>
            </View>
          ))}

          {photos.length < 5 && (
            <Pressable onPress={addPhoto} style={styles.addPhotoButton}>
              <Feather name="camera" size={24} color="#9CA3AF" />
            </Pressable>
          )}
        </View>
        <Text style={styles.helperText}>
          Photos help providers understand your needs better
        </Text>
      </Card>
    </>
  );
};

export default RequestPhotos;

const styles = StyleSheet.create({
  label: {
    fontSize: 14,
    fontWeight: "600",
    color: "#1F2937",
    marginBottom: 12,
  },
  photoHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  photoCount: {
    fontSize: 12,
    color: "#9CA3AF",
  },
  photoGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
  },
  photoItem: {
    width: "30%",
    aspectRatio: 1,
    position: "relative",
  },
  photoPlaceholder: {
    width: "100%",
    height: "100%",
    backgroundColor: "#0D9488",
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  removePhotoButton: {
    position: "absolute",
    top: -8,
    right: -8,
    width: 24,
    height: 24,
    backgroundColor: "#EF4444",
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  addPhotoButton: {
    height: "100%",
    width: "30%",
    aspectRatio: 1,
    backgroundColor: "#F9FAFB",
    borderWidth: 2,
    borderColor: "#D1D5DB",
    borderStyle: "dashed",
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  helperText: {
    fontSize: 12,
    color: "#9CA3AF",
    marginTop: 8,
  },
});
