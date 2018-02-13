import React from 'react'
import { View,Text,TouchableOpacity} from 'react-native'
import Img from './Images'
import rsc from '../lib/resources'
import styles,{colors} from '../styles/style'
import BoldText from './BoldText'

const KitchenDetails=({shop,source})=>(
    <View style={styles.containerc}>
        <View style={styles.containerd}>
            <Img  style={styles.containere}
            source={{uri:rsc.potUri}} />
            <View>
            <BoldText text="Shop" />
            <Text>{shop||'???'}</Text>
            </View>
        </View>
        <View style={styles.containerf}>
            <Img  style={styles.dimensiona}
                  source={{uri:source||rsc.potUri}} />
        </View>
    </View>
)

export default KitchenDetails