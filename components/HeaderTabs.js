import { View, Text, Touchable } from 'react-native';
import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';

export default function HeaderTabs(props) {
	return (
		<View style={{ flexDirection: 'row', alignSelf: 'center' }}>
			<Text>
				<HeaderButton
					text='Delivery'
					btnColor='black'
					textColor='white'
					activeTab={props.activeTab}
					setActiveTab={props.setActiveTab}
				/>
				<HeaderButton
					text='Pickup'
					btnColor='white'
					textColor='black'
					activeTab={props.activeTab}
					setActiveTab={props.setActiveTab}
				/>
			</Text>
		</View>
	);
}

const HeaderButton = (props) => (
	<TouchableOpacity
		style={{
			backgroundColor: props.activeTab === props.text ? 'black' : 'white',
			paddingVertical: 6,
			paddingHorizontal: 16,
			borderRadius: 30,
		}}
		onPress={() => props.setActiveTab(props.text)}>
		<Text
			style={{
				color: props.activeTab === props.text ? 'white' : 'black',
				fontSize: 16,
				fontWeight: '700',
			}}>
			{props.text}
		</Text>
	</TouchableOpacity>
);
