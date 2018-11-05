import styled from 'styled-components'
import {borderColor} from 'styled-system'
import {Text} from './Text'

export const Blockquote = styled(Text)`
  border-left: 4px solid;

  ${borderColor}
`

Blockquote.displayName = 'unified.Blockquote'
Blockquote.defaultProps = {
  as: 'blockquote',
  borderColor: 'grays.2',
  color: 'grays.8',
  pl: 3,
  py: 3,
  fontSize: 3
}