import { useTheme } from '@react-navigation/native';
import React from 'react';
import { Text} from 'react-native';
import { typography,labelTypes } from '@/theme';

export function TextLabel({style,text, type, ...rest}) {
  const { colors } = useTheme();
  return (
      <>
        {type == labelTypes.TITLE_BOLD &&
          <Text style={[typography.title_bold, { color: colors.text },style]}>
            {text}
          </Text>
        }
        {type == labelTypes.PARAGRAPH_MEDIUM &&
          <Text style={[typography.paragraph_medium, { color: colors.text },style]}>
            {text}
          </Text>
        }
        {type == labelTypes.PARAGRAPH_REGULAR &&
          <Text style={[typography.paragraph_regular, { color: colors.text },style]}>
            {text}
          </Text>
        }
        {type == labelTypes.LABEL &&
          <Text style={[typography.label, { color: colors.text_secondary },style]}>
            {text}
          </Text>
        }
      </>
    
  );
}
TextLabel.defaultProps = {
  type: labelTypes.LABEL,
};
