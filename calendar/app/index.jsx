import { Text, View, Image, StyleSheet, Platform } from 'react-native';

// import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';


export default function HomeScreen() {
  // Get the current date and format it
  const currentDate = new Date();
  const formattedDate = format(currentDate, 'MMMM dd, yyyy');
  return (
    
    <View>
        <View style = {styles.reactLogo}>
        <Text style={styles.dateText}>
        {formattedDate}
          
          <Text style = {styles.percentage}>
            100%
          </Text></Text>
            </View>
      
      <View style={styles.calendar}>
        <View style={styles.todo}>
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
  percentage: {
    textAlign: "right",
    fontSize: 70,
    fontFamily: "Courier New",
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
    backgroundColor: 'blue',
  },
  todo: {
    marginLeft: 182,
    height: 520,
    width: 208,
    backgroundColor: 'red',
  },
  weekly: {
    height: 80,
    width: 390,
    backgroundColor: 'grey',
    marginTop: 10,
  }

});
