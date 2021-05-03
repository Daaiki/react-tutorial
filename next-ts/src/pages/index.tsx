import Link from 'next/link'
import Layout from '../components/Layout'

const IndexPage = () => {
  return (
    <Layout title="Create React App">
      <h1>
        Read <Link href="/posts/first-post"><a>this page</a></Link> 
      </h1>
    </Layout>
  )
}

export default IndexPage