import './brand.css'
import { google, slack, atlassian, dropbox, shopify } from './import'
import { motion as m } from "framer-motion"

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

const Brand = () => {
  return (
    <m.div
      variants={list}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
      className='gpt3__brand section__padding'>
      <m.div variants={list}>
        <img src={google} alt='google' />
      </m.div>
      <m.div variants={list}>
        <img src={slack} alt='slack' />

      </m.div>
      <m.div variants={list}>
        <img src={atlassian} alt='atlassian' />

      </m.div>
      <m.div variants={list}>
        <img src={dropbox} alt='dropbox' />

      </m.div>
      <m.div variants={list}>
        <img src={shopify} alt='shopify' />
      </m.div>
    </m.div>
  )
}

export default Brand
