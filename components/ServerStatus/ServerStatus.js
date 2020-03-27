import React, { Component } from 'react';

import { Text, StyleSheet, View } from 'react-native';

class ServerStatus extends Component {
  constructor() {
    super();
  }

  render() {
    const { statusTitle, serverStatus, status } = this.props;
    return (
      <View style={styles.wrapper}>
        <Text
          style={status === 'offline' ? styles.statusBarTitleOffline : styles.statusBarTitleOnline}
        >
          {statusTitle}
        </Text>
        <View style={styles.statusBarWrapper}>
          <View style={status === 'offline' ? styles.statusBarRed : styles.statusBarGreen}></View>
        </View>
        <View style={styles.serverStatus}>
          <Text style={status === 'offline' ? styles.timestamp : styles.ping}>{serverStatus}</Text>
        </View>
      </View>
    );
  }
}

export default ServerStatus;

const styles = StyleSheet.create({
  wrapper: { paddingTop: 50 },
  statusBarTitleOffline: {
    fontSize: 14,
    fontWeight: '700',
    letterSpacing: 1.25,
    textAlign: 'center',
    textTransform: 'uppercase',
    color: '#d00721',
    paddingBottom: 10
  },
  statusBarTitleOnline: {
    fontSize: 14,
    fontWeight: '700',
    letterSpacing: 1.25,
    textAlign: 'center',
    textTransform: 'uppercase',
    color: 'white',
    paddingBottom: 10
  },
  statusBarWrapper: { display: 'flex', alignItems: 'center' },

  statusBarRed: {
    borderWidth: 2,
    borderColor: '#630716',
    borderRadius: 3,
    height: 15,
    width: 60,
    backgroundColor: '#D0021B'
  },
  statusBarGreen: {
    borderWidth: 2,
    borderColor: '#494f1b',
    borderRadius: 3,
    height: 15,
    width: 60,
    backgroundColor: '#7ED321'
  },
  ping: { color: 'white', paddingTop: 50 },
  timestamp: {
    color: 'white',
    paddingTop: 50
  },
  serverStatus: {
    display: 'flex',
    alignItems: 'center'
  }
});
