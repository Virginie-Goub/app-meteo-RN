import {
  View,
  Text,
  StatusBar,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import style from "../../styles/contactstyle";

function Contact() {
  const [name, setName] = useState("");
  const [firstname, setFirstname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  return (
    <View style={style.mainContainer}>
      <StatusBar />

      {/* TITRE PRINCIPAL*/}
      <View style={style.titleContainer}>
        <Text style={style.title}>CONTACT</Text>
      </View>

      {/* INPUT CONTACT */}
      <View style={style.tapContact}>
        {/* INPUT Name*/}
        <Text style={style.titleInput}>Nom :</Text>
        <TextInput
          value={name}
          onChangeText={setName}
          style={style.inputName}
          placeholder="Nom"
        />
        {/* INPUT Prénom*/}
        <Text style={style.titleInput}>Prénom :</Text>
        <TextInput
          value={firstname}
          onChangeText={setFirstname}
          style={style.inputFirstname}
          placeholder="Prénom"
        />

        {/* INPUT Email*/}
        <Text style={style.titleInput}>E-Mail:</Text>
        <TextInput
          value={email}
          onChangeText={setEmail}
          style={style.inputEmail}
          placeholder="E-mail"
        />
        {/* INPUT Message*/}
        <Text style={style.titleInput}>Message :</Text>
        <TextInput
          multiline={true}
          numberOfLines={4}
          value={message}
          onChangeText={setMessage}
          style={style.inputMessage}
          placeholder="Votre message"
        />
      </View>

      {/* TOUCHE ENVOYER */}
      <View style={style.actionsContainer}>
        <TouchableOpacity style={style.button}>
          <Ionicons name="send-outline" size={40} color="#CDECF8" />
          <Text style={style.buttonText}>ENVOYER</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Contact;
