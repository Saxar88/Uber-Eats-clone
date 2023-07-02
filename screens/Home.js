import React from 'react';
import { SafeAreaView, View } from 'react-native';
import SafeViewAndroid from '../components/SafeViewAndroid';
import HeaderTabs from '../components/HeaderTabs';
import SearchBar from '../components/SearchBar';
import Categories from '../components/Categories';

export default function Home() {
	return (
		<SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
			<View style={{ backgroundColor: 'white', padding: 15 }}>
				<HeaderTabs />
				<SearchBar />
			</View>
			<Categories />
		</SafeAreaView>
	);
}
