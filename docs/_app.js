import React from 'react';
import sortBy from 'lodash.sortby';
import { ThemeProvider } from 'styled-components';
import { ScopeProvider } from 'react-scope-provider';
import { SidebarLayout as Layout, scope } from '@compositor/x0/components';
import { MDXProvider } from '@mdx-js/tag'

import * as components from '../src';
import theme from '../src/theme';

const navOrder = [];
const pageNames = { index: 'Introduction' };

const sortRoutes = routes =>
  [
    ...sortBy([...routes], a => {
      const i = navOrder.indexOf(a.name);
      return i < 0 ? Infinity : i;
    })
  ].map(route => {
    if (!pageNames[route.name]) return route;
    return {
      ...route,
      name: pageNames[route.name]
    };
  });

export default class App extends React.Component {
  static defaultProps = {
    title: 'unified design system'
  };

  render() {
    const { routes, route } = this.props;
    const nav = sortRoutes(routes);

    return (
      <MDXProvider components={{...scope, ...components.mdComponents}}>
        <ScopeProvider scope={components}>
          <ThemeProvider theme={theme}>
            <Layout
              {...this.props}
              route={route}
              routes={nav}
              logo={null}
            />
          </ThemeProvider>
        </ScopeProvider>
      </MDXProvider>
    )
  }
}
