import React from 'react';
import { SafeAreaView } from 'react-native';
import SafeViewAndroid from '../components/SafeViewAndroid';
import HeaderTabs from '../components/HeaderTabs';

export default function Home() {
	return (
		<SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
			<HeaderTabs />
		</SafeAreaView>
	);
}
