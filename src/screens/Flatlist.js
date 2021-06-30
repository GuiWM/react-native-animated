import React from 'react'
import { View, Image, Text, StatusBar, StyleSheet, FlatList, Animated } from 'react-native'
import faker from 'faker'
import { useEffect } from 'react/cjs/react.development'

const DATA = [...Array(30).keys()].map((_, i) => {
  return {
    key: faker.datatype.uuid(),
    image: `https://randomuser.me/api/portraits/${faker.helpers.randomize([
      'women',
      'men'
    ])}/${faker.datatype.number(60)}.jpg`,
    name: faker.name.findName(),
    jobTitle: faker.name.jobTitle(),
    email: faker.internet.email()
  }
})

const FlatlistExample = () => {
  const BG_IMG =
    'https://images.pexels.com/photos/8086573/pexels-photo-8086573.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'

  const SPACING = 20
  const AVATAR_SIZE = 70
  const ITEM_SIZE = AVATAR_SIZE + SPACING * 3

  //const AFlatlist = Animated.createAnimatedComponent(FlatList)

  console.log(DATA)

  const scrollY = React.useRef(new Animated.Value(0)).current

  useEffect(() => {
    console.log(scrollY)
  }, [scrollY.value])

  const handleScroll = event => {
    console.log(event.nativeEvent.contentOffset.y)
  }

  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <Image source={{ uri: BG_IMG }} style={StyleSheet.absoluteFillObject} />

      <Animated.FlatList
        data={DATA}
        onScroll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: {
                  y: scrollY
                }
              }
            }
          ],
          {
            useNativeDriver: true
          }
        )}
        yarn
        keyExtractor={item => item.key}
        contentContainerStyle={{ padding: SPACING, paddingTop: StatusBar.currentHeight || 42 }}
        renderItem={({ item, index }) => {
          const scale = scrollY.interpolate({
            inputRange: [ITEM_SIZE * index, ITEM_SIZE * (index + 1)],
            outputRange: [1, 1, 0.8]
          })

          const opacity = scrollY.interpolate({
            inputRange: [-1, ITEM_SIZE * index, ITEM_SIZE * (index + 1)],
            outputRange: [1, 1, 0]
          })

          return (
            <Animated.View
              style={{
                transform: [{ scale }],
                opacity,
                flexDirection: 'row',
                padding: SPACING,
                marginBottom: SPACING,
                borderRadius: 12,
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 10
                },
                shadowOpacity: 0.3,
                shadowRadius: 20
              }}
            >
              <Image
                source={{ uri: item.image }}
                style={{
                  width: AVATAR_SIZE,
                  height: AVATAR_SIZE,
                  borderRadius: AVATAR_SIZE,
                  marginRight: SPACING / 2
                }}
              />

              <View>
                <Text style={{ fontSize: 22, fontWeight: '700' }}>{item.name}</Text>
                <Text stle={{ fontSize: 18, opacity: 0.7 }}>{item.jobTitle}</Text>
                <Text style={{ fontSize: 14, opacity: 0.8, color: '#0099cc' }}>{item.email}</Text>
              </View>
            </Animated.View>
          )
        }}
      ></Animated.FlatList>
    </View>
  )
}

export default FlatlistExample
