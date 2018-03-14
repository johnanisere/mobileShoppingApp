import React from 'react'
import { MapView } from 'expo'
import Geocoder from 'react-native-geocoding'
import rsc from '../lib/resources'

export default class App extends React.Component {
    constructor(props){
        super(props)
        this.state={
            latlng:{
                latitude: 6.556088584481325,
                latitudeDelta: 0.0017966223499820337,
                longitude: 3.362153358757496,
                longitudeDelta: 0.010187029838562012,
                address:''
                    }
        }
        this.onRegChange = this.onRegChange.bind(this)
        this.getAddress = this.getAddress.bind(this)
    }

    onRegChange(region){
        this.setState({latlng:region})
        console.log("region change complete",region)
        this.getAddress()
    }
    getAddress(){
        const {latitude,longitude}=this.state.latlng
        Geocoder.setApiKey(rsc.googleApiKey)

        Geocoder.getFromLatLng(latitude, longitude)
        .then(
            json => {
              var address_component = json.results[0].address_components[0];
              let loc=json.results[0].formatted_address.split(",")[0].split(" "),newloc=[]
              for(let _=1;_<loc.length;_++){
                  newloc.push(loc[_])
              }
             let _loc = json.results[0].formatted_address.split(",")
             _loc[0]=newloc.join(" ")
             this.setState({address:_loc.join('')})
            },
            error => {
              alert(error);
            }
          )
    }
    componentDidMount(){
        navigator.geolocation.watchPosition((position) => {
            let latlng = {
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
                latitudeDelta: 0.018001154790275642,
                longitudeDelta: 0.010187029838562012,
            }
            this.setState({latlng})
          });
    }
  render() {
    return (
      <MapView
        provider="google"
        style={{ flex: 1 }}
        region={this.state.latlng}
        liteMode={true}
        onRegionChange = {(e)=>console.log(e)}
        onRegionChangeComplete = {this.onRegChange}
        initialRegion={this.state.latlng}
      >
      <MapView.Marker
        coordinate={this.state.latlng}
        />

      </MapView>
    );
  }
}