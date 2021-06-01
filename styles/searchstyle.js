import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  /*conteneur principal*/
  mainContainer: {
    flex: 1,
    paddingTop: 10,
  },
  /* Conteneur titre */
  titleContainer: {
    flex: 1,
    paddingBottom: 45,
    /*backgroundColor: "#00FF00",*/
  },

  /*TITRE PRINCIPAL*/
  title: {
    color: "#1484AF",
    textAlign: "center",
    justifyContent: "center",
    fontSize: 50,
    marginVertical: 50,
    paddingBottom: 60,
    /*backgroundColor: "#7DD3F5",*/
  },

  /* TEXT INPUT CITY */
  tapCity: {
    flex: 1,
    /*backgroundColor: "#FE0000",*/
  },

  titleInput: {
    textAlign: "center",
    fontSize: 20,
    color: "#00A2FE",
  },

  inputCity: {
    textAlign: "center",
    fontSize: 40,
  },

  /*TOUCHE RECHERCHER*/
  actionsContainer: {
    flex: 1,
  },

  button: {
    flexDirection: "row",
    justifyContent: "center",
    textAlign: "center",
    backgroundColor: "#7DD3F5",
  },

  buttonText: {
    alignItems: "center",
    textAlign: "center",
    color: "#FEFEFE",
    fontSize: 35,
  },
});
export default styles;
