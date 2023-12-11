import React from "react";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from "react-native-reanimated";

const HomeAnimation = () => {
  const animateLeft = useSharedValue(-1000);
  const animateOpacity = useSharedValue(0);

  const startAnimation = () => {
    animateLeft.value = withSpring(0, { damping: 10, stiffness: 20 });
    animateOpacity.value = withSpring(1);
  };

  React.useEffect(() => {
    startAnimation();
  }, []);

  const titleStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: animateLeft.value }],
      opacity: animateOpacity.value,
    };
  });

  return { titleStyle };
};

export default HomeAnimation;
