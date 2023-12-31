import React, { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';
import SafeViewAndroid from '../components/SafeViewAndroid';
import HeaderTabs from '../components/HeaderTabs';
import SearchBar from '../components/SearchBar';
import Categories from '../components/Categories';
import RestaurantItems, {
	localRestaurants,
} from '../components/RestaurantItems';

const YELP_API_KEY = process.env.YELP_API_KEY;

export default function Home() {
	const [restaurantData, setRestaurantData] = useState(localRestaurants);
	const [city, setCity] = useState('San Francisco');
	const [activeTab, setActiveTab] = useState('Delivery');

	const getRestaurantsFromYelp = () => {
		const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;

		const apiOptions = {
			headers: {
				Authorization: `Bearer ${YELP_API_KEY}`,
			},
		};

		return fetch(yelpUrl, apiOptions)
			.then((res) => res.json())
			.then((json) =>
				setRestaurantData(
					json.businesses.filter((business) =>
						business.transactions.includes(activeTab.toLowerCase())
					)
				)
			);
	};

	useEffect(() => {
		getRestaurantsFromYelp();
	}, [city, activeTab]);

	return (
		<SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
			<View style={{ backgroundColor: 'white', padding: 15 }}>
				<HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
				<SearchBar cityHandler={setCity} />
			</View>
			<ScrollView showsVerticalScrollIndicator={false}>
				<Categories />
				<RestaurantItems restaurantData={restaurantData} />
			</ScrollView>
		</SafeAreaView>
	);
}
