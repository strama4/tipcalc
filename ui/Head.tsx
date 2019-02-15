import React from 'react';
import { StyleSheet, Text, View, StatusBar, Platform } from 'react-native';
import { Header, Left, Body, Right, Title } from 'native-base'

const Head = () => (
    <View style={styles.header}>
            <Header>
                <Left/>
                <Body>
                <Title>Header</Title>
                </Body>
                <Right />
            </Header>
            </View>
)

const styles = StyleSheet.create({
    header: {
      ...Platform.select({
        android: {
          marginTop: StatusBar.currentHeight
        }
      })
    }
})

export default Head;