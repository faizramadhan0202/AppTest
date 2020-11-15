import React, { Component } from 'react'
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native'
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome'
import {faPlus} from '@fortawesome/free-solid-svg-icons'

// const Pesanan = () => {
// 	return (
// 		<View style={styles.page}>
// 			<Text>Pesanan</Text>
// 			<View style={styles.wrapperButton} >
// 				<TouchableOpacity style={styles.btntambah} OnPress={() => this.props.navigation.navigate('TambahData')}>
// 					<FontAwesomeIcon icon={faPlus} size={20} color={'white'}/>
// 				</TouchableOpacity>
// 			</View>
// 		</View>
// 	);
// }

export default class Pesanan extends Component{
	render() {
		return (
			<View style={styles.page}>
				<Text>Pesanan</Text>
				<View style={styles.wrapperButton} >
					<TouchableOpacity style={styles.btntambah} onPress={() => this.props.navigation.navigate('TambahData')}>
						<FontAwesomeIcon icon={faPlus} size={20} color={'white'}/>
					</TouchableOpacity>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	page: {
		flex: 1,
	},
	wrapperButton: {
		flex: 1,
		position: 'absolute',
		bottom: 0,
		right: 0,
		margin: 30,
	},
	btntambah: {
		padding: 20,
		backgroundColor: 'lightblue',
		borderRadius: 40,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 3,
		},
		shadowOpacity: 0.27,
		shadowRadius: 4.65,

		elevation: 6,
	}
})
