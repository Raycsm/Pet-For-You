import { Text, StyleSheet, SafeAreaView, View, StatusBar, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'

export default function TelaInicial({ navigation }) {
  const StatusBarHeight = StatusBar.currentHeight; //pega altura da statusbar e coloca como margintop

  return (
    <SafeAreaView style={{ flex: 1, marginTop: StatusBarHeight}}>
      <View style={{ flex: 1, paddingHorizontal: 20 }}>
        <Text style={{ fontSize: 20 }}>Tela Inicial</Text>
        <TouchableOpacity onPress={() => navigation.navigate("MeuPerfil")}>
            <Text style={{ fontSize: 18, marginTop: 10, color: 'orange'}}>
                Meu Perfil
            </Text>
          </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})