import React from 'react'

export const ChevronUp = ({size = '64'}) => (
  <svg viewBox="0 0 10 16" height={size} width={size}>
    <path
      fillRule="evenodd"
      d="M10 10l-1.5 1.5L5 7.75 1.5 11.5 0 10l5-5 5 5z"
    />
  </svg>
)

ChevronUp.displayName = 'unified.icons.ChevronUp'
