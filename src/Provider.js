import React, { Fragment } from 'react'
import { ThemeProvider } from 'styled-components'
import { MDXProvider } from '@mdx-js/tag'

import theme from './theme'
import mdComponents from './mdComponents'

export const Provider = ({ children }) => (
  <ThemeProvider theme={theme}>
    <MDXProvider components={mdComponents}>
      <Fragment>
        {children}
      </Fragment>
    </MDXProvider>
  </ThemeProvider>
)

Provider.displayName = 'unified.Provider'
