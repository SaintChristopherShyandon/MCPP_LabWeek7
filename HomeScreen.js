import React from "react";
import styles from "./Styles";
import { View, Text, Button } from "react-native";

const HomeScreen = ({ navigation }) => {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontSize: 24 }}>Click to see user list</Text>
        <Button
          title="Go to User List"
          onPress={() => navigation.navigate('UserList')}
        />
      </View>
    );
  };

export default HomeScreen;