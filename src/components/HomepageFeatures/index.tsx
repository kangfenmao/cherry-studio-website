import clsx from 'clsx'
import Heading from '@theme/Heading'
import styles from './styles.module.css'

type FeatureItem = {
  title: string
  Png: React.ComponentType<React.ComponentProps<'svg'>>
  description: JSX.Element
}

const FeatureList: FeatureItem[] = [
  {
    title: '多模型支持',
    icon: require('@site/static/img/ai-technology.png').default,
    description: <>Cherry Studio 支持多款国内外最先进的AI大语言模型，AI 响应速度非常快，还能自由切换模型对话</>
  },
  {
    title: '安装方便',
    icon: require('@site/static/img/exe.png').default,
    description: <>不需要 Docker 环境，不需要使用任何命令行，点击鼠标就能安装</>
  },
  {
    title: '速度快',
    icon: require('@site/static/img/instant-messaging.png').default,
    description: <>Cherry Studio 的速度非常快，可以在几秒钟内完成一个对话</>
  }
]

function Feature({ title, icon, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={icon} className={styles.featureImage} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  )
}
