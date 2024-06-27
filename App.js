import React from 'react'
import ProductDetail from './src/screens/ProductDetail'
import { StatusBar } from 'react-native'

const App = () => {
  return (
    <>
      <StatusBar backgroundColor={"white"} barStyle={"dark-content"} />
      <ProductDetail />
    </>

  )
}

export default App