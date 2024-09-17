import { StyleSheet, Text, View, Image } from 'react-native';
import food_elements from '../../../assets/data/foods';

const food_element = food_elements[0]

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Image source={{ uri: food_element.image }} style={styles.image}/>
      <Text style={styles.title}>{food_element.name}</Text>
      <Text style={styles.title}>{food_element.co2}kg</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 100,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    justifyContent: 'center',
    alignContent: 'center',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  image: {
    width: '50%',
    aspectRatio: 1,
  }
});
