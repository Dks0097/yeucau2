import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Bai3 from './components/Bai3';


const App = () => {
  return (
    <View style={styles.container} >
    
      <Bai3 />
    
    </View>
    
  )
}
export default App
const styles = StyleSheet.create({
  container: {
    flex: 1,
   
  },
  
})
