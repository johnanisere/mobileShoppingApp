import React from 'react';
import { View,Text,TouchableOpacity} from 'react-native';
import styles,{colors} from './styles/style'
import Inputs from './components/Inputs'
import MenuIconButton from './components/MenuIconButton'
import BoldText from './components/BoldText'
import rsc from './lib/resources'
import Img from './components/Images'
import KitchenDetails from './components/KitchenDetails'
import MenuNavigation from './components/MenuNavigations'


export default class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
      loading:false
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={[{borderRadius:40,padding:2}]}>
          <Img  source={{uri:rsc.potUri}} 
                style={[{width:60,height:60,borderRadius:40}]}/>
        </View>
      </View>
    );
  }
}

