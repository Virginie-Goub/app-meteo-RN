import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  /*BACKGROUND*/
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  /* Conteneur principal */
  mainContainer: {
    flex: 1,
    paddingTop: 10,
    backgroundColor: "#B7E9F6",
  },
  /* Conteneur titre */
  titleContainer: {
    flex: 1,
    paddingBottom: 45,
    /*backgroundColor: "#00FF00",*/
  },
  /*WEATHER CONTAINER*/
  weatherContainer: {
    flex: 2,
    /*backgroundColor: "#FE0101",*/
  },
  /*DESCRIPTION*/
  detailsContainer: {
    flex: 2,
    /*backgroundColor: "#01C9FE",*/
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

  /*LOGO DANS WEATHER CONT*/
  logo: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 55,
  },

  sizeLogo: {
    height: 150,
    width: 150,
  },
  /*TITLE (GRANSD SOLEIL) 2*/
  titleTwo: {
    flex: 2,
    paddingTop: 15,
    textAlign: "center",
    justifyContent: "center",
    fontSize: 30,
  },
  /*CITY*/
  city: {
    flex: 2,
    textAlign: "center",
    justifyContent: "center",
    fontSize: 30,
  },
  /*TEMP ACTUEL & VENT FLEX 2*/
  detailsRowOne: {
    paddingTop: 30,
    flex: 2,
    flexDirection: "row",

    /*justifyContent: "space-around",*/
    /*backgroundColor: "#F2FD02",*/
  },
  /*HUMIDITY & TEMP MIN ET MAX FLEX 2*/
  detailsRowTwo: {
    paddingTop: 30,
    flex: 2,
    flexDirection: "row",

    /* backgroundColor: "#8302FD",*/
  },
  /*TEMP ACTUEL*/
  tempActuel: {
    flex: 1,
    fontSize: 35,
    textAlign: "center",
    justifyContent: "center",

    /*backgroundColor: "#E3E5CA",*/
    /*justifyContent: "center",
    alignItems: "center",*/
  },
  /*VENT ACTUEL*/
  windActuel: {
    flex: 1,
    fontSize: 35,
    textAlign: "center",
    justifyContent: "center",

    /* backgroundColor: "#A2EEB1",*/
  },

  /*HUMIDITE*/

  humidity: {
    flex: 1,
    fontSize: 35,
    textAlign: "center",
    justifyContent: "center",

    /*backgroundColor: "#CEA2EE",*/
  },

  /*TEMP MAX AND MIN*/

  maxAndMin: {
    flex: 1,
    fontSize: 23,
    textAlign: "center",
    justifyContent: "center",
    /*backgroundColor: "#B354F8",*/
  },

  /*TOUCHE REFRESH*/
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
});
export default styles;
