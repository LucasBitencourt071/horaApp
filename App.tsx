import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import CurrentTime from './horaAtual';

const App: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <CurrentTime />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
