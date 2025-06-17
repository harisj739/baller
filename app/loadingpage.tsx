import { Image } from 'expo-image';
import { useEffect, useRef } from 'react';
import { Animated, Easing, StyleSheet, View } from 'react-native';

const LoadingPage: React.FC = () => {
    // Use useRef to maintain the animated value across renders
    const spinValue = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        // Create the animation
        const spinAnimation = Animated.loop(
            Animated.timing(spinValue, {
                toValue: 1,
                duration: 2000,
                easing: Easing.linear,
                useNativeDriver: true,
            })
        );
        
        // Start the animation
        spinAnimation.start();

        // Cleanup on unmount
        return () => spinAnimation.stop();
    }, []);

    const spin = spinValue.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg']
    });

    return (
        <View style={styles.container}>
            <Animated.View style={{ transform: [{ rotate: spin }] }}>
                <Image 
                    source={require('../assets/images/baller.jpg')}
                    style={styles.image}
                    contentFit="contain"
                />
            </Animated.View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 50,
    }
});

export default LoadingPage;
