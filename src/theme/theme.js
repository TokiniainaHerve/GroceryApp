import { DarkTheme, DefaultTheme } from '@react-navigation/native';

export const theme = {
  light: {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: '#AEDC81',
      primary_dark: '#6CC51D',
      primary_light:"#EBFFD7",
      link:"#407EC7",
      error: '#D32F2F',
      text: '#202124',
      text_secondary:'#868889',
      background:"#FFFFFF",
      background_secondary:"#F4F5F9",
      background_tertiary:"#F5F5F5",
      border: '#EBEBEB',
      activeTab: '#1976D2',
      inactiveTab: '#757575',
    },
  },
  dark: {
    ...DarkTheme,
    colors: {
      ...DarkTheme.colors,
      primary: '#AEDC81',
      primary_dark: '#6CC51D',
      primary_light:"#EBFFD7",
      link:"#407EC7",
      error: '#D32F2F',
      text: '#202124',
      text_secondary:'#868889',
      background:"#FFFFFF",
      background_secondary:"#F4F5F9",
      background_tertiary:"#F5F5F5",
      border:"#EBEBEB",
      activeTab: '#4FC3F7',
      inactiveTab: '#FFFFFF',
    },
  },
};
