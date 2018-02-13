import React from 'react'
import {TouchableOpacity,View} from 'react-native'
import styles,{colors} from '../styles/style'
import rsc from '../lib/resources'
import BoldText from './BoldText'
import Img from './Images'


const MenuIconButton=({text,source,dimension,style})=>( 
    <View style={style}>
        <TouchableOpacity style={styles.toucha}>
            <Img  style={dimension}
                    source={{uri:source}} />
        </TouchableOpacity >
        <BoldText text={text} />
    </View>)

export default MenuIconButton