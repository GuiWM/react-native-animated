import React, { useEffect, useState, useRef } from 'react'
import { View, Image, Animated, Easing } from 'react-native'

import spongeBob from 'src/assets/spongeBob.png'

const Example = () => {
  const translationX = useRef(new Animated.Value(0)).current
  const translationY = useRef(new Animated.Value(0)).current

  useEffect(() => {
    Animated.loop(
      Animated.parallel([
        Animated.timing(translationX, {
          toValue: 200,
          duration: 2000
        }),
        Animated.timing(translationY, {
          toValue: 600,
          duration: 2000
        })
      ])
    ).start()
  }, [])

  return (
    <Animated.View
      flex={1}
      style={{
        backgroundColor: translationY.interpolate({
          inputRange: [0, 600],
          outputRange: ['red', 'blue']
        })
      }}
    >
      <Animated.Image
        source={spongeBob}
        resizeMode='contain'
        style={{
          width: 200,
          height: 200,
          marginTop: 32,
          transform: [
            { translateX: translationX },
            { translateY: translationY },
            {
              rotate: translationY.interpolate({
                inputRange: [0, 600],
                outputRange: ['0deg', '720deg']
              })
            }
          ]
        }}
      />
    </Animated.View>
  )
}

export default Example
