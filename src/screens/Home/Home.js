import { useTheme } from '@react-navigation/native';
import React from 'react';
import { Text, View } from 'react-native';
import { Config } from 'react-native-config';
import { useSelector } from 'react-redux';
import { strings } from '@/localization';
import { getUser } from '@/selectors/UserSelectors';
import { styles } from '@/screens/Home/Home.styles';
import { typography,labelTypes } from '@/theme';
import { TextLabel } from '@/components/TextLabel';

export function Home() {
  const { colors } = useTheme();
  const user = useSelector(getUser);

  return (
    <View style={styles.container}>
      
      <TextLabel text={"Hello world" } type={labelTypes.PARAGRAPH_MEDIUM}/>
    </View>
  );
}
