import React from 'react';
import { View,TouchableOpacity} from 'react-native';
import styles from '../styles/style'
import propTypes from 'prop-types'
import MenuItemsSwipped from './MenuItemsSwipped'
import MenuItemsUnswipped from './MenuItemsUnswipped'
import Swipeable from 'react-native-swipeable'

const MenuItem=(props)=> (
      <View style={[
        styles.container,
        {
          margin:0,
          backgroundColor:'white',
          borderTopLeftRadius:10,
          borderTopRightRadius:10
          }]}>
        <Swipeable rightContent={

                      <MenuItemsSwipped 
                          foodName = {props.foodName}
                          foodPrice = {props.foodPrice}
                          foodImg = {props.foodImg}
                          onUserPress={props.onUserPress} />
                    }
                   onRightActionRelease={props.action}>
          <MenuItemsUnswipped 
                foodName = {props.foodName}
                foodPrice = {props.foodPrice}
                foodImg = {props.foodImg}
                cuisine = {props.cuisine}
                onUserPress={props.onUserPress} />
        </Swipeable>
        
      </View>
    )

MenuItem.propTypes={
  foodName:propTypes.string.isRequired,
  foodPrice:propTypes.number.isRequired,
  cuisine:propTypes.string.isRequired,
  foodImg:propTypes.string.isRequired,
  action:propTypes.func.isRequired,
  onUserPress:propTypes.func.isRequired
}

export default MenuItem