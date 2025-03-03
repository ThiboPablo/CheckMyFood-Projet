import { View, FlatList } from 'react-native';
import food_elements from '@assets/data/foods';
import ListeDeBouffe from '@components/LesItems';

export default function bigPute() {
  return (
    <View>
      {/* <ListeDeBouffe food_element={food_elements[0]} />
      <ListeDeBouffe food_element={food_elements[1]} />
      <ListeDeBouffe food_element={food_elements[2]} /> */}
      <FlatList
        data={food_elements}
        renderItem={({ item }) => <ListeDeBouffe food_element={item} />}
        numColumns={2}
        contentContainerStyle={{gap: 10, padding: 10}}
        columnWrapperStyle={{gap: 10}}
      />
    </View>
  );
};
