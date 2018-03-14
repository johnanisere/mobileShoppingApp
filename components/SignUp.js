import React,{Component}from 'react';
import { View,Text,TouchableOpacity,Animated,Image,Easing,ScrollView,TextInput } from 'react-native';
import styles,{colors} from '../styles/style'
import Inputs from './Inputs'
import propTypes from 'prop-types'
import Button from './Button'
import storage from '../data_Container/store'
import Img from './Images'
import lib from '../lib/lib'
import rsc from '../lib/resources'
import SignUpB from './SignUpTwo'
import SignUpA from './SignUpOne'
import Swiper from 'react-native-swiper'

class SignUp extends Component {
  constructor(props){
    super(props)
    this.state={
      displayInputLabel:false,
      email:'',
      password:'',
      repeatPassword:'',
      firstName:'',
      lastName:'',
      mobile:'',
      page:false,
      index:0
    }
    this.onSignUp=this.onSignUp.bind(this)
  }
  
onSignUp(){
    let email=this.state.email,
        password=this.state.password,
        repeatPassword=this.state.repeatPassword,
        firstname=this.state.firstName,
        lastname=this.state.lastName,
        mobile=this.state.lastName
  if( email ===''){
    alert('Please enter a valid email address')
  }else if ( password ===''){
    alert('please enter a password')
  }else if ( repeatPassword !==password){
    alert('Password mismatch')
  }else if (firstname === ''){
    alert('Please enter a first name')
  }else if (lastname === ''){
    alert('Please enter a last name')
  }else if (mobile === ''){
    alert('Please enter a valid phone number')
  }else{
      let newUser={ 
        email,
        firstname,
        lastname,
        password,
        mobile ,
        isCustomer:true }

      lib.signup(newUser)
  }
} 


componentWillReceiveProps(nextProps){
   if(nextProps.screenProps.signup.error){
        if(nextProps.screenProps.signup.error.response)
        alert(nextProps.screenProps.signup.error.response.data.msg)
        else
        alert("There appers to be a problem with your network connection,Please try again")
    }

}

  render() {
    return (
      <View style={[styles.container,{backgroundColor:colors.a}]}>
          <View style={{flex:1}}></View>
          <View style={{flex:5,justifyContent:'space-between',alignItems:'center'}}>
            <Img  
                  source={{uri:rsc.logo}} 
                  style={[{width:200,height:75}]}
                  onLoadStart={(e) => this.setState({loading: true})}
                  onLoad={(e) => this.setState({loading: false})}/>
            <Swiper activeDotColor="white"
                    index={1}
                    bounces={true}
                    loop={false}
                    onIndexChanged={(index)=>console.log(index)}>
                <SignUpA email={(email)=>this.setState(()=>({email}))}
                         password={(password)=>this.setState(()=>({password}))}
                         repeatPassword={(repeatPassword)=>this.setState(()=>({repeatPassword}))}
                         value={this.state}/> 
                <SignUpB firstName={(firstName)=>this.setState(()=>({firstName}))}
                         lastName={(lastName)=>this.setState(()=>({lastName}))}
                         mobile={(mobile)=>this.setState(()=>({mobile}))}
                         value={this.state}/> 
            </Swiper>
            {
                (this.props.screenProps.signup.fetching)?
                <Button text="Creating Account..."
                        textColor={[{color:colors.a}]}
                        event={()=>console.log('Creating Account')}
                        button={[{backgroundColor:'#fff',borderRadius:5, display:'flex',justifyContent:'center',alignItems:'center',padding:0,margin:0,shadowColor:'#000000',shadowRadius: 5,
                        shadowOpacity: .5,shadowOffset: {
                            width: 0,
                            height: 1
                        }},styles.button__Widec,styles.button__Long]}/>:
                <Button text="Sign Up"
                        textColor={[{color:colors.a}]}
                        event={this.onSignUp}
                        button={[{backgroundColor:'#fff',borderRadius:5, display:'flex',justifyContent:'center',alignItems:'center',padding:0,margin:0,shadowColor:'#000000',shadowRadius: 5,
                        shadowOpacity: .5,shadowOffset: {
                            width: 0,
                            height: 1
                        }},styles.button__Widec,styles.button__Long]}/>
            }
            
          </View>
          <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <Text style={{color:'rgba(255, 255, 255,.6)'}}>
              Already have an Account? 
              <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('signin')}
                  style={{width:50,height:13}}>
                  <Text style={{paddingLeft:5,color:'rgba(255, 255, 255,1)'}}>
                    Sign In
                  </Text>
              </TouchableOpacity>
            </Text>
          </View>
      </View>
    );
  }
}

export default SignUp