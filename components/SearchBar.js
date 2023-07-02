import { View, Text } from 'react-native';
import React from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function SearchBar({ cityHandler }) {
	return (
		<View style={{ flexDirection: 'row', marginTop: 15 }}>
			<GooglePlacesAutocomplete
				querry={{ key: process.env.GOOGLE_API_KEY }}
				onPress={(data, details = null) => {
					const city = data.description.split(',')[0];
					cityHandler(city);
				}}
				placeholder='Search Uber Eats'
				styles={{
					textInput: {
						backgroundColor: '#eee',
						borderRadius: 15,
						fontWeight: '700',
						marginTop: 7,
					},
					textInputContainer: {
						backgroundColor: '#eee',
						borderRadius: 50,
						flexDirection: 'row',
						alignItems: 'center',
						marginRight: 10,
					},
				}}
				renderLeftButton={() => (
					<View style={{ marginLeft: 10 }}>
						<Ionicons name='location-sharp' size={24} />
					</View>
				)}
				renderRightButton={() => (
					<View
						style={{
							flexDirection: 'row',
							alignItems: 'center',
							marginRight: 10,
							padding: 9,
							backgroundColor: 'white',
							borderRadius: 30,
						}}>
						<Ionicons
							name='search-sharp'
							size={24}
							style={{ marginRight: 6 }}
						/>
						<Text>Search</Text>
					</View>
				)}
			/>
		</View>
	);
}
