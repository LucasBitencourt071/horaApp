import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';

const CurrentTime: React.FC = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formattedTime = `${currentTime.getHours()}:${String(currentTime.getMinutes()).padStart(2, '0')}:${String(currentTime.getSeconds()).padStart(2, '0')}`;

  return (
    <View style={styles.container}>
      <Text style={styles.timeText}>{formattedTime}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 500,
    height: 460,
    margin: 250,
    backgroundColor: '#438bc8',
    borderRadius: 20,
    overflow: 'hidden',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

  },
  timeText: {
    fontSize: 48,
    fontWeight: 'bold',
    color: 'white', 
  },
});

export default CurrentTime;
