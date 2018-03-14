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

export default class CardComponent extends Component {
    constructor(props){
        super(props)
        this.state={
            cardNumber:this.props.cardNumber||'XXXX-XXXX-XXXX-XXXX',
            cardHolder:this.props.cardHolder||'XXXX XXXX',
            expires:this.props.expires||'XX/XX',
            CVC:this.props.CVC||'XXX'
        }
    }

    render (){
        return(
            <View style={{
                padding:20,
                backgroundColor:'#465361',
                margin:17,
                borderRadius:5,
                shadowColor:'#000000',
                shadowRadius: 5,
                shadowOpacity: .2,
                shadowOffset: {
                        width: 0,
                        height: 15
                    }}}>
                <View style={{height:40,flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginBottom:10}}>
                </View>
                <View style={{height:50,flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginBottom:10}}>
                    <View>
                        <Text style={{color:'rgba(255,255,255,.8)',fontSize:8,marginBottom:5,letterSpacing:2}}>
                            CARD NUMBER
                        </Text>
                        <Text style={{color:'rgba(255,255,255,.8)',fontSize:14,fontWeight:'bold'}}>
                            {this.state.cardNumber}
                        </Text>
                    </View>
                    <View style={{justifyContent:'center',alignItems:'center'}}>
                        <Img
                            style={{width:55.17,height:40}}
                            source={{uri:rsc.cardicon}}
                        />
                    </View>
                </View>
                <View style={{height:50,flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                    <View>
                        <Text style={{color:'rgba(255,255,255,.8)',fontSize:8,marginBottom:5,letterSpacing:2}}>
                                CARD HOLDER
                        </Text>
                        <Text style={{color:'rgba(255,255,255,.8)',fontSize:14,fontWeight:'bold'}}>
                            {this.state.cardHolder}
                        </Text>
                    </View>
                    <View style={{justifyContent:'space-between',flexDirection:'row',minWidth:100,paddingRight:20}}>
                        <View>
                            <Text style={{color:'rgba(255,255,255,.8)',fontSize:8,marginBottom:5,letterSpacing:2}}>
                                EXPIRES
                            </Text>
                            <Text style={{color:'rgba(255,255,255,.8)',fontSize:14,fontWeight:'bold'}}>
                                {this.state.expires}
                            </Text>
                        </View>
                        <View>
                            <Text style={{color:'rgba(255,255,255,.8)',fontSize:8,marginBottom:5,letterSpacing:2}}>
                                CVC
                            </Text>
                            <Text style={{color:'rgba(255,255,255,.8)',fontSize:14,fontWeight:'bold'}}>
                                {this.state.CVC}
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}



CardComponent.propTypes={
    cardNumber:propTypes.string,
    cardHolder:propTypes.string,
    expires:propTypes.string,
    CVC:propTypes.string
}