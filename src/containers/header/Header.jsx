import './header.css'
import people from '../../assets/people.png'
import ai from '../../assets/ai.png'
import { motion as m } from "framer-motion"

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

const listTitle = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 1,
      delay: 1
    }
  }
}


const Header = () => {
  return (
    <div className='gpt3__header section__padding' id='home'>
      <m.div
        variants={listLeft}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
        className='gpt3__header-content'>
        <m.h1
          variants={listTitle}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          className='gradient__text'>
          Let's Build Something Amazing With GPT-3 OpenAI
        </m.h1>
        <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
        <div className='gpt3__header-content__input'>
          <input type='email' placeholder='Your Email Address' />
          <button type='button' >Get Started</button>
        </div>
        <div className='gpt3__header-content__people'>
          <img src={people} alt='people' />
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>

      </m.div>
      <m.div
        variants={listRight}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
        className='gpt3__header-image'>
        <img src={ai} alt='ai' />
      </m.div>
    </div>
  )
}

export default Header
