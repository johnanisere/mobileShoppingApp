import React from 'react';
import { Text } from 'react-native'
import styles from '../styles/style'

const BoldText=({text,deco})=>(
<Text style={[styles.textWeight,deco]}>{text}</Text>
)

export default BoldText