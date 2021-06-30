import React from 'react'
import { View, Text, StatusBar } from 'react-native'
import { SafeAreaView } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'

import { Example, Scroll, Stagger, First, Second, Flatlist, HorizontalFlat } from './src/screens'

const Stack = createStackNavigator()

const AppStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    {/* <Stack.Screen name='Example' component={Example} options={{ title: 'Awesome app' }} /> */}
    {/* <Stack.Screen name='Scroll' component={Scroll} /> */}
    {/* <Stack.Screen name='Stagger' component={Stagger} /> */}
    {/* <Stack.Screen name='Flatlist' component={Flatlist} /> */}
    <Stack.Screen name='HorizontalFlat' component={HorizontalFlat} />
  </Stack.Navigator>
)

const App = () => {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle='light-content' />
      <NavigationContainer>
        <AppStack />
      </NavigationContainer>
    </SafeAreaProvider>
  )
}

export default App
