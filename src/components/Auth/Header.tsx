import Title from 'components/Title'
import React from 'react'

interface HeaderProps {
  headline: string
  description: string
}

const Header: React.FC<HeaderProps> = ({ headline, description }) => {
  return (
    <div className="dir-rtl flex flex-col gap-5 items-start md:items-center w-full">
      <Title value={headline} />
      <p className="md:text-center text-gray-400">{description}</p>
    </div>
  )
}

export default Header
