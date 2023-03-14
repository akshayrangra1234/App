import React from 'react';
import {View,Text,StyleSheet,Dimensions} from 'react-native'

import {colors,parameters} from "../global/styles"

import {Icon} from 'react-native-elements'

export default function Header({title,type,navigation}){
  return(
  <View style ={styles.header}>

  <View style={{marginLeft:10,marginTop:25}}>
    <Icon 
      type  ="material-community"
        name ={type}
        color ={colors.heaherText}
          size={35}
            onPress ={()=>{navigation.goBack()}}
    />
  </View> 
  <View>
   <Text style ={styles.headerText}>{title}</Text>
  </View>
    </View>
  )
  }


const styles =StyleSheet.create({
  header:{
    flexDirection:"row",
    backgroundColor:colors.buttons,
    height:parameters.headerHeight,
    marginTop:1,
  },
  headerText:{
    color:colors.heaherText,
    fontSize:25,
    fontWeight:"bold",
    margnLeft:60,
    marginTop:28,
  }

})