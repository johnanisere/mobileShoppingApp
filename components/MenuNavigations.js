import React from 'react';
import { View,Text,TouchableOpacity} from 'react-native';
import styles,{colors} from '../styles/style'
import MenuIconButton from './MenuIconButton'
import BoldText from './BoldText'
import rsc from '../lib/resources'
import Img from './Images'
import KitchenDetails from './KitchenDetails'
import propTypes from 'prop-types'

const MenuNavigation=(props)=>(
    <View style={[styles.containera,...props.style]}>
         <View style={styles.containerb}>
            <MenuIconButton 
              text="Cuisine"
              style={styles.flexa}
              dimension={styles.dimensiona}
              source={rsc.potUri}
              onPress={props.cuisinePress}
              deco={{marginTop:5}}
              />
          <MenuIconButton 
            text="Menu"
            style={styles.flexa}
            dimension={styles.dimensiona}
            source={rsc.potUri}
            onPress={props.menuPress}
            underlayColor={'#F69322'} 
            deco={{marginTop:5}}           
            />
          <MenuIconButton 
            text="Checkout"
            style={styles.flexa}
            dimension={styles.dimensiona}
            source={rsc.potUri}
            onPress={props.checkoutPress}
            underlayColor={'#5CBC5C'}
            deco={{marginTop:5}}
            />
         </View>
         {
            (props.KitchenDetails)?
            <KitchenDetails source={rsc.potUri}/>:
            null
         }
       </View>
)
export default MenuNavigation

MenuNavigation.propTypes={
  style:propTypes.array.isRequired,
  KitchenDetails:propTypes.bool.isRequired,
  cuisinePress:propTypes.func.isRequired,
  checkoutPress:propTypes.func.isRequired,
  menuPress:propTypes.func.isRequired
}