import { Text, View, Image, StyleSheet, Platform } from 'react-native';

// import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';


const HomeScreen = () => {
  const currentDate = new Date();
  const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  return (
    
    <View>
        <View style = {styles.reactLogo}>
        <Text style={styles.dateText} >
        {month[currentDate.getMonth()]} {currentDate.getDate()}, {currentDate.getFullYear()}
          </Text>
          <Text style = {styles.percentage}>100%</Text>
          
            </View>
           
            <View style={{
    borderBottomColor: 'black',
    borderBottomWidth: 5,
  }}/>

      <View style={styles.calendar}>
        <View style={styles.verticalLine}>
        <View style={styles.todo}>
      </View>
      </View>
</View>
      <View style={styles.weekly}>
      </View>


    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginTop: 50,
    marginLeft: 20,
  },
  verticalLine: {
    height: 520,
    width: 5, 
    backgroundColor: 'black',
    marginLeft: 180,
  },
  percentage: {
    textAlign: "right",
    marginRight: 20,
    fontSize: 70,
    fontFamily: "Inter",
    fontWeight: "bold",
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 150,
    width: 390,
    top: 40,
    marginBottom: 45,
  },

  calendar: {
    height: 520,
    width: 180,
  },
  todo: {
    marginLeft: 5,
    height: 520,
    width: 208,
  },
  weekly: {
    height: 80,
    width: 390,
    backgroundColor: '#FF5733',
    marginTop: 10,
  },
  dateText: {
    fontSize: 20,
    marginLeft: 10,
    marginTop: 10,
   
  }

});

export default HomeScreen
