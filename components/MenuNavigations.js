import React from 'react';
import { View,Text,TouchableOpacity} from 'react-native';
import styles,{colors} from '../styles/style'
import MenuIconButton from './MenuIconButton'
import BoldText from './BoldText'
import rsc from '../lib/resources'
import Img from './Images'
import KitchenDetails from './KitchenDetails'

const MenuNavigation=()=>(
    <View style={styles.containera}>
         <View style={styles.containerb}>
          <MenuIconButton 
            text="Dish"
            style={styles.flexa}
            dimension={styles.dimensiona}
            source={rsc.potUri}/>
          <MenuIconButton 
            text="Menu"
            style={styles.flexa}
            dimension={styles.dimensiona}
            source={rsc.potUri}/>
          <MenuIconButton 
            text="Pay"
            style={styles.flexa}
            dimension={styles.dimensiona}
            source={rsc.potUri}/>
         </View>
         <KitchenDetails source={rsc.potUri}/>
       </View>
)
export default MenuNavigation