import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import FocusAwareStatusBar from '../components/status-bar/FocusAwareStatusBar';
import globalStyles from '../styles';

function Home() {
  const styles = StyleSheet.create({
    viewContainer: {
      backgroundColor: globalStyles.primaryColor,
      flex: 1,
      justifyContent: 'center',
    },
    textBig: {
      color: globalStyles.textColor,
      fontSize: 40,
      fontWeight: 'bold',
    },
    textSmall: {
      color: globalStyles.textColor,
      fontSize: 15,
      fontWeight: '400',
      marginTop: 10,
    },
    paddingContainer: {
      paddingLeft: globalStyles.mainPadding,
    },
  });

  return (
    <SafeAreaView style={styles.viewContainer}>
      <View style={styles.paddingContainer}>
        <FocusAwareStatusBar barStyle="light-content" />
        <Text style={styles.textBig}>
          Hello,{'\n'}
          John Doe
        </Text>
        <Text style={styles.textSmall}>Let's Do This</Text>
      </View>
    </SafeAreaView>
  );
}

export default Home;
