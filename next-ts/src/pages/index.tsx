import Link from 'next/link'

const IndexPage = () => {
  return (
    <>
      <h1>
        Read <Link href="/posts/first-post"><a>this page</a></Link> 
      </h1>
    </>
  )
}

export default IndexPage