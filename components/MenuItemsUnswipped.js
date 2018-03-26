import React from 'react'
import { View,Text,TouchableOpacity} from 'react-native'
import Img from './Images'
import rsc from '../lib/resources'
import styles from '../styles/style'
import SpinnerIndicator from './SpinnerIndicator'
import propTypes from 'prop-types'
import Dimensions from 'Dimensions'

export default class MenuItem extends React.Component {
  constructor(props){
    super(props)
    this.state={
      loading:false
    }
  }
  render() {
    return (
        <TouchableOpacity style={[
          styles.containerg,
          {
            height:Dimensions.get('window').height* 5/8*1/4-10,
            position:'relative'
            }]}
            onPress={this.props.onUserPress}>
          <View style={styles.flexb}>
            <Text style={[styles.texta,{fontSize:18,fontWeight:'700'}]} numberOfLines={1} >{this.props.foodName}</Text>
            <Text style={[styles.textb,{fontSize:14}]}>
              {//'\u2022'
              }
              <Text style={[{fontSize:14}]} >{this.props.cuisine}</Text>
            </Text>
            <Text style={[styles.textc,{fontSize:18,fontWeight:'700'}]}>₦{this.props.foodPrice}</Text>
          </View>
          <Img source={{uri:this.props.foodImg}}
              style={[styles.imagea,{width:70,height:70,borderRadius:35}]}
              onLoadStart={(e) => this.setState({loading: true})}
              onLoad={(e) => this.setState({loading: false})}/>
          {
            (this.state.loading)?
            <View style={[styles.imagea,{width:70,height:70,borderRadius:35,position:'absolute',right:0,justifyContent:'center',alignItems:'center'}]}>
            <SpinnerIndicator
                    customStyles={  
                        [styles.loading__a,{width:70,height:70,borderRadius:35,paddingRight:10}]
                    }
                    customStylesChild={[{width:70,height:70,borderRadius:35}]}   />
                    </View>:
            null
            
          }
        </TouchableOpacity>
    );
  }
}

MenuItem.propTypes={
  foodName:propTypes.string.isRequired,
  foodPrice:propTypes.number.isRequired,
  cuisine:propTypes.string.isRequired,
  foodImg:propTypes.string.isRequired,
  onUserPress:propTypes.func.isRequired
}
