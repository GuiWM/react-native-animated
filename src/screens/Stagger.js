import React, { useRef, useEffect } from 'react'
import { Animated, View } from 'react-native'

const Stagger = () => {
  const firstOpacity = useRef(new Animated.Value(0)).current

  const secondOpacity = useRef(new Animated.Value(0)).current

  const thirdOpacity = useRef(new Animated.Value(0)).current

  useEffect(() => {
    Animated.stagger(1000, [
      Animated.timing(firstOpacity, {
        toValue: 1,
        useNativeDriver: true
      }),
      Animated.timing(secondOpacity, {
        toValue: 1,
        useNativeDriver: true
      }),
      Animated.timing(thirdOpacity, {
        toValue: 1,
        useNativeDriver: true
      })
    ]).start()
  }, [])

  return (
    <View
      style={{ flex: 1, backgroundColor: 'black', alignItems: 'center', justifyContent: 'center' }}
    >
      <Animated.View
        style={{
          width: 100,
          height: 100,
          backgroundColor: 'orange',
          marginBottom: 10,
          opacity: firstOpacity
        }}
      />

      <Animated.View
        style={{
          width: 100,
          height: 100,
          backgroundColor: 'orange',
          marginBottom: 10,
          opacity: secondOpacity
        }}
      />

      <Animated.View
        style={{
          width: 100,
          height: 100,
          backgroundColor: 'orange',
          opacity: thirdOpacity
        }}
      />
    </View>
  )
}

export default Stagger
