import React,{Component} from 'react';
import { View,Text,TouchableOpacity,Animated,Image,Easing,ScrollView,TextInput } from 'react-native';
import styles,{colors} from '../styles/style'
import Inputs from './Inputs'
import propTypes from 'prop-types'
import Button from './Button'
import storage from '../data_Container/store'
import Img from './Images'
import lib from '../lib/lib'
import Icon from 'react-native-vector-icons/MaterialIcons'
import CommonContainer from './CommonContainer'
import rsc from '../lib/resources'
import Card from './Card'
import CheckBox from 'react-native-check-box'
import CardDetails from './CardDetails'
import Map from './Map'
import MenuNavigation from './MenuNavigations'
import MenuIconButton from './MenuIconButton'
import Dimensions from 'Dimensions'
import {connect} from 'react-redux'
import {mapStateToProps} from '../lib/resources'
import SpinnerIndicator from './SpinnerIndicator'
import * as Animatable from 'react-native-animatable'
import  CuisineItems from './CuisineItems'
import Chef from './Chef'
import MenuItems from './MenuItems'

export default class ChefAndMenu extends Component{
    constructor(props){
        super(props)
        this.state={
            loading:false,
            active:'me'
          }
    }
    render(){
        return(
            <View style={{flex:1,borderRadius:5,backgroundColor:'white',padding:10}}>
                <ScrollView style={[{flex:1,borderBottomWidth:1, borderBottomColor:'rgba(0,0,0,.05)'}]}
                           horizontal= {true}
                           decelerationRate={10}
                           snapToInterval={80} //your element width
                           snapToAlignment={"center"}>
                    <Chef
                         active = {this.state.active}
                         image = 'https://res.cloudinary.com/bukka/image/upload/v1459091493/custom:1459088741794bees/profile_image.jpg'
                         event = {()=>console.log("this is me")}
                         chefUid = "You" 
                         chefName = "Moji Ladipo"
                    />
                    <Chef
                         active = {this.state.active}
                         image = 'https://res.cloudinary.com/bukka/image/upload/v1459091493/custom:1459088741794bees/profile_image.jpg'
                         event = {()=>console.log("this is me")}
                         chefUid = "m" 
                         chefName = "Moji Ladipo"
                    />
                    <Chef
                         active = {this.state.active}
                         image = 'https://res.cloudinary.com/bukka/image/upload/v1459091493/custom:1459088741794bees/profile_image.jpg'
                         event = {()=>console.log("this is me")}
                         chefUid = "me" 
                         chefName = "Moji Ladipo"
                    />
                    <Chef
                         active = {this.state.active}
                         image = 'https://lh5.googleusercontent.com/-9LXo_Xvr-D4/AAAAAAAAAAI/AAAAAAAABCM/NrZ4xrN9tB4/photo.jpg'
                         event = {()=>console.log("this is me")}
                         chefUid = "m" 
                         chefName = "Moji Ladipo"
                    />
                    <Chef
                         active = {this.state.active}
                         image = 'https://lh5.googleusercontent.com/-9LXo_Xvr-D4/AAAAAAAAAAI/AAAAAAAABCM/NrZ4xrN9tB4/photo.jpg'
                         event = {()=>console.log("this is me")}
                         chefUid = "m" 
                         chefName = "Moji Ladipo"
                    />
                    <Chef
                         active = {this.state.active}
                         image = 'https://lh5.googleusercontent.com/-9LXo_Xvr-D4/AAAAAAAAAAI/AAAAAAAABCM/NrZ4xrN9tB4/photo.jpg'
                         event = {()=>console.log("this is me")}
                         chefUid = "m" 
                         chefName = "Moji Ladipo"
                    />
                    <Chef
                         active = {this.state.active}
                         image = 'https://lh5.googleusercontent.com/-9LXo_Xvr-D4/AAAAAAAAAAI/AAAAAAAABCM/NrZ4xrN9tB4/photo.jpg'
                         event = {()=>console.log("this is me")}
                         chefUid = "m" 
                         chefName = "Moji Ladipo"
                    />
                </ScrollView>
                <View style={{flex:3}}>
                    <ScrollView>
                    <MenuItems
                        foodName={'Rice'}
                        foodPrice={1500}
                        cuisine={'Continental'}
                        foodImg={'https://res.cloudinary.com/bukka/image/upload/v1459089132/chefmenu/custom:1459088741794bees/menufxone/menu.jpg'}
                        action={()=>console.log('hey!')}/>
                        <MenuItems
                        foodName={'rice'}
                        foodPrice={1500}
                        cuisine={'continental'}
                        foodImg={'https://res.cloudinary.com/bukka/image/upload/v1459089132/chefmenu/custom:1459088741794bees/menufxone/menu.jpg'}
                        action={()=>console.log('hey!')}/>
                        <MenuItems
                        foodName={'rice'}
                        foodPrice={1500}
                        cuisine={'continental'}
                        foodImg={'https://res.cloudinary.com/bukka/image/upload/v1459089132/chefmenu/custom:1459088741794bees/menufxone/menu.jpg'}
                        action={()=>console.log('hey!')}/>
                        <MenuItems
                        foodName={'rice'}
                        foodPrice={1500}
                        cuisine={'continental'}
                        foodImg={'https://res.cloudinary.com/bukka/image/upload/v1459089132/chefmenu/custom:1459088741794bees/menufxone/menu.jpg'}
                        action={()=>console.log('hey!')}/>
                        <MenuItems
                        foodName={'rice'}
                        foodPrice={1500}
                        cuisine={'continental'}
                        foodImg={'https://res.cloudinary.com/bukka/image/upload/v1459089132/chefmenu/custom:1459088741794bees/menufxone/menu.jpg'}
                        action={()=>console.log('hey!')}/>
                        </ScrollView>
                </View>
            </View>
        )
    }
}