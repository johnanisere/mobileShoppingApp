import React,{Component} from 'react';
import { View,Text,TouchableOpacity,Animated,Image,Easing,ScrollView,TextInput } from 'react-native';
import styles,{colors} from '../styles/style'
import Inputs from './Inputs'
import propTypes from 'prop-types'
import Button from './Button'
import storage from '../data_Container/store'
import Img from './Images'
import lib from '../lib/lib'
import rsc,{mapStateToProps} from '../lib/resources'
import Swiper from 'react-native-swiper'
import {connect} from 'react-redux'

export default class SignIn extends Component{
    constructor(props){
        super(props)
        this.state={
            email:'',
            password:'',
            switchScreen:false
        }
    }
    render(){
        return(
        <View style={[styles.container,{backgroundColor:colors.a}]}>
            <View style={{flex:1}}></View>
            <View style={{flex:3,alignItems:'center',paddingLeft:10,paddingRight:10,justifyContent:'space-around'}}>
                <Img  
                    source={{uri:rsc.logo}} 
                    style={[{width:200,height:75,marginBottom:10}]}
                    onLoadStart={(e) => this.setState({loading: true})}
                    onLoad={(e) => this.setState({loading: false})}/>
                <ScrollView>
                    <View>
                        <Inputs     text="Email address"
                                    isPassword={false}
                                    onChangeText={(email)=>this.setState(()=>({email}))}
                                    value={this.state.email}
                                    />
                        <Inputs text="Password"
                                isPassword={true}
                                onChangeText={(password)=>this.setState(()=>({password}))}
                                value={this.state.password}
                                />
                    </View>
                    {
                        (this.state.switchScreen)?
                        <TouchableOpacity
                            //style={{width:50,height:13}}
                            >
                            <Text style={{paddingLeft:5,color:'rgba(255, 255, 255,1)',textAlign:'right',color:'#F69322'}}>
                                Sign In?
                            </Text>
                        </TouchableOpacity>:
                        <TouchableOpacity
                            //style={{width:50,height:13}}
                            >
                            <Text style={{paddingLeft:5,color:'rgba(255, 255, 255,1)',textAlign:'right',color:'#F69322'}}>
                                Forgot Password?
                            </Text>
                        </TouchableOpacity>
                    }
                </ScrollView>
                <Button text="Sign In"
                        textColor={[{color:colors.a}]}
                        event={()=>console.log('Creating Account')}
                        button={[{backgroundColor:'#fff',borderRadius:5, display:'flex',justifyContent:'center',alignItems:'center',padding:0,margin:0,shadowColor:'#000000',shadowRadius: 5,
                        shadowOpacity: .5,shadowOffset: {
                            width: 0,
                            height: 1
                        }},styles.button__Widec,styles.button__Long]}/>
            </View>
            <View style={{flex:1}}>
                <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                    <Text style={{color:'rgba(255, 255, 255,.6)'}}>
                        Dont have an Account? 
                        <TouchableOpacity
                            style={{width:75,height:13}}>
                            <Text style={{paddingLeft:5,color:'rgba(255, 255, 255,1)',fontWeight: 'bold'}}>
                                Register
                            </Text>
                        </TouchableOpacity>
                    </Text>
                </View>
            </View>
        </View>
        )
    }
}

