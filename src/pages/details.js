import React from "react";
import { View, Text } from "react-native";
import { useRoute } from "@react-navigation/native";
import { styles } from "../components/styles"; // Adjust path as needed

export default function Details() {
  const route = useRoute();
  const { title, description } = route.params || {};

  return (
    <View style={styles.detailsContainer}>
      <View style={styles.detailsCard}>
        <Text style={styles.detailsHeading}>Task Details</Text>

        <View style={styles.detailsRow}>
          <Text style={styles.detailsLabel}>Title</Text>
          <Text style={styles.detailsValue}>{title || "N/A"}</Text>
        </View>

        <View style={styles.divider} />

        <View style={styles.detailsRow}>
          <Text style={styles.detailsLabel}>Description</Text>
          <Text style={styles.detailsValue}>{description || "N/A"}</Text>
        </View>
      </View>
    </View>
  );
}
