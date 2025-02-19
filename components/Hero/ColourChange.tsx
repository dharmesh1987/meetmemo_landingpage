"use client"

import React, { useState, useEffect } from 'react'

interface ColorChangingTextProps {
  text: string
  finalColor: string
  delay?: number
}

const ColorChangingText: React.FC<ColorChangingTextProps> = ({ text, finalColor, delay = 500 }) => {
  const [color, setColor] = useState('text-black')

  useEffect(() => {
    const timer = setTimeout(() => {
      setColor(finalColor)
    }, delay)

    return () => clearTimeout(timer)
  }, [finalColor, delay])

  return (
    <span className={` transition-colors duration-300 ${color}`}>
      {text}
    </span>
  )
}

export default ColorChangingText