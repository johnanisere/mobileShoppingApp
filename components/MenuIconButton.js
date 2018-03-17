import React from 'react'
import {TouchableOpacity,View,TouchableHighlight} from 'react-native'
import styles,{colors} from '../styles/style'
import rsc from '../lib/resources'
import BoldText from './BoldText'
import Img from './Images'


const MenuIconButton=({text,source,dimension,style,onPress,radius,deco,underlayColor})=>( 
    <View style={style}>
        <TouchableHighlight style={[styles.toucha,{...radius}]}
                            onPress={onPress}
                            underlayColor={underlayColor||'rgba(156,28,38,1)'}>
            <Img  style={dimension}
                    source={{uri:source}} />
        </TouchableHighlight >
        <BoldText text={text}
                  deco={[{fontWeight:"600"},{...deco}]} />
    </View>)

export default MenuIconButton