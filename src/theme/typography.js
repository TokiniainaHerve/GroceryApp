import { StyleSheet } from 'react-native';

export const typography = StyleSheet.create({
  title_bold: {
    fontSize: 30,
    fontFamily:"Poppins-Semibold",
  },
  paragraph_regular: {
    fontSize: 16,
    fontFamily:"Poppins-Regular", 
  },
  paragraph_medium: {
    fontSize: 16,
    fontFamily:"Poppins-Medium",
  },
  label: {
    fontSize: 14,
    fontFamily:"Poppins-Medium",
  },
  error: {
    fontSize: 14,
  },
});

export const labelTypes = {
  TITLE_BOLD: 'title_bold',
  PARAGRAPH_MEDIUM: 'paragraph_medium',
  PARAGRAPH_REGULAR: 'paragraph_regular',
  LABEL:'label',
  error:'error'
};
