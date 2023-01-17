import './footer.css'
import gpt3Logo from "../../assets/logo.svg"
import { motion as m } from 'framer-motion'

const list = {
  hidden: {
    opacity: 0,
    y: 50
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.5
    }
  }
}

const Footer = () => {
  return (
    <m.div
      variants={list}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, margin:'-200px' }}
      className='gpt3__footer section__padding'>
      <m.div
        variants={list}
        className='gpt3__footer-heading'>
        <h1 className='gradient__text'>Do you want to step in to the future before others</h1>
      </m.div>
      <m.div
        variants={list}
        className='gpt3__footer-btn'>
        <p>Request Early Access</p>
      </m.div>

      <div className='gpt3__footer-links'>
        <m.div
          variants={list}
          className='gpt3__footer-links_logo'>
          <img src={gpt3Logo} alt='logo' />
        </m.div>
        <m.div
          variants={list}
          className='gpt3__footer-links_div'>
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
        </m.div>
        <m.div
          variants={list}
          className='gpt3__footer-links_div'>
          <h4>Company</h4>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </m.div>
        <m.div
          variants={list}
          className='gpt3__footer-links_div'>
          <h4>Get in touch</h4>
          <p>Crechterwoord K12 182 DK Alknjkcb</p>
          <p>085-132567</p>
          <p>info@payme.net</p>
        </m.div>
      </div>

      <div
        className='gpt3__footer-copyright'>
        <p>© 2023 GPT-3. All rights reserved.</p>
      </div>
    </m.div>
  )
}

export default Footer
