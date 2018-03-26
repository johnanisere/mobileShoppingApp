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
          console.log(this.props)
    }
    render(){
        //const {chefAndCuisine,currentCuisine,yourChef}=this.props.chef
        return(
            <View style={{flex:1,borderRadius:5,backgroundColor:'white',borderRadius:10,padding:10}}>
            {/*<View style={{flex:1,}}>
                <View style={{flex:.5,flexDirection:'row',alignItems:'center',marginBottom:0,backgroundColor:'rgba(0,0,0,.05)'}}>
                    <View style={{height:20,flex:1,flexDirection:'row',justifyContent:'space-between',alignItems:'center',paddingLeft:10,paddingRight:10}}>
                        <Text style={{fontSize:16,fontWeight:'700'}}>Watch</Text>
                        <Text style={{fontSize:18,fontWeight:'700'}}>More</Text>
                    </View>
                </View>
                <ScrollView style={[{flex:2,borderBottomWidth:1,backgroundColor:'rgba(0,0,0,.05)',borderTopLeftRadius:5,borderTopRightRadius:5}]}
                           horizontal= {true}
                           decelerationRate={10}
                           snapToInterval={80} //your element width
                           snapToAlignment={"center"}
                           showsHorizontalScrollIndicator={false}>
                    {/*
                        chefAndCuisine[currentCuisine].map((chef)=>
                        <Chef
                            active = {chef.uid===yourChef.uid}
                            image = {chef.profile_photo}
                            event = {()=>console.log("this is me")}
                            chefUid = {chef.uid}
                            chefName = {chef.first_name+" "+chef.last_name  }
                        />
                        )
                    
                    <Chef
                            active = {true}
                            image = {'https://res.cloudinary.com/bukka/image/upload/v1500853749/google:104487594240799301853/profile_image.jpg'}
                            event = {()=>console.log("this is me")}
                            chefUid = {'123'}
                            chefName = {"john Anisere" }
                        />
                    <Chef
                            active = {true}
                            image = {'https://res.cloudinary.com/bukka/image/upload/v1500853749/google:104487594240799301853/profile_image.jpg'}
                            event = {()=>console.log("this is me")}
                            chefUid = {'123'}
                            chefName = {"john" }
                        />
                    <Chef
                            active = {true}
                            image = {'https://res.cloudinary.com/bukka/image/upload/v1500853749/google:104487594240799301853/profile_image.jpg'}
                            event = {()=>console.log("this is me")}
                            chefUid = {'123'}
                            chefName = {"john" }
                        />
                    <Chef
                            active = {true}
                            image = {'https://res.cloudinary.com/bukka/image/upload/v1500853749/google:104487594240799301853/profile_image.jpg'}
                            event = {()=>console.log("this is me")}
                            chefUid = {'123'}
                            chefName = {"john" }
                        />
                    <Chef
                            active = {true}
                            image = {'https://res.cloudinary.com/bukka/image/upload/v1500853749/google:104487594240799301853/profile_image.jpg'}
                            event = {()=>console.log("this is me")}
                            chefUid = {'123'}
                            chefName = {"john" }
                        />
                    <Chef
                            active = {true}
                            image = {'https://res.cloudinary.com/bukka/image/upload/v1500853749/google:104487594240799301853/profile_image.jpg'}
                            event = {()=>console.log("this is me")}
                            chefUid = {'123'}
                            chefName = {"john" }
                        />
                    <Chef
                            active = {true}
                            image = {'https://res.cloudinary.com/bukka/image/upload/v1500853749/google:104487594240799301853/profile_image.jpg'}
                            event = {()=>console.log("this is me")}
                            chefUid = {'123'}
                            chefName = {"john" }
                        />
                    
                    
                </ScrollView>
                </View>*/}
                <View style={{flex:1,borderRadius:10}}>
                    <ScrollView style={{borderRadius:10}}>
                    {
                        this.props.screenProps.chef.yourChef.menu.map((val,key)=>
                        <MenuItems
                            key={key}
                            foodName={val.menu}
                            foodPrice={val.price}
                            cuisine={lib.format(val.category||this.props.screenProps.chef.yourChef.cuisine)}
                            foodImg={val.image||rsc.potUri}
                            onUserPress={()=>this.props.navigation.navigate('moreiteminfo',{
                                imgsrc:val.image||rsc.potUri,
                                foodPrice:val.price,
                                cuisine:lib.format(val.category||this.props.screenProps.chef.yourChef.cuisine),
                                foodName:val.menu,
                                desc:val.desc,
                                hour:val.hour,
                                min:val.min,
                                evnt:()=>console.log('Working!!')
                            })}
                            action={()=>console.log('hey')}/>
                    ) 
                    }
                    </ScrollView>
                </View>
            </View>
        )
    }
}
