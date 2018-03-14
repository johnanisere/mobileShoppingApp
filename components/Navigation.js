import React,{Component} from 'react'
import {StackNavigator} from 'react-navigation'
import SignUp from './SignUp'
import {connect} from 'react-redux'
import {mapStateToProps} from '../lib/resources'
import SignIn from './SignIn'

const Navigation = StackNavigator({
    signup: { 
      screen: SignUp,
      navigationOptions: {
        header: false,
      }
     },
    signin:{
      screen: SignIn,
      navigationOptions:{
        header: false,
      }
    }
  })

  
class Root extends Component {
  
  render() {
    return( <Navigation screenProps={this.props} />)
  }
}


export default connect(mapStateToProps)(Root)
  