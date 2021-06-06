import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  Alert,
  ImageBackground,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";
import style from "../../styles/homestyle";
import background from "../../images/back.jpeg";

import * as Location from "expo-location";

/* Composant App */
function App() {
  const [meteo, setMeteo] = useState({}); //Données meteo

  {
    /*const [locationData, setLocationData] = useState({}); //Données de localisation*/
  }
  /*EFFET DE BORD USE EFFECT*/
  useEffect(() => {
    getDatas();
  }, []);
  /*
   * Récupération des données meteo par la localisation
   */
  async function getDatas() {
    const localisation = await getPosition();
    if (!localisation.coords) {
      Alert.alert("Nous n'arrivons pas à vous localiser");
      return;
    }

    const coords = localisation.coords;

    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?lat=${coords.latitude}&lon=${coords.longitude}&appid=YOUR-API-KEY`
    );
    const data = await response.json();
    setMeteo(data);
  }

  /*
   * Récupération de la localisation
   */

  async function getPosition() {
    /*Verifier l'autorisation d'utiliser la position qd l'app est au premier plan*/
    let permissions = await Location.getForegroundPermissionsAsync();
    /*console.log(permissions);*/

    /*Si le choix est indéterminé (l'utilisateur n'a pas encore donné l'autorisation)*/
    if (permissions.status === "undetermined") {
      permissions = await Location.requestForegroundPermissionsAsync();
      /*console.log(permissions);*/

      /*Si l'utilisation de la localisation est autorisée*/
      if (permissions.status === "granted") {
        /*Récuération de la position*/
        let localisation = await Location.getCurrentPositionAsync();
        /*console.log(location); console.log("Long : " + location.coords.longitude + "Lat : " + location.coords.latitude)*/
        /*Retourne la position*/
        return localisation;
      } else {
        return {};
      }
    }
  }

  function renderIconeMeteo() {
    if (Array.isArray(meteo.weather) && meteo.weather[0]) {
      return (
        <Image
          source={{
            uri: `http://openweathermap.org/img/wn/${meteo.weather[0].icon}@2x.png`,
          }}
          style={style.sizeLogo}
        />
      );
    } else {
      return (
        <Image
          source={{
            uri: `http://openweathermap.org/img/wn/01d@2x.png`,
          }}
          style={style.sizeLogo}
        />
      );
    }
  }

  return (
    <View style={style.mainContainer}>
      <ImageBackground source={background} style={style.image}>
        <StatusBar />
        {/* TITRE PRINCIPAL*/}
        <View style={style.titleContainer}>
          <Text style={style.title}>METEO EXPRESS</Text>
        </View>

        {/*DEUXIEME PARTIE*/}
        <View style={style.weatherContainer}>
          {/*LOGO*/}
          <View style={style.logo}>{renderIconeMeteo()}</View>
          {/*DESCRIPTION & CITY*/}
          <Text style={style.titleTwo}>
            {meteo && Array.isArray(meteo.weather) && meteo.weather[0]
              ? meteo.weather[0].description
              : "--"}
          </Text>
          <Text style={style.city}>{meteo.name ? meteo.name : "---"}</Text>
          {/*LOCALISATION LATITUDE ET LONGITUDE
        <Text style={style.location}>
          lat : {locationData.coords?.latitude ?? "--"}long :
          {locationData.coords?.longitude ?? "--"}
        </Text>*/}
        </View>

        {/*TROISIEME PARTIE*/}
        <View style={style.detailsContainer}>
          {/* DEGRES ACTUEL & VENT */}
          <View style={style.detailsRowOne}>
            <Ionicons name="thermometer-outline" size={32} color="blue" />
            <Text style={style.tempActuel}>
              {meteo.main && meteo.main.temp ? meteo.main.temp : "-"}°C
            </Text>
            <Ionicons name="speedometer-outline" size={32} color="blue" />
            <Text style={style.windActuel}>
              {meteo.wind && meteo.wind.speed ? meteo.wind.speed : "-"}
            </Text>
          </View>

          {/* HUMIDITE & TEMP MAX/MIN */}
          <View style={style.detailsRowTwo}>
            <Ionicons name="water-outline" size={32} color="blue" />
            <Text style={style.humidity}>
              {meteo.main && meteo.main.humidity ? meteo.main.humidity : "-"}%
            </Text>
            <Ionicons name="thermometer-outline" size={32} color="blue" />
            <Text style={style.maxAndMin}>
              {meteo.main && meteo.main.temp_min ? meteo.main.temp_min : "-"}°C
              {meteo.main && meteo.main.temp_max ? meteo.main.temp_max : "-"}°C
            </Text>
          </View>
        </View>
        {/* INPUT CITY 
        <View style={style.tapCity}>
          <Text style={style.titleInput}>Tapez le nom de la ville</Text>
          <TextInput
            value={city}
            onChangeText={setCity}
            style={style.inputCity}
            placeholder="Nom de la ville"
          />
        </View>*/}
        {/* TOUCHE REFRESCH */}
        <View style={style.actionsContainer}>
          <TouchableOpacity style={style.button} onPress={getDatas}>
            <Ionicons name="refresh-outline" size={40} color="#CDECF8" />
            <Text style={style.buttonText}>RAFRAICHIR</Text>
          </TouchableOpacity>
        </View>
        {/* Bouton permission
      <View style={style.actionsContainer}>
        <TouchableOpacity style={style.button} onPress={getPosition}>
          <Ionicons name="location-outline" size={40} color="#CDECF8" />
          <Text style={style.buttonText}>Se localiser</Text>
        </TouchableOpacity>
      </View>*/}
      </ImageBackground>
    </View>
  );
}
export default App;
