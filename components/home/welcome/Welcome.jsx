import { useState } from "react";
import {
  View,
  TouchableOpacity,
  Image,
  Text,
  TextInput,
  FlatList,
} from "react-native";

import { useRouter } from "expo-router";
import styles from "./welcome.style";
import { icons, SIZES } from "../../../constants";
import { useFonts } from "expo-font";

const Welcome = ({searchTerm,setSearchTerm,handleClick}) => {
  const router = useRouter();
  const jobTypes = [ 'React Native Dev', "Graphic Designer",'Next Js','Frontend','Node JS Dev','UI Designer','Flutter dev'];
  const [activeJobType, setActiveJobType] = useState("Full-time");

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello Akhil</Text>
        <Text style={styles.welcomeMessage}>Find Your Perfect Job</Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            placeholder="What job you looking for?"
            value={searchTerm}
            onChangeText={(text) => setSearchTerm(text)}
          />
        </View>
        <TouchableOpacity style={styles.searchBtn} onPress={handleClick}>
          <Image
            source={icons.search}
            resizeMode="contain"
            style={styles.searchBtnImage}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.tabsContainer}>
        <FlatList
          data={jobTypes}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.tab(activeJobType, item)}
              onPress={() => {
                setActiveJobType(item);
                router.push(`/search/${item}`);
              }}
            >
              <Text style={styles.tabText(activeJobType,item)}>{item}</Text>
            </TouchableOpacity>
          )}
          horizontal
          keyExtractor={item=>item}
          contentContainerStyle={{columnGap : SIZES.small}}
        />
      </View>
    </View>
  );
};

export default Welcome;
