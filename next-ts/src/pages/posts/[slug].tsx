import Layout from '../../components/Layout'
import { getAllPostIds, getPostData } from '../../lib/posts'
import { Params, Post } from '../../types/types'

export const getStaticPaths = async () => {
  const paths = getAllPostIds()
  return {
    paths,
    // return 404 when the page cannot be found
    fallback: false
  }
}

export const getStaticProps = async ({ params }: Params) => {
  const postData = await getPostData(params.slug)
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
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </Layout>
  )
}

export default PostPage