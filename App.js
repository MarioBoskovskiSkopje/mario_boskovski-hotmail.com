import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ServerStatus from './components/ServerStatus/ServerStatus';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.serverOffline}>
        <ServerStatus
          statusTitle={'📦 Server Offline'}
          serverStatus={'Updated: 08 Mar 21:19'}
          status="offline"
        />
      </View>
      <View style={styles.serverOnline}>
        <ServerStatus
          statusTitle={'📱 Server Online'}
          serverStatus={'200 – 129ms'}
          status="online"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#081b2b',
    alignItems: 'center',
    justifyContent: 'center'
  },
  serverOffline: {
    marginBottom: 20,
    borderWidth: 3,
    borderColor: '#05121D',
    height: 200,
    width: 300,
    borderRadius: 7,
    backgroundColor: '#061521'
  },
  serverOnline: {
    borderWidth: 3,
    borderColor: '#05121D',
    height: 200,
    width: 300,
    borderRadius: 7,
    backgroundColor: '#061521'
  }
});
