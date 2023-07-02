import { Image, ScrollView, Text, View } from 'react-native';
import React from 'react';

const items = [
	{ image: require('../assets/images/shopping-bag.png'), name: 'Pick-up' },
	{ image: require('../assets/images/bread.png'), name: 'Backery goods' },
	{ image: require('../assets/images/fast-food.png'), name: 'Fast food' },
	{ image: require('../assets/images/deals.png'), name: 'Deals' },
	{ image: require('../assets/images/coffee.png'), name: 'Coffee & Tea' },
	{ image: require('../assets/images/soft-drinks.png'), name: 'Soft Drinks' },
	{ image: require('../assets/images/desserts.png'), name: 'Desserts' },
];

export default function Categories() {
	return (
		<View
			style={{
				marginTop: 5,
				paddingVertical: 10,
				paddingLeft: 20,
				backgroundColor: 'white',
			}}>
			<ScrollView horizontal showsVerticalScrollIndicator={false}>
				{items.map((item, index) => (
					<View
						key={index}
						style={{
							alignItems: 'center',
							marginRight: 30,
						}}>
						<Image
							source={item.image}
							style={{ width: 50, height: 50, resizeMode: 'contain' }}
						/>
						<Text style={{ fontSize: 14, fontWeight: '700' }}>{item.text}</Text>
					</View>
				))}
			</ScrollView>
		</View>
	);
}
