import React from 'react'
import Head from 'next/head'

import Nav from './Nav'
import Footer from './Footer'
// import Breadcrumbs from './Breadcrumbs'

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Boshamlan</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="preload"
          href="fonts/DroidKufi.woff"
          as="font"
          crossOrigin=""
        />
      </Head>
      <Nav />
      <div className="h-20 md:h-24" />
      {/* <Breadcrumbs /> */}
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
