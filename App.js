import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, View, Text, ActivityIndicator } from 'react-native';

import { ThemeProvider } from '@rneui/themed';
import { mainTheme } from './themes/mainTheme';
import { useFonts } from 'expo-font';

import HomeScreen from './screens/HomeScreen';
import QuestionScreen from './screens/QuestionScreen';
import ResultScreen from './screens/ResultScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  let [fontsLoaded] = useFonts({
    'OpenSans-SemiBold': require('./assets/fonts/OpenSans-SemiBold.ttf'),
    'Inter-Bold': require('./assets/fonts/Inter-Bold.ttf'),
    'Inter-Black': require('./assets/fonts/Inter-Black.ttf'),
    'Krona-One': require('./assets/fonts/KronaOne-Regular.ttf'),
  })

  if (!fontsLoaded) {
    return (
      <View style={styles.loader}>
        <Text>Loading...</Text>
        <ActivityIndicator size='large' color='#737373' />
      </View>
    )
  }
  return (
    <ThemeProvider theme={mainTheme}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName='Home'
          screenOptions={{
            animation: 'none',
          }}
        >
          <Stack.Screen
            name='Home'
            component={HomeScreen}
          />

          <Stack.Screen
            name='Question'
            component={QuestionScreen}
            options={{
              title: 'Quiz'
            }}
          />

          <Stack.Screen
            name='Result'
            component={ResultScreen}
            options={{
              title: 'Results'
            }}
          />

        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  loader: {
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  }
})
