import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { IconHome, IconHomeActive, IconPesanan, IconPesananActive, IconAkun, IconAkunActive } from '../../assets'
import { WARNA_UTAMA, WARNA_MATI } from '../../Utils/constants'

const Tabitem = ({ isFocused, onPress, onLongPress, label}) => {
	const Icon = ()=> {
		if (label === "Home" ) return isFocused ? <IconHomeActive/> : <IconHome/>
		
		if (label === "Pesanan" ) return isFocused ? <IconPesananActive/> : <IconPesanan/>
		
		if (label === "Akun" ) return isFocused ? <IconAkunActive/> : <IconAkun/>

		return <IconHome/>
	}
	return (
		 <TouchableOpacity
            onPress={onPress}
            onLongPress={onLongPress}
						style={styles.container}>
						<Icon/>
            <Text style={styles.text(isFocused)}>{label}</Text>
          </TouchableOpacity>
	)
}

export default Tabitem

const styles = StyleSheet.create({
	container:{
		alignItems: 'center'
	},
	text: (isFocused)=> ({
		fontSize: 12,
		color: isFocused ? WARNA_UTAMA : WARNA_MATI
	})
})
