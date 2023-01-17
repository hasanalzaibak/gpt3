import './features.css'
import Feature from '../../components/feature/Feature'
import { motion as m } from "framer-motion"

const featuresData = [
  {
    title: 'Improving end distrusts instantly',
    text: 'From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.'
  },
  {
    title: 'Become the tended active',
    text: 'Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.'
  },
  {
    title: 'Message or am nothing',
    text: 'Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address.'
  },
  {
    title: 'Really boy law county',
    text: 'Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush.'
  }
]

const featuresMap = featuresData.map((data, index) => {
  return <Feature id={index} title={data.title} text={data.text} />
})

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

const Features = () => {
  return (
    <div className='gpt3__features section__padding' id='features'>
      <m.div
        variants={listLeft}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, margin:'-200px' }}
        className='gpt3__features-heading'>
        <h1 className='gradient__text'>The Future is Now and You Just Need To Realize It. Step into Future Today & Make it Happen.</h1>
        <p>Request Early Access to Get Started</p>
      </m.div>
      <m.div
        variants={listRight}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, margin:'-200px' }}
        className='gpt3__features-container'>
        {featuresMap}
      </m.div>
    </div>
  )
}

export default Features
