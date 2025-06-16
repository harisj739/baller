import { Image } from 'expo-image';
import { useEffect } from 'react';
import { Animated, Easing, StyleSheet, View } from 'react-native';

const LoadingPage = () => {
    console.log('LoadingPage rendered'); // Add debug log
    const spinValue = new Animated.Value(0);

    useEffect(() => {
        console.log('Animation started'); // Add debug log
        Animated.loop(
            Animated.timing(spinValue, {
                toValue: 1,
                duration: 2000,
                easing: Easing.linear,
                useNativeDriver: true,
            })
        ).start();
    }, []);

    const spin = spinValue.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg']
    });

    return (
        <View style={styles.container}>
            <Animated.View style={{ transform: [{ rotate: spin }] }}>
                <Image 
                    source={require('../assets/images/baller.jpg')} // Fix path
                    style={styles.image}
                    contentFit="contain"
                />
            </Animated.View>
        </View>
    );

    // Test this replacement in the return statement
    // return (
    //     <View style={styles.container}>
    //         <Animated.View style={{ transform: [{ rotate: spin }] }}>
    //             <View style={[styles.image, { backgroundColor: 'blue' }]} />
    //         </Animated.View>
    //   </View>
    // );
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
