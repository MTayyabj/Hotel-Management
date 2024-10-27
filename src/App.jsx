import { useState } from 'react'
import './App.css'
import Navbar from './assets/Components/Navbar/Navbar.jsx'
import Hero from './assets/Components/Hero/Hero.jsx'
import Testimonial from './assets/Components/Testimonials/Testimonial.jsx'
import Title from './assets/Components/Title/Title.jsx'
import About from './assets/Components/About/About.jsx'
import Contact from './assets/Components/Contact/Contact.jsx'

export default function App() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Testimonial/>
    <Contact/>
    </>
  )
}