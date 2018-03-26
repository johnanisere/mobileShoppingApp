import React,{Component} from 'react'
import {StackNavigator} from 'react-navigation'
import SignUp from '../SignUp'
import {connect} from 'react-redux'
import {mapStateToProps} from '../../lib/resources'
import SignIn from '../SignIn'
import ShopContainer from '../ShopContainer'

const Navigation = StackNavigator({
    signin:{
      screen: SignIn,
      navigationOptions:{
        header: false,
      }
    },
    signup: { 
      screen: SignUp,
      navigationOptions: {
        header: false,
      }
     },
    Shop:{
      screen: ShopContainer,
      navigationOptions:{
        header:false
      }
    }
  })

  const ShopNavigation = StackNavigator({
    Shop:{
      screen: ShopContainer,
      navigationOptions:{
        header:false
      }
    }
  })
  
class Root extends Component {
  constructor(props){
    super(props)
    console.log(this.props)
  }
  
  render() {
    return( 
      (this.props.user.isAuthenticated)?
      <ShopNavigation screenProps={this.props} />:
      <Navigation screenProps={this.props} />
)
  }
}


export default connect(mapStateToProps)(Root)
  