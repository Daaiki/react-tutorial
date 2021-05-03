import React from 'react'
import Head from 'next/head'

type Props = {
  title?: string
}

const Layout: React.FC<Props> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{(title ? `${title}` : '')}</title>
      </Head>
      {children}
    </>
  )
}

export default Layout