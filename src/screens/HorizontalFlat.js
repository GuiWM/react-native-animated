import React, { useRef } from 'react'
import { View, FlatList, StyleSheet, useWindowDimensions, Dimensions, Animated } from 'react-native'

const { width, height } = Dimensions.get('window')

const DATA = [...Array(30).keys()]
const NEW_DATA = [{ ghost: true }, ...DATA, { ghost: true }]
const ITEM_SIZE = width * 0.5 + 10
const EMPTY_ITEM_SIZE = (width - ITEM_SIZE) / 2

const HorizontalFlat = () => {
  const scrollX = useRef(new Animated.Value(0)).current

  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        data={NEW_DATA}
        bounces={false}
        decelerationRate={0}
        snapToAlignment='start'
        renderToHardwareTextureAndroid
        contentContainerStyle={{ alignItems: 'center' }}
        snapToInterval={ITEM_SIZE}
        scrollEventThrottle={16}
        renderItem={({ item, index }) => {
          const translateY = scrollX.interpolate({
            inputRange: [(index - 2) * ITEM_SIZE, (index - 1) * ITEM_SIZE, index * ITEM_SIZE],
            outputRange: [0, -50, 0],
            extrapolate: 'clamp'
          })

          if (item.ghost) {
            return <View style={{ width: EMPTY_ITEM_SIZE, backgroundColor: 'black', height: 20 }} />
          }

          return <Animated.View style={{ ...styles.card, transform: [{ translateY }] }} />
        }}
        onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
          useNativeDriver: false
        })}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  card: {
    width: 0.5 * width,
    height: 300,
    backgroundColor: 'tomato',
    marginLeft: 10,
    borderRadius: 10
  }
})

export default HorizontalFlat
