import { SafeAreaView, StatusBar, StyleSheet } from 'react-native'
import Router from './Router'

export default function App () {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar translucent backgroundColor='transparent' />
      <Router />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
