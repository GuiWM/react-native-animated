import React, { useRef } from 'react'
import { View, Text, Animated, TouchableOpacity } from 'react-native'

const First = ({ navigation }) => {
  const opacity = useRef(new Animated.Value(1)).current
  const secondOpacity = useRef(new Animated.Value(0)).current

  const goToSecondScreen = () => {
    Animated.timing(opacity, {
      duration: 1500,
      toValue: 0,
      useNativeDriver: false
    }).start()
    // setTimeout(() => {
    //   navigation.push('Second')
    // }, 1000)
    setTimeout(() => {
      navigation.push('Second')
    }, 1500)
  }

  return (
    <Animated.View
      style={{
        flex: 1,
        backgroundColor: 'black',
        // backgroundColor: opacity.interpolate({
        //   inputRange: [0, 1],
        //   outputRange: ['black', 'white']
        // }),
        opacity,
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <TouchableOpacity onPress={() => goToSecondScreen()}>
        <Text style={{ color: 'white' }}>Patrick</Text>
      </TouchableOpacity>
    </Animated.View>
  )
}

export default First
