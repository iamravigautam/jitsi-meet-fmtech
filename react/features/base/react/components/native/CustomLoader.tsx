import React, { useEffect, useRef } from 'react';
import { View, Animated, StyleSheet, Easing, Text, Platform } from 'react-native';
import TintedView from './TintedView';

const CustomLoader = () => {
    const rotateValue = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        rotateValue.setValue(0); // Reset value to 0
        Animated.loop(
            Animated.timing(rotateValue, {
                toValue: 1,
                duration: 1000, // Animation duration in milliseconds
                easing: Easing.linear,
                useNativeDriver: false, // Can try with false as well
            })
        ).start();
    }, []);

    const rotateAnimation = rotateValue.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg'],
    });

    return (
        // <View style={styles.container}>
        <TintedView>
             <Animated.View style={[styles.loader, { transform: [{ rotate: rotateAnimation }] }]} />
        </TintedView>
           
             
       
        // </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0)'
    },
    loader: {
        width: 50,
        height: 50,
        borderWidth:  1,
        borderRadius: 25,
        borderColor: '#d3d3d3',
        borderTopColor: '#fff',
        borderTopWidth:3
    },
});

export default CustomLoader;


// import React, { useEffect, useRef } from 'react';
// import { View, Animated, StyleSheet, Easing } from 'react-native';

// const CustomLoader = () => {
//     const rotateValue = useRef(new Animated.Value(0)).current;

//     useEffect(() => {
//         const startRotation = () => {
//             rotateValue.setValue(0); // Reset the rotation value
//             Animated.loop(
//                 Animated.timing(rotateValue, {
//                     toValue: 1,
//                     duration: 1000, // Animation duration in milliseconds
//                     easing: Easing.linear,
//                     useNativeDriver: true, // Use native driver for smoother performance
//                 })
//             ).start();
//         };

//         startRotation();
//     }, [rotateValue]);

//     const rotateAnimation = rotateValue.interpolate({
//         inputRange: [0, 1],
//         outputRange: ['0deg', '360deg'], // Rotate from 0 to 360 degrees
//     });

//     return (
//         <View style={styles.container}>
//             <Animated.View style={[styles.loader, { transform: [{ rotate: rotateAnimation }] }]} />
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: '#FFC4',
//     },
//     loader: {
//         width: 50,
//         height: 50,
//         borderWidth: 5,
//         borderRadius: 25,
//         borderColor: '#ef567d',
//         borderTopColor: '#3498db',
//     },
// });

// export default CustomLoader;

