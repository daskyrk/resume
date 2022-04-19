import Link from 'next/link'
import React from 'react'
import resume from '../resume'


// convert [text](url) to <a href="url">text</a>, [text] to <b>text</b>
const anchorReg = /\[[^\]]+](\(([^\)]+)\))?/g;
const ParseMark = (str: string) => {
  let copyStr = str;
  const matchList = copyStr.match(anchorReg);
  if (!matchList) {
    return copyStr;
  }
  const contentList: any[] = [];
  let after = copyStr;
  (matchList || []).forEach((m) => {
    // eg: [text](url) or [text]
    const [text, url] = m.includes('(') ? m.slice(1, -1).split('](') : [m.slice(1, -1)];
    const [before] = after.split(m);
    after = after.slice(before.length + m.length);
    contentList.push(before);
    if (url) {
      contentList.push(<Link key={text} href={url}><a className='underline text-blue-800' target="_blank" rel="noopener noreferrer">{text}</a></Link>);
    } else {
      contentList.push(<span key={text} className='font-bold'>{text}</span>)
    }
  });
  return contentList.concat([after]);
}


const iconWrap = (size: number, children: JSX.Element) => <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">{children}</svg>
const iconMap = {
  address: iconWrap(20, <><rect width="48" height="48" fill="white" fill-opacity="0.01" /><path d="M24 44C24 44 39 32 39 19C39 10.7157 32.2843 4 24 4C15.7157 4 9 10.7157 9 19C9 32 24 44 24 44Z" fill="none" stroke="#333" stroke-width="4" stroke-linejoin="miter" /><path d="M24 25C27.3137 25 30 22.3137 30 19C30 15.6863 27.3137 13 24 13C20.6863 13 18 15.6863 18 19C18 22.3137 20.6863 25 24 25Z" fill="none" stroke="#333" stroke-width="4" stroke-linejoin="miter" /></>),
  email: iconWrap(20, <><rect width="48" height="48" fill="white" fill-opacity="0.01" /><path d="M4 39H44V24V9H24H4V24V39Z" fill="none" stroke="#333" stroke-width="4" stroke-linejoin="miter" /><path d="M4 9L24 24L44 9" stroke="#333" stroke-width="4" stroke-linecap="square" stroke-linejoin="miter" /><path d="M24 9H4V24" stroke="#333" stroke-width="4" stroke-linecap="square" stroke-linejoin="miter" /><path d="M44 24V9H24" stroke="#333" stroke-width="4" stroke-linecap="square" stroke-linejoin="miter" /></>),
  phone: iconWrap(20, <><rect width="48" height="48" fill="white" fill-opacity="0.01" /><rect width="48" height="48" fill="white" fill-opacity="0.01" /><path d="M8 30H40V42C40 43.1046 39.1046 44 38 44H10C8.89543 44 8 43.1046 8 42V30Z" fill="none" stroke="#333" stroke-width="4" stroke-linejoin="miter" /><path d="M40 30V6C40 4.89543 39.1046 4 38 4H10C8.89543 4 8 4.89543 8 6V30" stroke="#333" stroke-width="4" stroke-linejoin="miter" /><path d="M22 37H26" stroke="#333" stroke-width="4" stroke-linecap="square" /></>)
}
const Icon = ({ type, size = 20 }: { type: keyof typeof iconMap, size?: number }) => {
  // return iconMap[type]
  return <img src={`/svg/icon-${type}.svg`} width={size} height={size} alt={type} />
    ;
}

const Block = ({ title, children, className }: { title: string, children: JSX.Element, className?: string }) => {
  return (
    <section className={className || ''}>
      <div className="text-2xl font-bold pb-2 mb-2 border-b border-blue-800 border-opacity-20">{title}</div>
      {children}
    </section>
  )
}

const Companies = () => {
  return (
    <>
      {resume.companies.map(({ start, end, title, name, address, content }, index) => (
        <div key={name} className="mb-8">
          <p className="text-lg font-bold">{title}</p>
          <p className='flex mb-2 text-sm text-gray-600'>
            <span className="inline-block w-40 font-bold">{start} - {end}</span>
            <span>{name} · {address}</span>
          </p>
          {
            content.split('\n').map((a: string, index: number) => {
              if (!a.length) return null;
              if (a.startsWith('*')) {
                return (
                  <ul key={index} className="list-inside list-disc mb-2">
                    <li className="text-sm">{ParseMark(a.replace(/^\*\s*/, ''))}</li>
                  </ul>
                )
              }
              return (
                <div key={index} className="mt-4 mb-2">{ParseMark(a)}</div>
              );
            })
          }
        </div>
      ))}
    </>
  )
}

const Projects = () => {
  return (
    <>
      {resume.projects.map(({ name, content, start, end }, index) => (
        <div key={name} className="mb-8">
          <p className="text-lg font-bold">{ParseMark(name)}</p>
          <div className='text-sm text-gray-600'>
            <span className="font-bold mr-4">{start} - {end}</span>
            {
              content.split('\n').map((a: string, index: number) => {
                if (!a.length) return null;
                if (a.startsWith('*')) {
                  return (
                    <ul key={index} className="list-inside list-disc mb-2">
                      <li className="text-sm">{ParseMark(a.replace(/^\*\s*/, ''))}</li>
                    </ul>
                  )
                }
                return (
                  <div key={index} className="mt-4 mb-2">{ParseMark(a)}</div>
                );
              })
            }
          </div>
        </div>
      ))}
    </>
  )
}

const Tag = ({ text }: { text: string }) => <span className="print-bg inline-block px-2 py-1 rounded-sm text-xs text-white bg-slate-600 mr-1 mb-1 shadow">{text}</span>

const Education = () => {
  return (
    <>
      {resume.education.map(({ start, end, profession, name, address, is211 }, index) => (
        <div key={name} className="mb-8">
          <p className="inline-flex items-center text-lg font-bold">{name}
            {is211
              ? <span className='print-bg px-1 py-[2px] rounded-sm text-xs text-white bg-slate-600 mr-1 mb-1 shadow'>211</span>
              : null}
          </p>
          <p className='text-sm text-gray-600'>
            <span className="font-bold mr-4">{start} - {end}</span>
            {profession}
          </p>
        </div>
      ))}
    </>
  )
}

const Certificates = () => {
  return (
    <>
      {resume.certificates.map(({ name, time }, index) => < div key={name} className="mb-2">{name}</div>)}
    </>
  )
}

const Skills = () => {
  const logoMap = {
    react: {
      logo: '/svg/react-original-wordmark.svg',
      percent: 5,
    },
    antd: {
      logo: '/svg/ant-design.svg',
      percent: 5,
    },
    webpack: {
      logo: '/svg/webpack-original.svg',
      percent: 5,
    },
    sass: {
      logo: '/svg/sass-original.svg',
      percent: 5,
    },
    typescript: {
      logo: '/svg/typescript-original.svg',
      percent: 4,
    },
    tailwind: {
      logo: '/svg/tailwindcss-icon.svg',
      percent: 4,
    },
    VuePress: {
      logo: '/svg/VuePress.svg',
      percent: 4,
    },
    nodejs: {
      logo: '/svg/nodejs-original.svg',
      percent: 4,
    },
    playwright: {
      logo: '/svg/playwright.svg',
      percent: 4,
    },
    jest: {
      logo: '/svg/jestjsio-icon.svg',
      percent: 4,
    },
    vue: {
      logo: '/svg/vuejs-original-wordmark.svg',
      percent: 3,
    },
    nestjs: {
      logo: '/svg/nestjs-plain.svg',
      percent: 3,
    },
    nextjs: {
      logo: '/svg/nextjs-original.svg',
      percent: 3,
    },
    // git: {
    //   logo: '/svg/git-scm-icon.svg',
    //   percent: 3,
    // },
    nginx: {
      logo: '/svg/nginx-original.svg',
      percent: 2,
    },
    docker: {
      logo: '/svg/docker-original-wordmark.svg',
      percent: 1,
    },
    kubernetes: {
      logo: '/svg/kubernetes-icon.svg',
      percent: 1,
    },
  }
  return (
    <div>
      {Object.keys(logoMap).map((key) => {
        const { logo, percent } = logoMap[key as keyof typeof logoMap];
        return (
          <div key={key} className='flex items-center justify-between mb-2'>
            <img key={key} src={logo} alt={key} width="24" height="24" />
            <div>
              {new Array(5).fill(1).map((_, index) => <span key={index} className={`print-bg inline-block w-2 h-2 rounded-full border border-gray-600 ${percent > index ? 'bg-gray-600' : ''} ml-1`} />)}
            </div>
          </div>
        )
      })}
    </div>
  )
}

const Interests = () => {
  return (
    <>
      {resume.interest.map(t => <Tag key={t} text={t} />)}
    </>
  )
}

const Summary = () => {
  return (<div className="flex-1 ml-8">{ParseMark(resume.summary)}</div>)
}

const NameAndAvatar = ({ }) => {
  return (
    <div className='flex w-1/3'>
      <div>
        <img width={128} height={128} className="rounded-full w-32 rotate-[-32deg] shadow-lg print:shadow-none" src={resume.avatar} alt="avatar" />
      </div>
      <div className="ml-8 flex flex-col justify-center">
        <div className="text-4xl">{resume.name}</div>
        <div className="mt-1 text-sm text-gray-500">{resume.title}</div>
      </div>
    </div>
  )
}

const MetaInfo = () => {
  const { address, email, phone } = resume.meta;
  const withIcon = (k: keyof typeof iconMap, v: string) => (
    <div key={k} className="flex items-center text-base mb-2">
      <Icon type={k} />
      <span className="ml-2">{v}</span>
    </div>
  )
  return (
    <>
      {withIcon('address', address)}
      {withIcon('phone', phone)}
      {withIcon('email', email)}
    </>
  )
}

const Objective = () => {
  const KV = (k: string, v: string) => (
    <>
      <div className="text-sm text-gray-600 mt-2">{k}</div>
      <div className="text-base font-bold">{v}</div>
    </>
  )
  return (
    <>
      {KV("地址", resume.objective.address)}
      {KV("薪资", resume.objective.salary)}
      {KV("目前状态", resume.objective.currentState)}
      {KV("预计到岗", resume.objective.after)}
    </>
  )
}

const Content = () => {
  return (
    <main id="main" className="min-h-[1414px] w-[1000px] p-6">
      <div className="flex">
        <NameAndAvatar />
        <Summary />
      </div>
      <div className="flex mt-8">
        <section className="w-1/5 mr-8 pr-8 border-r border-blue-800 border-opacity-20">

          <Block title="个人信息">
            <MetaInfo />
          </Block>
          {/*
          <Block title="求职意向" className="mt-20">
            <Objective />
          </Block> */}

          <Block title="技能" className="mt-20">
            <Skills />
          </Block>

          <Block title="证书" className="mt-20">
            <Certificates />
          </Block>

          <Block title="兴趣爱好" className="mt-20">
            <Interests />
          </Block>
        </section>

        <div className="flex-1">
          <Block title="工作经历">
            <Companies />
          </Block>
          <Block title="项目经历" className="mt-20">
            <Projects />
          </Block>
          <Block title="教育背景" className="mt-20">
            <Education />
          </Block>
        </div>
      </div>

    </main>
  )
}

export default Content;
