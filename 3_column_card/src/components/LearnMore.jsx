import React from 'react'

const LearnMore = ({className}) => {
  return (
    <button className={`cursor-pointer bg-(--gray) px-(--space-m) py-(--space-2xs) rounded-full ${className}`}>Learn More</button>
  )
}

export default LearnMore