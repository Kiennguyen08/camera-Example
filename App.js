/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { RNCamera } from 'react-native-camera';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';


class App extends React.Component{
  state = {
    barcodes: [],
  }
  renderBarcode = ({ bounds, data }) => (
    <React.Fragment key={data + bounds.origin.x}>
      <View
        style={{
          borderWidth: 2,
          borderRadius: 10,
          position: 'absolute',
          borderColor: '#F00',
          justifyContent: 'center',
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          padding: 10,
          ...bounds.size,
          left: bounds.origin.x,
          top: bounds.origin.y,
        }}
      >
        <Text style={{
          color: '#F00',
          flex: 1,
          position: 'absolute',
          textAlign: 'center',
          backgroundColor: 'transparent',
        }}>{data}</Text>
      </View>
    </React.Fragment>
  );
  renderBarcodes = () => (
    <View>
      {this.state.barcodes.map(this.renderBarcode)}
    </View>
  );
  barcodeRecognized = ({ barcodes }) => this.setState({ barcodes })

  render() {
    return (
      <>
        <StatusBar barStyle="dark-content" />
    
        <RNCamera
          ref={ref => {
              this.camera = ref;
          }}
          style={{
              flex: 1,
             width: '100%',
          }}
          onGoogleVisionBarcodesDetected={this.barcodeRecognized}
         >
          {this.renderBarcodes()}
        </RNCamera>
  
      </>
    );
  }

};


export default App;

