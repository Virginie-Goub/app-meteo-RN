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

  /*TEXT INPUT*/
  tapContact: {
    flex: 2,
    /*backgroundColor: "#FE0000",*/
    paddingTop: 25,
    borderWidth: 4,
    borderColor: "#52A9DA",
    borderRadius: 10,
    marginHorizontal: 55,
  },
  /*TITRE INPUT*/
  titleInput: {
    textAlign: "center",
    fontSize: 20,
    color: "#00A2FE",
  },
  /*INPUT NAME*/
  inputName: {
    textAlign: "center",
    fontSize: 30,
    paddingBottom: 15,
    paddingVertical: 8,
  },
  /*INPUT FIRSTNAME*/
  inputFirstname: {
    textAlign: "center",
    fontSize: 30,
    paddingBottom: 15,
  },
  /*INPUT EMAIL*/
  inputEmail: {
    textAlign: "center",
    fontSize: 30,
    paddingBottom: 15,
  },
  /*INPUT MESSAGE*/
  inputMessage: {
    textAlign: "center",
    fontSize: 30,
    paddingBottom: 35,
  },

  /*TOUCHE ENVOYER*/
  actionsContainer: {
    flex: 1,
  },

  button: {
    marginTop: 105,
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
