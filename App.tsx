import moment from 'moment';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { days,daysStyles,months } from './days';
import Calendar from './utils/Calendar';


export default function App() {
  return (
		<ScrollView style={styles.container}>
			<View style={daysStyles.container}>
				{days.map((day, index) => {
					return (
						<Text style={daysStyles.day} key={index}>
							{day.shortName}
						</Text>
					);
				})}
			</View>
			{months.map((month, index) => {
				return (
					<Calendar name={month.fullName}></Calendar>
				);
			})}


		</ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    backgroundColor: '#fff',
  },
});
