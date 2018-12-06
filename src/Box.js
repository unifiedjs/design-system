import styled from '@emotion/styled'

import {
  alignSelf,
  borderColor,
  borderStyle,
  borderWidth,
  boxShadow,
  color,
  flex,
  order,
  space,
  textAlign,
  width
} from 'styled-system'

export const Box = styled.div`
  box-sizing: border-box;

  ${alignSelf}
  ${borderColor}
  ${borderStyle}
  ${borderWidth}
  ${boxShadow}
  ${color}
  ${flex}
  ${order}
  ${space}
  ${textAlign}
  ${width}
`

Box.displayName = 'unified.Box'
