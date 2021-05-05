import { Layout } from '../../components/Layout'
import { Date } from '../../components/date'
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
      <h1 className="font-bold text-4xl mt-5">{postData.title}</h1>
      <br/>
      <div className="text-gray-400">
        <Date dateString={postData.date} />
      </div>
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </Layout>
  )
}

export default PostPage