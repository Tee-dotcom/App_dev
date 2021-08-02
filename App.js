import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default function App() {
  return (
    <View style={styles_page.container}>
      <Text style={styles_text.container}>Welcome</Text>
      <Text style={styles_text.container}>To</Text>
      <Text style={styles_right_of_way.container}>Right of Way</Text>
    </View>
  );
}

const styles_page = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#13a9c2',
    paddingVertical: 16,
    borderWidth: 8,
    borderRadius: 6,
    borderColor: "#20232a",
    alignItems: 'center',
    justifyContent: 'center'

  },
});

const styles_text = StyleSheet.create({
  container: {
    marginTop: 16,
    color: "#20232a",
    textAlign: "center",
    fontSize: 60,
    fontWeight: "bold"
  }
});


const styles_right_of_way = StyleSheet.create({
  container: {
    textAlign: "center",
    color: "#fff",
    marginTop: 16,
    fontSize: 60,
    fontWeight: "bold",
    fontStyle: "Righteous-regular"
  }
});


