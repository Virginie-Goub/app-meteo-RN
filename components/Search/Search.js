import {
  View,
  Text,
  StatusBar,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import style from "../../styles/searchstyle";

function Search() {
  const [city, setCity] = useState("");
  return (
    <View style={style.mainContainer}>
      <StatusBar />
      {/* TITRE PRINCIPAL*/}
      <View style={style.titleContainer}>
        <Text style={style.title}>Recherche de ville</Text>
      </View>
      {/* INPUT CITY */}
      <View style={style.tapCity}>
        <Text style={style.titleInput}>Tapez le nom de la ville</Text>
        <TextInput
          value={city}
          onChangeText={setCity}
          style={style.inputCity}
          placeholder="Nom de la ville"
        />
      </View>
      {/* TOUCHE RECHERCHE */}
      <View style={style.actionsContainer}>
        <TouchableOpacity style={style.button}>
          <Ionicons name="search-outline" size={40} color="#CDECF8" />
          <Text style={style.buttonText}>RECHERCHER</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Search;
