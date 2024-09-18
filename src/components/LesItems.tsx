import { StyleSheet, Text, View, Image } from 'react-native';
import { Food_element } from '../types'


const defaultFoodImage = 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/b/b4/Herobrine.png/'

type ListeDeBouffePropriétés = {
  food_element: Food_element;
}

//Fonction pour afficher 1 item
//En utilisant la fonction ListeDeBouffe, on envoie 1 info, celle de l'élément à saisir dans la liste de
//données présentes dans ...assets/data/foods.
//La fonction utilise cette info pour choisir les éléments à afficher dans le bloc d'item, et renvoie
//toutes les info nécessaires à l'affichage.
const ListeDeBouffe = ({ food_element }: ListeDeBouffePropriétés) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: food_element.image || defaultFoodImage }} style={styles.image}/>
      <Text style={styles.title}>{food_element.name}</Text>
      <Text style={styles.title}>{food_element.co2}kg</Text>
    </View>
  );
};

export default ListeDeBouffe;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 100,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
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
