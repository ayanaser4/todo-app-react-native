import { View, Text } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'


const Completedtask = () => {
  const route = useRoute();
  console.log(route.params);
  return (
    <View>
      <Text>completedtask</Text>
    </View>
  )
}

export default Completedtask;