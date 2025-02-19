import React from 'react';
import {View} from 'react-native';

function App() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <View
        style={{
          width: '60%',
          height: 200,
          borderRadius: 30,
          elevation: 3,
          backgroundColor: 'darkgray',
        }}
      />
    </View>
  );
}
export default App;
