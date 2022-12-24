import {  render} from '@testing-library/react-native';
import React from 'react';
import {Button} from './Button'
describe('Button', () => {
    it('should match the snapshot', () => {
      const { toJSON } = render(<Button title={"test button"}/>);
      expect(toJSON()).toMatchSnapshot();
    });
  
 
});