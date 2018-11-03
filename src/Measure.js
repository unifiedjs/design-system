import styled from 'styled-components'

import {maxWidth, space, width} from 'styled-system'

export const Measure = styled.div`
  ${maxWidth}
  ${space}
  ${width}
`

Measure.displayName = 'unified.Measure'
Measure.defaultProps = {
  maxWidth: 'measure'
}
