import React from 'react'
import { StyleSheet, Text, View, Dimensions } from 'react-native'

const Saldo = () => {
	return (
		<View style={styles.container}>
			<Text>Saldo</Text>
		</View>
	)
}

export default Saldo

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
	container: {
		backgroundColor: 'white',
		padding: 17,
		marginHorizontal: 10,
		borderRadius: 10,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 3,
		},
		shadowOpacity: 0.27,
		shadowRadius: 4.65,
		elevation: 6,
		marginTop: ~windowHeight*0.05
		},
})
