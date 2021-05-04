import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

type Props = {
  title?: string
  home?: boolean
}

const Layout: React.FC<Props> = ({ children, title, home }) => {
  return (
    <>
      <Head>
        <title>{(title ? `${title}` : '')}</title>
      </Head>
      <div className="container mx-auto">
        {children}
      </div>
      {!home && (
        <Link href="/">
          <a>Back to Home</a>
        </Link>
      )}
    </>
  )
}

export default Layout