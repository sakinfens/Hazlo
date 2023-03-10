import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {Text, Button} from 'react-native-paper';

export default Home = () => {
  return (
    <View>
      <Image
        style={styles.image}
        source={require('/Users/steve.akinfenwa/Hazlo/utils/images/gsd.jpg')}
      />
      <Text variant="displayLarge">
        Get the things done you actually need to get done
      </Text>
      <Button mode="contained" onPress={() => console.log('Pressed')}>
        Press me
      </Button>
      <Button mode="contained" onPress={() => console.log('Pressed')}>
        Press me
      </Button>
      <Button mode="contained" onPress={() => console.log('Pressed')}>
        Press me
      </Button>
      <Button mode="contained" onPress={() => console.log('Pressed')}>
        Press me
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  image: {
    width: 340,
    height: 234,
  },
  title: {
    fontSize: 26,
    fontFamily: 'Inter',
  },
});
