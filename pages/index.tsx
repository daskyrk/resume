import type { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import Content from './content';
import TagManager from 'react-gtm-module';


const Home: NextPage = () => {
  React.useEffect(() => {
    TagManager.initialize({ gtmId: 'GTM-PH53BDH' });
  }, []);

  return (
    <>
      <Head>
        <meta char-set="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <title>李骏 - 简历</title>
        <meta name="keywords" content="李骏,简历,LiJun,daskyrk,resume" />
        <meta name="description" content="李骏的个人简历" />
      </Head>
      <div className="flex justify-center p-8 pr-12 pb-12 min-w-[1280px]">
        <div className="sticky self-start mt-12 items-end text-right" style={{ top: 20 }}>
          <div className='font-bold text-6xl'>
            <h1>Hello</h1>
            <h2 className='text-3xl'>This is my resume</h2>
          </div>
          <a className='inline-flex flex-col w-24 mt-8 items-center py-2 rounded hover:bg-gray-200' href="https://github.com/daskyrk" target="_blank">
            <img src="/svg/icon-github.svg" width="40" height="40" alt="github" />
            <span className='text-sm mt-1'>个人 Github</span>
          </a>
          <a className='inline-flex flex-col w-24 mt-8 items-center py-2 rounded hover:bg-gray-200' href="/lijun-resume.pdf" download>
            <img src="/svg/icon-download.svg" width="40" height="40" alt="download" />
            <span className='text-sm mt-1'>下载 pdf</span>
          </a>
        </div>
        <div className="wrapper ml-12">
          <Content />
        </div>
      </div>
    </>

  )
}

export default Home
