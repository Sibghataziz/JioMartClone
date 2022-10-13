import React from 'react'
import Categories from './Categories'
import '../Footer/footer.css'
import Customer from './Customer'
import ContactUs from './ContactUs'

const Footer = () => {
  return (
    <div className='footer'>
        <Categories />
        <Customer/>
        <ContactUs/>
    </div>
  )
}

export default Footer