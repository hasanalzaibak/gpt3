import './cta.css'
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

const Cta = () => {
  return (
    <m.div
      variants={list}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, margin:'-200px' }}
      className='gpt3__cta'>
      <div className='gpt3__cta-content'>
        <p>Request Early Access to Get Started</p>
        <h3>Register today & start exploring the endless possiblities.</h3>
      </div>
      <div className='gpt3__cta-btn'>
        <button type="button">Get Started</button>
      </div>
    </m.div>
  )
}

export default Cta
