import React, { useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Animated
} from 'react-native';
import { Easing } from 'react-native-reanimated';

const App: React.FC = () => {
  const translateY = new Animated.Value(0);

  useEffect(() => {
    startAnimation();
  }, []);

  const startAnimation = () => {
    Animated.loop(
      Animated.timing(translateY, {
        toValue: 1,
        duration: 2000,
        easing: Easing.bounce,
        useNativeDriver: true,
      })
    ).start();
  };

  const translateYInterpolated = translateY.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 300],
  });

  return (
    <View style={styles.container}>
      {/* <Animated.View
        style={[
          styles.ball,
          {
            transform: [{ translateY: translateYInterpolated }],
          },
        ]}
      /> */}
      <Animated.View style={{
        width: "80%",
        height: "50%",
        backgroundColor: 'yellow',
      }} />
      <View style={{
        padding: 10,
        backgroundColor: 'orange',
        borderRadius: 20,
        marginTop: 20,
      }}>
        <Text style={{ color: 'black' }}>Start Animation</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
  },
  ball: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'pink',
  },
});
export default App;