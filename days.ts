import { StyleSheet, Dimensions} from 'react-native';
export const days = [
	{
		fullName: 'Sunday',
		shortName: 'Sun',
		index: 0,
		isWeekend: true,
	},
	{
		fullName: 'Monday',
		shortName: 'Mon',
		index: 1,
		isWeekend: false,
	},
	{
		fullName: 'Tuesday',
		shortName: 'Tue',
		index: 2,
		isWeekend: false,
	},
	{
		fullName: 'Wednesday',
		shortName: 'Wed',
		index: 3,
		isWeekend: false,
	},
	{
		fullName: 'Thursday',
		shortName: 'Thu',
		index: 4,
		isWeekend: false,
	},
	{
		fullName: 'Friday',
		shortName: 'Fri',
		index: 5,
		isWeekend: false,
	},
	{
		fullName: 'Saturday',
		shortName: 'Sat',
		index: 6,
		isWeekend: true,
	},
];

export const months = [
    {
        fullName: 'January',
        shortName: 'Jan',
        days: 31,
    },
    {
        fullName: 'February',
        shortName: 'Feb',
        days: 28,
    },
    {
        fullName: 'March',
        shortName: 'Mar',
        days: 31,
    },
    {
        fullName: 'April',
        shortName: 'Apr',
        days: 30,
    },
    {
        fullName: 'May',
        shortName: 'May',
        days: 31,
    },
    {
        fullName: 'June',
        shortName: 'Jun',
        days: 30,
    },
    {
        fullName: 'July',
        shortName: 'Jul',
        days: 31,
    },
    {
        fullName: 'August',
        shortName: 'Aug',
        days: 31,
    },
    {
        fullName: 'September',
        shortName: 'Sep',
        days: 30,
    },
    {
        fullName: 'October',
        shortName: 'Oct',
        days: 31,
    },
    {
        fullName: 'November',
        shortName: 'Nov',
        days: 30,
    },
    {
        fullName: 'December',
        shortName: 'Dec',
        days: 31,
    }
]

export const daysStyles = StyleSheet.create({
	container: {
        flexDirection: 'row',
		backgroundColor: '#fff',
        flex:1,
        marginTop:10
    },
    day: {
        width:Dimensions.get('window').width/7,
        height:35,
        textAlign: 'center',
        borderColor: '#ddd',
    }
});
