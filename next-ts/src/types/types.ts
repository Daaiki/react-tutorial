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
  postData: {
    slug: string
    contentHtml: string
    title: string
    date: string
  }
}

export type AllPostsData = {
  allPostsData: PostData[]
}

export type Params = {
  params: {
    slug: string
  }
}

export type DateString = {
  dateString: string
}