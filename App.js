import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';

export default function App() {
  return (
    // <View style={styles.container}>
    //   <Text>Divine new app</Text>
    //   <StatusBar style="auto" />
    // </View>
    <WebView
        source={{
          uri: 'https://qeloop.pages.dev',
        }}
        style={{marginTop: 30}}
      />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
