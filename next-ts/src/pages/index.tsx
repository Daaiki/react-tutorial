import Link from 'next/link'
import Layout from '../components/Layout'
import { getSortedPostsData } from '../lib/posts'
import { Posts } from '../types/types'

export const getStaticProps = async () => {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
} 

const IndexPage = ({ allPostsData }: Posts) => {
  return (
    <Layout title="Create React App" home>
      <h1 className="text-4xl">
        Read <Link href="/posts/first-post"><a>this page</a></Link> 
      </h1>
      <ul>
        {allPostsData.map(({ id, date, title }) => (
          <li key={id}>
            {title}
            <br/>
            {id}
            <br/>
            {date}
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export default IndexPage