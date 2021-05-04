import Layout from '../components/Layout'
import { getSortedPostsData } from '../lib/posts'
import { AllPostsData } from '../types/types'

export const getStaticProps = async () => {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
} 

const IndexPage = ({ allPostsData }: AllPostsData) => {
  return (
    <Layout title="Create React App" home>
      <section>
        <h1 className="text-4xl mb-5">Blog</h1>
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
      </section>
    </Layout>
  )
}

export default IndexPage