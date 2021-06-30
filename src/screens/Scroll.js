import React, { useState, useRef, useEffect } from 'react'
import { ScrollView, View, Dimensions, Animated } from 'react-native'

const windowWidth = Dimensions.get('window').width

const Scroll = () => {
  const scrolling = useRef(new Animated.Value(0)).current
  const translation = scrolling.interpolate({
    inputRange: [100, 180],
    outputRange: [-100, 0],
    extrapolate: 'clamp'
  })

  const translationX = scrolling.interpolate({
    inputRange: [170, 220],
    outputRange: [-50, 50]
  })

  const textOpacity = scrolling.interpolate({
    inputRange: [170, 220],
    outputRange: [0, 1],
    extrapolate: 'clamp'
  })

  return (
    <>
      <Animated.View
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: 80,
          backgroundColor: 'tomato',
          justifyContent: 'center',
          transform: [{ translateY: translation }]
        }}
      >
        <Animated.Text
          style={{ marginTop: 24, transform: [{ translateX: translationX }], opacity: textOpacity }}
        >
          Nave.rs
        </Animated.Text>
      </Animated.View>

      <Animated.ScrollView
        onScroll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: {
                  y: scrolling
                }
              }
            }
          ],
          { useNativeDriver: true }
        )}
        // onScroll will be fired every 16ms
        scrollEventThrottle={16}
        style={{ flex: 1 }}
      >
        <View style={{ flex: 1, height: 1000 }} />
      </Animated.ScrollView>
    </>
  )
}

export default Scroll
