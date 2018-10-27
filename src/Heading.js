import styled from 'styled-components';

import {
  color,
  fontFamily,
  fontSize,
  fontWeight,
  lineHeight,
  space,
  textAlign
} from 'styled-system';

export const Heading = styled.h3`
  ${color}
  ${fontFamily}
  ${fontSize}
  ${fontWeight}
  ${lineHeight}
  ${space}
  ${textAlign}
`;

Heading.displayName = 'unified.Heading';
Heading.defaultProps = {
  m: 0,
  fontFamily: 'sans',
  fontSize: 3,
  fontWeight: 'bold',
  lineHeight: 'title',
};
