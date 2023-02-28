import { View, Text, Touchable } from "react-native";
import React , {useState}from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectBasketItems, selectBasketTotal } from "../features/basketSlice";
import { useNavigation } from "@react-navigation/core";
import { TouchableOpacity } from "react-native";

const BasketIcon = () => {
  const dispatch = useDispatch();
  const items = useSelector(selectBasketItems);
  const total = useSelector(selectBasketTotal);
  const navigation = useNavigation();

  if (items.length === 0) return null ;
   return (
    <TouchableOpacity onPress={()=>navigation.navigate("BasketScreen")}  className= "absolute px-5 rounded-2xl -bottom-2 flex-row justify-between items-center bg-teal-500 w-11/12  h-16 mx-5 mb-5 z-50">
      <Text className="text-lg font-bold text-gray-50 px-2 py-1 bg-teal-600">
        {items.length}
      </Text>
      <Text className="text-lg font-bold text-gray-50">View Basket</Text>
      <View>
        <Text className="text-lg font-bold text-gray-50">{total} $</Text>
      </View>
    </TouchableOpacity>
  );
};

export default BasketIcon;
