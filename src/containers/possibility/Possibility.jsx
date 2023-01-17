import './possibility.css'
import possibility from "../../assets/possibility.png"
import { motion as m } from 'framer-motion'

const listLeft = {
  hidden: {
    opacity: 0,
    x: -50
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
    }
  }
}

const listRight = {
  hidden: {
    opacity: 0,
    x: 50
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1
    }
  }
}

const Possibility = () => {
  return (
    <div id='possibility' className='gpt3__possibility section__padding'>
      <m.div
        variants={listLeft}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
        className='gpt3__possibility-image'>
        <img src={possibility} alt="possibility" />
      </m.div>
      <m.div
        variants={listRight}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
        className='gpt3__possibility-content'>
        <h4>Request Early Access to Get Started</h4>
        <h1 className='gradient__text'>The possibilities are beyond your imagination</h1>
        <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
        <h4>Request Early Access to Get Started</h4>
      </m.div>
    </div>
  )
}

export default Possibility
