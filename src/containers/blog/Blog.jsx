import './blog.css'
import Article from '../../components/article/Article'
import { blog01, blog02, blog03, blog04, blog05 } from './import'
import { motion as m } from 'framer-motion'


const title = 'GPT-3 and Open  AI is the future. Let us exlore how it is?'
const date = 'Sep 26, 2021'


const list = {
  hidden: {
    opacity: 0,
    y: 50
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1
    }
  }
}

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

const Blog = () => {
  return (
    <div id='blog' className='gpt3__blog section__padding'>
      <m.div
        variants={list}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
        className='gpt3__blog-heading'>
        <h1 className='gradient__text'>A lot is happening,
          We are blogging about it.</h1>
      </m.div>
      <div

        className='gpt3__blog-container'>
        <m.div
          variants={listLeft}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          className='gpt3__blog-container_groupA'>
          <Article imgURL={blog01} title={title} date={date} />
        </m.div>
        <m.div
          variants={listRight}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          className='gpt3__blog-container_groupB'>
          <Article imgURL={blog02} title={title} date={date} />
          <Article imgURL={blog03} title={title} date={date} />
          <Article imgURL={blog04} title={title} date={date} />
          <Article imgURL={blog05} title={title} date={date} />
        </m.div>
      </div>
    </div>
  )
}

export default Blog
