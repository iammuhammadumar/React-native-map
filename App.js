/*This is an Example of React Native Map*/
import React from 'react';
import { StyleSheet, Text, View , TouchableOpacity, Alert} from 'react-native';
import MapView, { Marker } from 'react-native-maps';
export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      // Chosse current reigon
      region: {
        latitude: 50.4452,
        longitude: -104.6189,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      },
       // Chosse Marker properties
      markerlatitude: 50.4452,
      markerlongitude: -104.6189,
      markertitle: 'Regina',
      markerdescription: 'Best City',
    };
  };

  Yorkton = () => {
    let region = {
      latitude: 51.213890,
      longitude: -102.462776,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }
    this.setState({region: region });
    this.setState({ markerlatitude :51.213890 ,markerlongitude: -102.462776, markertitle: 'Yorkton', markerdescription: 'Yorkton is best city'  });
  };

  Warman = () => {
    let region = {
      latitude: 52.321945,
      longitude: -106.584167,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }
    this.setState({region: region });
    this.setState({ markerlatitude :52.321945 ,markerlongitude: -106.584167, markertitle: 'Warman', markerdescription: 'Warman is best city'  });
  };

  Lloydminster = () => {
    let region = {
      latitude: 53.278046,
      longitude: -110.005470,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }
    this.setState({region: region });
    this.setState({ markerlatitude :53.278046,markerlongitude: -110.005470, markertitle: 'Lloydminster', markerdescription: 'Lloydminster is best city'  });
  };

  Humboldt = () => {
    let region = {
      latitude: 52.201942,
      longitude: -105.123055,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }
    this.setState({region: region });
    this.setState({ markerlatitude :52.201942, markerlongitude: -105.123055, markertitle: 'Humboldt', markerdescription: 'Humboldt is best city'  });
  };

  render() {
    return (
      <View style={styles.mainContainer}>
        {/* ButtonView */}
        <View style={styles.buttonView}>
          <TouchableOpacity onPress={this.Yorkton}  style={styles.button}>
            <Text style={{color: 'white'}}>Yorkton</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.Lloydminster} style={styles.button}>
            <Text style={{color: 'white'}}>Lloydminster</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.Warman} style={styles.button}>
            <Text style={{color: 'white'}}>Warman</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.Humboldt} style={styles.button}>
            <Text style={{color: 'white'}}>Humboldt</Text>
          </TouchableOpacity>
        </View>
        {/* MapView */}
        <View style={styles.mapContainer}>
          <MapView
            style={styles.map}
            initialRegion={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
            region={this.state.region}
        >
          <Marker
            draggable
            coordinate={{
              latitude: this.state.markerlatitude,
              longitude: this.state.markerlongitude,
            }}
            title={this.state.markertitle}
            description={this.state.markerdescription}
          />
        </MapView>
        </View>
      </View>

    );
  }
}
 
const styles = StyleSheet.create({
  mainContainer:{
    flex: 1,
  },
  buttonView: {
    flex: 1,
    margin:50,
  },
  mapContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
    margin:20,
  },
  map: {
    position:'absolute',
    top:0,
    left:0,
    right:0,
    bottom:0,
  },
  button: {
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'gray',
    marginTop:20,
  }
});
