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
import * as Animatable from 'react-native-animatable'



const CardInputCollection=(props)=>(
 <ScrollView style={{flex:1}}>
    <View style={{borderWidth:2,borderColor:'#C4D1DC',height:30,flexDirection:'row',borderRadius:5,marginBottom:10}}>
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <Img
                source={{uri:rsc.NIGflag}}
                style={{width:21,height:13}}/>
        </View>

        <TextInput 
            style = {{flex:5}}
            value = {'Nigeria'}
            editable = {false}
        />
    </View>
    <View style={{borderWidth:2,borderColor:'#C4D1DC',height:30,flexDirection:'row',borderRadius:5,marginBottom:10}}>
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <Img
                source={{uri:rsc.mastercard}}
                style={{width:27,height:21}}/>
        </View>

        <TextInput 
            style = {{flex:5}}
            placeholder= 'xxxx-xxxx-xxxx-xxxx'
            keyboardType='numbers-and-punctuation'
            value={props.cardValue}

            onChangeText={props.cardEvent}
        />
    </View>
    <View style={{flexDirection:'row',marginBottom:10}}>
        <View style={{borderWidth:2,borderColor:'#C4D1DC',height:30,flexDirection:'row',borderRadius:5,flex:1,marginRight:5}}>
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <Icon   name="date-range" 
                        size={24} 
                        color={'#C4C4C4'} />
            </View>
            <TextInput 
                        style = {{flex:5}}
                        onChangeText={props.expiresEvent}
                        placeholder= 'MM/YY'
                        keyboardType='numbers-and-punctuation'
                        value={props.expiresValue}
                        maxLength={5}
                    />
        </View>
        <View style={{borderWidth:2,borderColor:'#C4D1DC',height:30,flexDirection:'row',borderRadius:5,flex:1,marginLeft:5}}>
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <Icon   name="credit-card" 
                        size={24} 
                        color={'#C4C4C4'} />
            </View>
            <TextInput 
                style = {{flex:5}}
                placeholder= 'CVV'
                value={props.CVCValue}
                keyboardType='numbers-and-punctuation'
                maxLength={3}
                onChangeText={props.CVCEvent}
            />
        </View>
    </View>
    <View style={{flexDirection:'row',marginBottom:10}}>
    <CheckBox
        style={{flex: 1,borderColor:'#C4D1DC'}}
        onClick={props.checkBoxEvent}
        isChecked={props.isCheckedValue}
        rightText={'I accept the Terms and Conditions and have read the Privacy Policy'}
        checkBoxColor='#74D12D'
        rightTextStyle={{color:'#C4D1DC',fontSize:9}}
    />
    </View>
    <View style={{justifyContent:'center',alignItems:'center'}}>
    {   (props.activity.authenticating)?
            <Animatable.View  animation="pulse"
                            iterationCount="infinite"
                                style={{flex:1}}>
                <Button text="Authenticating"
                        textColor={[{color:colors.b}]}
                        event={()=>console.log('loading')}
                        button={[{backgroundColor:'#5CBC5C',width:150,borderRadius:5,display:'flex',justifyContent:'center',alignItems:'center',padding:0,margin:0,shadowColor:'#000000',shadowRadius: 5,
                        shadowOpacity: .1,shadowOffset: {
                            width: 0,
                            height: 1
                        }},styles.button_short]}/>
            </Animatable.View >:
        (props.activity.saving)?
            <Animatable.View  animation="pulse"
                            iterationCount="infinite"
                                style={{flex:1}}>
                <Button text="saving"
                        textColor={[{color:colors.b}]}
                        event={()=>console.log('loading')}
                        button={[{backgroundColor:'#5CBC5C',width:150,borderRadius:5,display:'flex',justifyContent:'center',alignItems:'center',padding:0,margin:0,shadowColor:'#000000',shadowRadius: 5,
                        shadowOpacity: .1,shadowOffset: {
                            width: 0,
                            height: 1
                        }},styles.button_short]}/>
            </Animatable.View >:
            <Button text="Save"
                    textColor={[{color:colors.b}]}
                    event={props.buttonEvent}
                    button={[{backgroundColor:'#5CBC5C',borderRadius:5,display:'flex',justifyContent:'center',alignItems:'center',padding:0,margin:0,shadowColor:'#000000',shadowRadius: 5,
                    shadowOpacity: .1,shadowOffset: {
                        width: 0,
                        height: 1
                    }},styles.button__Wided,styles.button_short]}/>
    }
    </View>
</ScrollView>
)

CardInputCollection.propTypes={
    cardValue:propTypes.string.isRequired,
    cardEvent:propTypes.func.isRequired,
    expiresValue:propTypes.string.isRequired,
    expiresEvent:propTypes.func.isRequired,
    CVCValue:propTypes.string.isRequired,
    CVCEvent:propTypes.func.isRequired,
    isCheckedValue:propTypes.bool.isRequired,
    checkBoxEvent:propTypes.func.isRequired,
    buttonEvent:propTypes.func.isRequired,
    activity:propTypes.object.isRequired
}

export default CardInputCollection