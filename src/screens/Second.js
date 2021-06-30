import React, { useRef, useEffect } from 'react'
import { View, Text, Animated, Image } from 'react-native'

import patrick from 'src/assets/patrick.png'

const Second = () => {
  const opacity = useRef(new Animated.Value(0)).current
  useEffect(() => {
    Animated.timing(opacity, {
      duration: 1500,
      toValue: 1,
      useNativeDriver: true
    }).start()
  }, [])

  return (
    <Animated.View
      style={{
        flex: 1,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
        opacity
      }}
    >
      <Image source={patrick} style={{ width: 200, height: 200 }} />
    </Animated.View>
  )
}

export default Second
