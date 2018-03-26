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
import MenuItems from './MenuItems'

export default class Chef extends Component{
    constructor(props){
        super(props)
        this.state={
            loading:false
          }
          console.log(this.props)
          this.onSelectChef=this.onSelectChef.bind(this)
    }
    onSelectChef(val){
        lib.updatechefbycuisine(val)
        this.props.navigation.navigate('menulist',val)
    }

    render(){
        const {chef,currentCuisine}=this.props.screenProps
       /* return(
            <TouchableOpacity style={{alignSelf:'center',justifyContent:'center',alignItems:'center',backgroundColor:'transparent',position:'relative',width:60,height:60,marginLeft:12,marginRight:12}}
                              onPress={this.props.event}>
                <View style={[{width:60,height:60,backgroundColor:'rgba(0,0,0,.05)',borderRadius:40,borderWidth:2,justifyContent:'center',alignItems:'center'},(this.props.active===this.props.chefUid)?{borderColor:'rgba(156,28,38,1)'}:{borderColor:'#F69322'}]}>
                    <Img source={{uri:this.props.image}}
                            style={{width:52,height:52,borderRadius:26}}
                            onLoadStart={(e) => this.setState({loading: true})}
                            onLoad={(e) => this.setState({loading: false})}/>
                </View>
                    <Text style={{width:50,marginTop:5,textAlign:'center'}} numberOfLines={1} >{this.props.chefName}</Text>
            </TouchableOpacity>
        )*/
        return(
                 <ScrollView style={{
                    borderRadius:10,
                    backgroundColor:'white'
                    }}>
                    <View style={{
                        flex:1,
                        backgroundColor:'white',
                        flexDirection:'row',
                        flexWrap:'wrap',
                        padding:20,
                        minHeight: Dimensions.get('window').height*(2.6/8)
                        }}>
                        
                        {
                           chef.chefAndCuisine[currentCuisine].map((val,i)=>
                                <View style={{
                                        width:'50%',
                                        justifyContent:'center',
                                        alignItems:'center'}}
                                    key={i}>
                                    <MenuIconButton 
                                            text={lib.format(val.first_name)+' '+lib.format(val.last_name)}
                                            style={styles.flexa}
                                            dimension={{width:100,height:100,borderRadius:50}}
                                            radius={{padding:0,borderRadius:175}}
                                            source={val.profile_photo}
                                            deco={{fontSize:16,marginTop:10,width:100}}
                                            onPress={()=>this.onSelectChef(val)}
                                            />
                                </View>
                            )
                        }
                    </View>
                </ScrollView>
        )
    }
}

Chef.propTypes={
    screenProps:propTypes.object.isRequired
}