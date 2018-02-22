import React from 'react';
import { View,Text,TouchableOpacity,Animated,Image,Easing } from 'react-native';
import styles,{colors} from '../styles/style'
import Icon from 'react-native-vector-icons/EvilIcons';

class SpinnerIndicator extends React.Component {
  constructor(props){
    super(props)
    this.spinValue = new Animated.Value(0)
  }
  spin () {
    this.spinValue.setValue(0)
    Animated.timing(
      this.spinValue,
      {
        toValue: 1,
        duration: 500,
        easing: Easing.linear
      }
    ).start(() => this.spin())
  }
  componentDidMount () {
    this.spin()
  }
  render() {
    const spin = this.spinValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg']
    })
    return (
      <View style={[styles.container,{backgroundColor:"white"},this.props.customStyles]}>
        <View style={[styles.anima]}>
            <Animated.View
            style={{transform: [{rotate: spin}]}}
            >
            <Icon name="spinner-3" size={30} color={colors.aa} />
            </Animated.View>
        </View>
      </View>
    );
  }
}

export default SpinnerIndicator