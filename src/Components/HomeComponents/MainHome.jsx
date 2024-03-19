import React from 'react'
import NavBaar from './NavBaar'
import Header from './Header'
import OurProductsPage from './OurProductsPage'
import Footer from './Footer'
import ContactPage from './ContactPage'
import AboutUs from './AboutUs'
import Services from './Services'





const MainHome = () => {
  return (
    <div>
       
        <NavBaar/>
        <Header/>
        <OurProductsPage/>
        <Services/>
        <ContactPage/>
        <AboutUs/>
        <Footer/>
       
    </div>
  )
}

export default MainHome