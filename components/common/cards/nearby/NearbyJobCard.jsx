import { View, Text } from "react-native";
import React from "react";
import styles from "./nearbyjobcard.style";
import { Image, TouchableOpacity } from "react-native";

import { checkImageURL } from "../../../../utils";

const NearbyJobCard = ({ job, handlenavigate }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={() => handlenavigate}>
      <TouchableOpacity style={styles.logoContainer}>
        <Image
          source={{
            uri: checkImageURL(job.employer_logo)
              ? job.employer_logo
              : "https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg",
          }}
          resizeMode="contain"
          style={styles.logImage}
        />
      </TouchableOpacity>
      

      <View style={styles.textContainer}>
        <Text style={styles.jobName} numberOfLines={1}>
          {job.job_title}
        </Text>
        <Text style={styles.jobType}>{job.job_employment_type}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default NearbyJobCard;
