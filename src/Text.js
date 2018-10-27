import styled from 'styled-components';

import {
  borderRadius,
  color,
  fontFamily,
  fontSize,
  fontWeight,
  lineHeight,
  space
} from 'styled-system';

export const Text = styled.p`
  ${color}
  ${fontFamily}
  ${fontSize}
  ${fontWeight}
  ${lineHeight}
  ${space}
`;

Text.displayName = 'unified.Text';
Text.defaultProps = {
  m: 0,
  fontFamily: 'sans',
  fontSize: 3,
  lineHeight: 'copy',
};

export const Code = styled(Text)`
  ${borderRadius}
`

Code.displayName = 'unified.Code'
Code.defaultProps = {
  as: 'code',
  fontFamily: 'mono',
  borderRadius: 4,
  bg: 'grays.1',
  color: 'grays.9',
  px: 2
}
