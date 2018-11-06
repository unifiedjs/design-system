import React from 'react'

export const ChevronDown = ({size = '64'}) => (
  <svg viewBox="0 0 10 16" height={size} width={size}>
    <path fillRule="evenodd" d="M5 11L0 6l1.5-1.5L5 8.25 8.5 4.5 10 6l-5 5z" />
  </svg>
)

ChevronDown.displayName = 'unified.icons.ChevronDown'
