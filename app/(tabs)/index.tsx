import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Linking, StyleSheet, Image } from "react-native";
import checkDomainAvailability from "../../verifydomain";

const DomainSearch: React.FC = () => {
  const [domain, setDomain] = useState("");
  const [searchedDomain, setSearchedDomain] = useState("");

  const handleSearch = () => {
    const varz = checkDomainAvailability(domain);
    console.log(varz);
  };

  const handleBuy = () => {
    const promoCode = "";
    const url = ``;
    Linking.openURL(url);
  };
  const handleDonate = () => {
    const donateUrl = ""; 
    Linking.openURL(donateUrl);
  };

  return (
    <View style={styles.container}>
      <Image source={require("../../assets/images/domain.png")} style={styles.logo} />
      <Text style={styles.title}>Recherche de Nom de Domaine</Text>
      <TextInput
        style={styles.input}
        placeholder="Entrez un nom de domaine"
        placeholderTextColor="#864AF9"
        value={domain}
        onChangeText={setDomain}
      />
      <TouchableOpacity style={styles.button} onPress={handleSearch}>
        <Text style={styles.buttonText}>Rechercher</Text>
      </TouchableOpacity>

      {searchedDomain !== "" && (
        <View style={styles.resultContainer}>
          <Text style={styles.resultText}>Résultat: {searchedDomain}</Text>
          <TouchableOpacity style={styles.buyButton} onPress={handleBuy}>
            <Text style={styles.buttonText}>Acheter sur LWS</Text>
          </TouchableOpacity>
        </View>
      )}

      <TouchableOpacity style={styles.donateButton} onPress={handleDonate}>
        <Text style={styles.buttonText}>Faire un Don</Text>
      </TouchableOpacity>

      <Text style={styles.footerText}>Communauté Digitale du Cameroun</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF9EB",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,


  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#864AF9",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    borderWidth: 2,
    borderColor: "#864AF9",
    borderRadius: 15,
    padding: 12,
    marginBottom: 15,
    fontSize: 18,
    color: "#864AF9",
    backgroundColor: "#FFF",
    elevation: 3,


  },
  button: {
    backgroundColor: "#864AF9",
    padding: 14,
    borderRadius: 15,
    alignItems: "center",
    width: "100%",
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  buyButton: {
    backgroundColor: "#864AF9",
    padding: 14,
    borderRadius: 15,
    alignItems: "center",
    width: "100%",
    marginTop: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  donateButton: {
    backgroundColor: "#864AF9",
    padding: 14,
    borderRadius: 15,
    alignItems: "center",
    width: "100%",
    marginTop: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
    
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },
  resultContainer: {
    marginTop: 20,
    alignItems: "center",
    width: "100%",
    backgroundColor: "#FFF",
    padding: 15,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  resultText: {
    fontSize: 20,
    color: "#864AF9",
    fontWeight: "bold",
  },
  footerText: {
    marginTop: 30,
    fontSize: 16,
    fontWeight: "bold",
    color: "#864AF9",
  },
});

export default DomainSearch;