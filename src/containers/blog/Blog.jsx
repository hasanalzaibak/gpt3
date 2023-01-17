import './blog.css'
import Article from '../../components/article/Article'
import { blog01, blog02, blog03, blog04, blog05 } from './import'


const title = 'GPT-3 and Open  AI is the future. Let us exlore how it is?'
const date = 'Sep 26, 2021'

const Blog = () => {
  return (
    <div id='blog' className='gpt3__blog section__padding'>
      <div className='gpt3__blog-heading'>
        <h1 className='gradient__text'>A lot is happening,
          We are blogging about it.</h1>
      </div>
      <div className='gpt3__blog-container'>
        <div className='gpt3__blog-container_groupA'>
          <Article imgURL={blog01} title={title} date={date}/>
        </div>
        <div className='gpt3__blog-container_groupB'>
          <Article imgURL={blog02} title={title} date={date}/>
          <Article imgURL={blog03} title={title} date={date}/>
          <Article imgURL={blog04} title={title} date={date}/>
          <Article imgURL={blog05} title={title} date={date}/>
        </div>
      </div>
    </div>
  )
}

export default Blog
