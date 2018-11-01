import React from 'react'

import {
  Heading,
  Text,
  Code
} from '.'

export default {
  h1: props => <Heading as="h1" mb={3} fontSize={5} {...props} />,
  h2: props => <Heading as="h2" mb={3} fontSize={4} {...props} />,
  h3: props => <Heading as="h3" mb={3} fontSize={3} {...props} />,
  h4: props => <Heading as="h4" mb={3} fontSize={2} {...props} />,
  h5: props => <Heading as="h5" mb={3} fontSize={1} {...props} />,
  h6: props => <Heading as="h6" mb={3} fontSize={1} color="grays.8" {...props} />,
  p: props => <Text mb={3} fontSize={2} {...props} />,

  inlineCode: props => <Code {...props} />
}
