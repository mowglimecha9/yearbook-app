import moment from 'moment';
import { Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native';
import { days,months } from '../days';
import CalendarDay from './CalendarDay';

export default function Calendar(props:any) {
	const getMonthDays = (month:string) => {
		return months.filter((value)=> {
			return value.fullName === month;
		})
	}

	const renderDays = (month:any) => {
		const getMonthIndex = months.findIndex((value)=> {
			return value.fullName === month;
		})
		const getFirstDateOfMonth = moment().add(getMonthIndex, 'months')
			.startOf('month')
			.format('dddd');
		const getIndexFDOM = days.findIndex((value)=> { return value.fullName === getFirstDateOfMonth });
		const monthDays = getMonthDays(props.name);
		const md = monthDays[0].days;
		const daysArray = [];
		for (let index = 0; index < getIndexFDOM; index++) {
			daysArray.push(<CalendarDay key={index} day={''}></CalendarDay>);
		}
		let day = 1;
		for (let i = 0; i < md; i++) {
			daysArray.push(<CalendarDay key={i+'1'} day={day}></CalendarDay>);
			day++;
		}
		return daysArray;
	}

	return (
		<View style={styles.container}>
			<Text>{renderDays(props.name)}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		width: Dimensions.get('window').width,
		backgroundColor: '#fff',
		flexWrap: 'wrap',
		flexDirection: 'row',
	},
});
