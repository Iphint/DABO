import React, { useEffect } from 'react';
import { View, Text, Image } from 'react-native';
import { SplashImage } from '../assets/images';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';
import '../global.css';
import { useNavigation } from 'expo-router';

export default function Splash() {
  const navigation = useNavigation();
  const opacity = useSharedValue(0);
  const scale = useSharedValue(0.5);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: withTiming(opacity.value, { duration: 1000 }),
      transform: [{ scale: withTiming(scale.value, { duration: 1000 }) }],
    };
  });

  useEffect(() => {
    opacity.value = 1;
    scale.value = 1;
    const timer = setTimeout(() => {
      navigation.navigate('splash_slide');
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View className="flex-1 items-center justify-center">
      <Animated.View style={animatedStyle}>
        <Image source={SplashImage} style={{ width: 200, height: 200 }} />
      </Animated.View>
      <Animated.Text style={[animatedStyle, { marginTop: 20 }]}>
        <Text className="text-3xl font-medium">DABO HEALTY</Text>
      </Animated.Text>
    </View>
  );
}
