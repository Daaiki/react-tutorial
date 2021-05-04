export type MatterData = {
  title: string
  date: string
}

export type PostData = {
  slug: string
  title: string
  date: string
}

export type Post = {
  postData: PostData
}

export type AllPostsData = {
  allPostsData: PostData[]
}

export type Params = {
  params: {
    slug: string
  }
}