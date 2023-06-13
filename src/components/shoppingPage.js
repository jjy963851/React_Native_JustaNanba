import React, { Component, } from 'react';
import { View, TouchableOpacity, Text, Image, FlatList, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;

class ShoppingPage extends Component {
  state = {
    products: [
      { id: 1, title: 'Product 1', price: '$10', image: require('../../assets/product1.webp') },
      { id: 2, title: 'Product 2', price: '$20', image: require('../../assets/product2.webp') },
      { id: 3, title: 'Product 3', price: '$20', image: require('../../assets/pg1.webp') },
      { id: 4, title: 'Product 4', price: '$20', image: require('../../assets/pg2.webp') },
      { id: 5, title: 'Product 5', price: '$20', image: require('../../assets/pg3.webp') },
      { id: 6, title: 'Product 6', price: '$20', image: require('../../assets/pg4.webp') },
      { id: 6, title: 'Product 6', price: '$20', image: require('../../assets/pg5.webp') },
      // Add more products as needed
    ],
  };

  renderItem = ({ item }) => {
    return (
      <TouchableOpacity className="flex-1 m-2" onPress={() => console.log(`Clicked ${item.title}`)}>
        <View className="bg-white rounded-lg shadow p-4">
          <Image className="w-full h-24" source={item.image} />
          <Text className="mt-2 text-lg font-bold">{item.title}</Text>
          <Text className="mt-1 text-gray-500">{item.price}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  render() {
    const { products } = this.state;

    return (
      <View className=" bg-gray-100 p-4">
        <FlatList
          data={products}
          renderItem={this.renderItem}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
        />
      </View>
    );
  }
}

export default ShoppingPage;
