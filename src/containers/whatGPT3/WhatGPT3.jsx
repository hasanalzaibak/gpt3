import './whatGPT3.css'
import Feature from '../../components/feature/Feature'
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
      staggerChildren: 1
    }
  }
}

const WhatGPT3 = () => {
  return (
    <m.div
      variants={list}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
      className='gpt3__whatgpt3 section__margin' id='wgpt3'>
      <m.div variants={list} className='gpt3__whatgpt3-feature'>
        <Feature title={'What is GPT-3'} text={'We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by.'} />
      </m.div>
      <m.div variants={list} className='gpt3__whatgpt3-heading'>
        <h1 className='gradient__text'>The possibilities are beyond your imagination</h1>
        <p>Explore The Library</p>
      </m.div>
      <m.div variants={list} className='gpt3__whatgpt3-container' >
        <Feature title={'Chatbots'} text={'We so opinion friends me message as delight. Whole front do of plate heard oh ought.'} />
        <Feature title={'Knowledgebase'} text={'At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b'} />
        <Feature title={'Education'} text={'At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b'} />
      </m.div>
    </m.div>
  )
}

export default WhatGPT3;
