import React from 'react';
import { View} from 'react-native';
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
          backgroundColor:'white'
          }]}>
        <Swipeable rightContent={
                      <MenuItemsSwipped 
                          foodName = {props.foodName}
                          foodPrice = {props.foodPrice}
                          foodImg = {props.foodImg} />
                    }
                   onRightActionRelease={props.action}>
          <MenuItemsUnswipped 
                foodName = {props.foodName}
                foodPrice = {props.foodPrice}
                foodImg = {props.foodImg}
                cuisine = {props.cuisine} />
        </Swipeable>
        
      </View>
    )

MenuItem.propTypes={
  foodName:propTypes.string.isRequired,
  foodPrice:propTypes.number.isRequired,
  cuisine:propTypes.string.isRequired,
  foodImg:propTypes.string.isRequired,
  action:propTypes.func.isRequired
}

export default MenuItem