import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ApplicationProvider, Layout,Button, Text } from '@ui-kitten/components';
import { mapping, light as lightTheme } from '@eva-design/eva';
export default function App() {
  return (
      <ApplicationProvider mapping={mapping} theme={lightTheme}>
      <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text category='h1'>HOME</Text>
        <Button style={{borderRadius:50}} status='primary'>PRIMARY</Button>
      </Layout>
      </ApplicationProvider>
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
