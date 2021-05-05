import Link from 'next/link'
import { Date } from '../components/date'
import { Layout } from '../components/Layout'
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
          {allPostsData.map(({ slug, date, title }) => (
            <li key={slug}>
              <Link href={`/posts/${slug}`}>
                <a>
                  {title}
                </a>
              </Link>
              <br/>
              <small className="text-gray-400">
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

export default IndexPage