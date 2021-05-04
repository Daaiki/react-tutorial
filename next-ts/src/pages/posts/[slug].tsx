import Layout from '../../components/Layout'
import { getAllPostIds } from '../../lib/posts'
import { getPostData } from '../../lib/posts'
import { Params } from '../../types/types'
import { Post } from '../../types/types'

export const getStaticPaths = async () => {
  const paths = getAllPostIds()
  return {
    paths,
    // return 404 when the page cannot be found
    fallback: false
  }
}

export const getStaticProps = ({ params }: Params) => {
  console.log({params});
  
  const postData = getPostData(params.slug)
  return {
    props: {
      postData
    }
  }
}

const PostPage = ({ postData }: Post) => {  
  return (
    <Layout title={`${postData.title}`}>
      <h1>{postData.title}</h1>
      <br/>
      <small>{postData.slug}</small>
      <br/>
      {postData.date}
    </Layout>
  )
}

export default PostPage