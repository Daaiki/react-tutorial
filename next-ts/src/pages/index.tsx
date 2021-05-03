import Link from 'next/link'
import Head from 'next/head'

const IndexPage = () => {
  return (
    <>
      <Head>
        <title>Create React App</title>
      </Head>
      <h1>
        Read <Link href="/posts/first-post"><a>this page</a></Link> 
      </h1>
    </>
  )
}

export default IndexPage