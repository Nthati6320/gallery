import { StatusBar } from 'react-native';
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import { useState } from 'react';
import Display from './Display';
import { Ionicons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';

export default function App() {

  const[image, setImage] = useState(require('./assets/sad.jpg'));

  function firstImage(){
    setImage(require('./assets/happy.jpg'));
  }

  function secondImage(){
    setImage(require('./assets/okay.jpg'));
  }

  function thirdImage(){
    setImage(require('./assets/sad.jpg'));
  }
  return (
    <View style={styles.container}>
      <StatusBar />
      <View style={styles.rec}>
        <Text style={{color: 'white', fontWeight: '700', fontSize: 18, paddingLeft: 10}}>All Photos</Text>
        <View style={styles.add}><Ionicons name="add" size={24} color="white" /></View>
        <View style={styles.more}><Fontisto name="more-v-a" size={18} color="white" /></View>
      </View>
      <Display image={image}/>
      

      <View style={styles.one}>
      <View>
      <TouchableOpacity onPress={firstImage}>
       <Image source={require('./assets/happy.jpg')}
       style={{height: 60, width: 70, borderRadius: 15, marginRight: 10}}/>   
      </TouchableOpacity>
      </View>


      <View>
      <TouchableOpacity onPress={secondImage}>
       <Image source={require('./assets/okay.jpg')}
       style={{height: 60, width: 70, borderRadius: 15, marginRight: 10}}/>   
      </TouchableOpacity>
      </View>


      <View>
      <TouchableOpacity onPress={thirdImage}>
       <Image source={require('./assets/sad.jpg')}
       style={{height: 60, width: 70, borderRadius: 15}}/>   
      </TouchableOpacity>
      </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center'
  },

  rec:{
    height: 30,
    width: 350,
    marginBottom: 10,
    justifyContent: 'space-evenly'
  },

  add:{
    position: 'absolute',
    right: 35
  },

 
    more:{
      position: 'absolute',
      right: 15,
      top: 5
    },
  
    one:{
      flexDirection: 'row',
      marginTop: 40
    }
});
