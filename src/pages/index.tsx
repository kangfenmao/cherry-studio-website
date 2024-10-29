import clsx from 'clsx'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import Layout from '@theme/Layout'
import HomepageFeatures from '@site/src/components/HomepageFeatures'
import Heading from '@theme/Heading'
import React, { useState, useEffect } from 'react'
import LinuxLogo from '@site/static/img/linux-logo.svg'

import styles from './index.module.css'

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext()
  const [version, setVersion] = useState('0.8.5')

  useEffect(() => {
    const url = 'https://api.github.com/repos/kangfenmao/cherry-studio/releases/latest'
    fetch(url)
      .then((response) => response.json())
      .then((data) => setVersion(data.tag_name.replace('v', '')))
  }, [])

  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <a href="https://github.com/kangfenmao/cherry-studio" target="_blank">
          <img src="/img/logo.png" alt="Cherry Studio AI Logo" className={styles.logo} />
        </a>
        <Heading as="h1" className={clsx('hero__title', styles.title)}>
          {siteConfig.title}
        </Heading>
        <p className={clsx('hero__subtitle', styles.subtitle)}>{siteConfig.tagline}</p>
        <div className={styles['download-buttons']}>
          <a
            href={`https://github.com/kangfenmao/cherry-studio/releases/download/v${version}/Cherry-Studio-${version}-x64.dmg`}
            className={styles['download-btn']}>
            <svg viewBox="0 0 384 512" width="24" height="24">
              <path
                fill="currentColor"
                d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"
              />
            </svg>
            macOS Intel
          </a>
          <a
            href={`https://github.com/kangfenmao/cherry-studio/releases/download/v${version}/Cherry-Studio-${version}-arm64.dmg`}
            className={styles['download-btn']}>
            <svg viewBox="0 0 384 512" width="24" height="24">
              <path
                fill="currentColor"
                d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"
              />
            </svg>
            macOS Apple Silicon
          </a>
          <a
            href={`https://github.com/kangfenmao/cherry-studio/releases/download/v${version}/Cherry-Studio-${version}-setup.exe`}
            className={styles['download-btn']}>
            <svg viewBox="0 0 448 512" width="24" height="24">
              <path
                fill="currentColor"
                d="M0 93.7l183.6-25.3v177.4H0V93.7zm0 324.6l183.6 25.3V268.4H0v149.9zm203.8 28L448 480V268.4H203.8v177.9zm0-380.6v180.1H448V32L203.8 65.7z"
              />
            </svg>
            下载 Windows 版本
          </a>
          <a
            href={`https://github.com/kangfenmao/cherry-studio/releases/download/v${version}/Cherry-Studio-${version}-x86_64.AppImage`}
            className={styles['download-btn']}>
            <LinuxLogo style={{ width: 24, height: 24 }} />
            下载 Linux 版本
          </a>
        </div>
        <p className={styles['new-app']}>
          🎉{' '}
          <a href="https://github.com/kangfenmao/cherry-studio" target="_blank">
            Cherry Studio
          </a>{' '}
          最新版本{' '}
          <a href={`https://github.com/kangfenmao/cherry-studio/releases/tag/v${version}`} target="_blank" v-cloak>
            v{version}
          </a>{' '}
          发布啦！
        </p>
      </div>
    </header>
  )
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext()
  return (
    <Layout description="Cherry Studio AI 是一款强大的多模型 AI 助手，支持 iOS、macOS 和 Windows 平台。快速切换多个先进的 LLM 模型，提升工作学习效率。">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  )
}
