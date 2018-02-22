import React from 'react'
import { View,Text,TouchableOpacity} from 'react-native'
import Img from './Images'
import rsc from '../lib/resources'
import styles from '../styles/style'
import SpinnerIndicator from './SpinnerIndicator'
import propTypes from 'prop-types'

export default class MenuItem extends React.Component {
  constructor(props){
    super(props)
    this.state={
      loading:false
    }
  }
  render() {
    return (
        <View style={[styles.containerg,{height:120}]}>
          <View style={styles.flexb}>
            <Text style={styles.texta}>{this.props.foodName}</Text>
            <Text style={styles.textb}>
              {'\u2022'}
              <Text>{this.props.cuisine}</Text>
            </Text>
            <Text style={styles.textc}>₦{this.props.foodPrice}</Text>
          </View>
          <Img source={{uri:this.props.foodImg}}
              style={styles.imagea}
              onLoadStart={(e) => this.setState({loading: true})}
              onLoad={(e) => this.setState({loading: false})}/>
          {
            (this.state.loading)?
            <SpinnerIndicator
                    customStyles={  
                        styles.loading__a
                    }   />:
            null
          }
        </View>
    );
  }
}

MenuItem.propTypes={
  foodName:propTypes.string.isRequired,
  foodPrice:propTypes.number.isRequired,
  cuisine:propTypes.string.isRequired,
  foodImg:propTypes.string.isRequired
}
