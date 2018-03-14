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
import {mapStateToProps} from '../lib/resources'
import {connect} from 'react-redux'

class AddCard extends Component{
    constructor(props){
        super(props)
        console.log(props)
    }

    render(){
        return(
            /*<CommonContainer
            inner={
                <View style={{borderWidth:1,borderColor:'blue',alignSelf:'stretch',flex:1,padding:20}}>
                    <View style={{flex:2,display:'flex'}}>
                        <Card 
                            cardNumber='1234-1234-1234-1234'
                            cardHolder='John Doe'
                            expires='07/20'
                            CVC='234'
                            />
                    </View>
                    
                    <View style={{flex:3,justifyContent:'space-between'}}>
                        <View style={{borderWidth:2,borderColor:'#C4D1DC',height:30,flexDirection:'row',borderRadius:5}}>
                            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                                <Img
                                    source={{uri:rsc.NIGflag}}
                                    style={{width:21,height:13}}/>
                            </View>

                            <TextInput 
                                style = {{flex:5}}
                                value = {'Nigeria'}
                                editable = {false}
                                onChangeText={(txt)=>console.log(txt)}
                            />
                        </View>
                        <View style={{borderWidth:2,borderColor:'#C4D1DC',height:30,flexDirection:'row',borderRadius:5}}>
                            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                                <Img
                                    source={{uri:rsc.mastercard}}
                                    style={{width:27,height:21}}/>
                            </View>

                            <TextInput 
                                style = {{flex:5}}
                                onChangeText={(txt)=>console.log(txt)}
                                placeholder= 'xxxx-xxxx-xxxx-xxxx'
                            />
                        </View>
                        <View style={{borderWidth:2,borderColor:'#C4D1DC',height:30,flexDirection:'row',borderRadius:5}}>
                            <TextInput 
                                style = {{flex:5}}
                                onChangeText={(txt)=>console.log(txt)}
                                placeholder= 'xxxx-xxxx-xxxx-xxxx'
                            />

                            <TextInput 
                                style = {{flex:5}}
                                onChangeText={(txt)=>console.log(txt)}
                                placeholder= 'xxxx-xxxx-xxxx-xxxx'
                            />
                        </View>
                    </View>
                </View>
            }/>*/
           <View style={[styles.container,{backgroundColor:colors.b}]}>
                <View style={{flex:3}}>
                    <CardDetails store={this.props.store}/>
                </View>
                <View style={{flex:1}}></View>
            </View>
        )
    }
}

export default connect(mapStateToProps)(AddCard)
