import React from 'react'
import styled, {css} from 'styled-components'

import {Text} from './Text'
import theme from './theme'
import {wordMap, initialMap, colors} from './names'

const Mark = ({type, name, ...props}) => {
  const map = type === 'initials' ? initialMap : wordMap
  const split = map[name].split('|')

  return (
    <Text as="span" fontWeight="bold" fontSize={null} {...props}>
      <Text as="span" className="head" fontSize={null}>
        {split[0]}
      </Text>
      <Text as="span" className="tail" fontSize={null}>
        {split[1]}
      </Text>
    </Text>
  )
}

export const UniLogo = styled(Mark)`
  .head,
  .tail {
    transition: color 300ms;
  }
  ${props => {
    const main = theme.colors[colors[props.name]]
    const initial = theme.colors.black
    if (props.variant === 'hover') {
      return css`
        :hover {
          .head {
            color: ${main};
          }
          .tail {
            color: ${initial};
          }
        }
      `
    }

    return css`
      .head {
        color: ${main};
      }
      .tail {
        color: ${initial};
      }
    `
  }};
`

UniLogo.displayName = 'unified.UniLogo'
