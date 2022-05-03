// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: '数据建表建模&数据库正向同步',
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: <>快速复制已有表结构、json生成表<br/>在线管理表结构，支持正向向数据库执行<br/>数据库建模.</>,
  },
  {
    title: '逆向解析&数据库连接管理',
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: <>将已有的数据库结构解析到软件中管理<br/>支持多种数据库连接在线管理(Mysql、Oracle、DB2、SqlServer、PostGreSql).</>,
  },
  {
    title: '版本控制&数据库文档',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: <>每个需求与变动，都可以生成版本，每个版本之间可以比对差异<br/>可将所有表结构，自动生成word、html、md文档，便归档和管理.</>,
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--left padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((feature) => (
            <Feature key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
