import React from 'react'
import '../Footer/Footer.css'
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="Footer">
      <p>Copyright &copy; {year}</p>
      <p>&#123; Coded by Ankur M Vasani &#125;</p>
    </div>
  )
}

export default Footer