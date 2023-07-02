import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const localRestaurants = [
	{
		name: 'Beachside Bar',
		image_url:
			'https://static.onecms.io/wp-content/uploads/sites/9/2020/04/24/ppp-why-wont-anyone-rescue-restaurants-FT-BLOG0420.jpg',
		categories: ['Cafe', 'Bar'],
		price: '$$',
		reviews: 1244,
		rating: 4.5,
	},
	{
		name: 'Benihana',
		image_url:
			'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80',
		categories: ['Cafe', 'Bar'],
		price: '$$',
		reviews: 1244,
		rating: 3.7,
	},
	{
		name: "India's Grill",
		image_url:
			'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80',
		categories: ['Indian', 'Bar'],
		price: '$$',
		reviews: 700,
		rating: 4.9,
	},
];

export default function RestaurantItems() {
	return (
		<TouchableOpacity activeOpacity={1} style={{ marginBottom: 30 }}>
			{localRestaurants.map((restaurant, index) => (
				<View
					key={index}
					style={{ marginTop: 10, padding: 15, backgroundColor: 'white' }}>
					<RestaurantImage image={restaurant.image_url} />
					<RestaurantInfo name={restaurant.name} rating={restaurant.rating} />
				</View>
			))}
		</TouchableOpacity>
	);
}

const RestaurantImage = (props) => (
	<>
		<Image
			source={{
				uri: props.image,
			}}
			style={{
				width: '100%',
				height: 180,
				resizeMode: 'cover',
				borderRadius: 10,
			}}
		/>
		<TouchableOpacity style={{ position: 'absolute', top: 25, right: 25 }}>
			<Ionicons name='heart-outline' size={24} color='white' />
		</TouchableOpacity>
	</>
);

const RestaurantInfo = (props) => (
	<View
		style={{
			flexDirection: 'row',
			justifyContent: 'space-between',
			alignItems: 'center',
			paddingVertical: 5,
		}}>
		<View>
			<Text style={{ fontSize: 16, fontWeight: '500' }}>{props.name}</Text>
			<View style={{ flexDirection: 'row', alignItems: 'center' }}>
				<Image
					source={{
						uri: require('../assets/images/uber-one.png'),
					}}
					style={{
						width: 14,
						height: 14,
						resizeMode: 'cover',
					}}
				/>
				<Text style={{ fontSize: 14, color: 'grey' }}>
					· 0.99€ Delivery Fee · 30-45mins
				</Text>
			</View>
		</View>
		<View
			style={{
				alignItems: 'center',
				justifyContent: 'center',
				height: 30,
				width: 30,
				backgroundColor: '#d6d6d6',
				borderRadius: 15,
			}}>
			<Text style={{ fontSize: 12, fontWeight: '600' }}>{props.rating}</Text>
		</View>
	</View>
);
