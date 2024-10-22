import { ScrollView, View, TouchableOpacity, Image, Text } from "react-native";
import Animated, { 
  SlideInLeft, 
  SlideInRight, 
  SlideInDown
} from 'react-native-reanimated';
import userData from './data.json';
import styles from './Styles';

const UserList = ({ navigation }) => {
  return (
    <ScrollView>
      {userData.map((user, index) => {
        const animations = [SlideInLeft, SlideInRight, SlideInDown];
        const animation = animations[index % animations.length];

        return (
          <Animated.View
            key={user.name}
            style={styles.userList}
            entering={animation.delay(index * 50)}>
            <TouchableOpacity
              style={styles.card}
              onPress={() => navigation.navigate("Profile", { user })}>
              <Image
                source={{ uri: user.photo_url }}
                style={styles.avatar}
              />
              <View>
                <Text style={styles.boldText}>{user.name}</Text>
                <Text>{user.email}</Text>
              </View>
            </TouchableOpacity>
          </Animated.View>
        );
      })}
    </ScrollView>
  );
};

export default UserList;
