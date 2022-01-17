import moment from 'moment';
import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';

export default function Day(props:any) {
    return (
		<View style={styles.container}>
			<Text style={styles. dayText}>{props.day}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		width: (Dimensions.get('window').width / 7),
		height: 50,
        borderColor:'#ccc',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#fff',
	},
	dayText: {
		flexWrap: 'wrap',
	},
});
