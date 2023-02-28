import { View, Text, Image, TextInput, ScrollView } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect, useState, useEffect } from "react";
import {
  UserIcon,
  ChevronDownIcon,
  UsersIcon,
  AdjustmentsVerticalIcon,
  MagnifyingGlassIcon,
} from "react-native-heroicons/outline";
import { SafeAreaView } from "react-native-safe-area-context";
import Catigories from "../components/Catigories";
import FeatureRow from "../components/FeaturRow";
import { db } from "../firebse";

const HomeScreen = () => {
  const nav = useNavigation();
  useLayoutEffect(() => {
    nav.setOptions({
      headerShown: false,
    });
  });
  const [features, setFeatures] = useState([]);

  useEffect(() => {
    db.collection("feature_menu").onSnapshot((snapshot) => {
      setFeatures(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
      
    });
   

    
  }, []);
 

  return (
    <SafeAreaView className="bg-white ">
      {/* Header*/}
      <View className="flex-row  items-center  space-x-2 pb-2 p-3 ">
        <Image
          className="h-10 w-10 object-contain p-4 rounded-full bg-gray-500"
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSctjd-61udmE_sieZQqPpv4hi4s523H8W5SQ&usqp=CAU",
          }}
        />
        <View className="flex-1">
          <Text className="text-xs text-gray-400">Deliver Now!</Text>
          <Text className="text-lg font-bold">
            Current Location <ChevronDownIcon size={20} color="teal" />
          </Text>
        </View>
        <UserIcon size={30} color="teal" />
      </View>

      {/*Search*/}
      <View className="flex-row items-center space-x-2  pb-2 p-3">
        <View className="flex-row flex-1 items-center bg-gray-200 space-x-2 p-2 ">
          <MagnifyingGlassIcon size={20} color="gray" />
          <TextInput className="  bg-transparent" />
        </View>

        <AdjustmentsVerticalIcon color="teal" />
      </View>

      {/* main view */}

      <ScrollView className="bg-gray-50 p-3 mb-36">
        {/*Catigories*/}
        <Catigories />

        {/*Featur rows */}
        {features.map((item) => {
          return (
            <FeatureRow
              key={item.id}
              feature={item.data.feature}
              description={item.data.des}
              resFeature = {item.data.res}
              
            />
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
