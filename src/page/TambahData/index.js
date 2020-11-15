import React, { Component } from 'react'
import { StyleSheet, View, Text, TouchableOpacity, Alert } from 'react-native'
import { InputData } from '../../component'

export default class TambahData extends Component {
	
	constructor(props) {
		super(props)
	
		this.state = {
			 nama:'',
			 nim:'',
			 alamat:'',
		};
	}
	
	onChangeText = (namaState, value) => {
		this.setState({
			[namaState] : value
		});
	};

	onSubmit = () => {
		if (this.state.nama && this.state.nim && this.state.alamat) {
			console.log('Masuk submit');
			console.log(this.state);
		}else{
			Alert.alert('Error', 'Nama, Nim dan Alamat Wajib diisi');
		}
	};

	render() {
		return (
			<View style={styles.pages}>
				<InputData label="Nama" placeholder="Masukkan Nama" onChangeText={this.onChangeText} value={this.state.nama} namaState="nama" />
				<InputData label="NIM" placeholder="Masukkan NIM" keyboardType="number-pad" onChangeText={this.onChangeText} value={this.state.nim} namaState="nim" />
				<InputData label="Alamat" placeholder="Masukkan Alamat" isTextArea={true} onChangeText={this.onChangeText} value={this.state.alamat} namaState="alamat" />
				<TouchableOpacity style={styles.tombol} onPress={() => this.onSubmit()}>
					<Text style={styles.textTombol}>Simpan</Text>
				</TouchableOpacity>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	pages: {
		flex:1,
		padding: 30,
	},
	tombol :{
		backgroundColor: 'green',
		padding : 10,
		borderRadius: 5,
		marginTop: 5
	},
	textTombol: {
		color: 'white',
		fontWeight: 'bold',
		textAlign: 'center',
		fontSize: 15
	},
})
