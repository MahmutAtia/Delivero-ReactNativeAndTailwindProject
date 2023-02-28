import { View, Text, ScrollView } from "react-native";
import React ,{useState,useEffect}from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import FeaturElemant from "./FeaturElemant";
import { db } from "../firebse";

const FeaturRow = ({ feature, description, resFeature}) => {
  const [res, setRes] = useState([]);

  useEffect(() => {

    db.collection("restaurant").where( 'num', 'in', resFeature).onSnapshot(
      snapshot=>(
        setRes(
            snapshot.docs.map(
                doc => ({
                     
                    id : doc.id,
                    data:doc.data()
                })
            )
    
        )
    )




    )
    

  }, []);

  return (
    <View className= "mb-5">
      <View className="flex-row">
        <View className="flex-1 ">
          <Text className="text-lg font-bold">{feature}</Text>
          <Text className="text-xs text-gray-400">{description}</Text>
        </View>
        <ArrowRightIcon color="teal" size={30} />
      </View>
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 5,
          paddingTop: 10,
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
      >
       { res.map(
          item=>{
            return <FeaturElemant
            key = {item.id}
            title={item.data.res_name}
            imgUrl = {item.data.res_image}
            rating = {item.data.res_rating}
            adres = {item.data.res_adres}
            cat = {item.data.res_cat}
            res_des = {item.data.res_des}

            
             />
          }
        )}
      </ScrollView>
    </View>
  );
};

export default FeaturRow;
