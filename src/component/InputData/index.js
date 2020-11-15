import React from 'react'
import { StyleSheet, Text, TextInput } from 'react-native'

const InputData = ({label, placeholder, keyboardType, isTextArea, onChangeText, namaState, value}) => {
if (isTextArea) {
		return (
		<>
			<Text style={styles.label}>{label} :</Text>
				<TextInput multiline={true} numberOfLines={5} placeholder={placeholder} style={styles.textInputArea} keyboardType={keyboardType} value={value} onChangeText={(text) => onChangeText(namaState, text)}/>
		</>
	);
}

	return (
		<>
			<Text style={styles.label}>{label} :</Text>
				<TextInput placeholder={placeholder} style={styles.textInput} keyboardType={keyboardType} value={value} onChangeText={(text) => onChangeText(namaState, text)} />
		</>
	);
}

export default InputData

const styles = StyleSheet.create({
		label : {
		fontSize: 15,
		marginBottom: 3
	},
	textInput : {
		borderWidth: 1,
		borderColor: 'grey',
		borderRadius: 10,
		padding: 10,
		marginBottom : 5
	},
	textInputArea : {
		textAlignVertical: 'top',
		borderWidth: 1,
		borderColor: 'grey',
		borderRadius: 10,
		padding: 10,
		marginBottom : 3
	}
})