import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

// 关于本网站的特点进行描述
// 基本设置
type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

// 特点列表
const FeatureList: FeatureItem[] = [];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}


export default function HomepageFeatures(): ReactNode {
  // 不需要特征说明，直接返回null停止渲染

  // 返回null停止渲染
  return null;

  // 注释掉特征说明有关代码
  // return (
  //   <section className={styles.features}>
  //     <div className="container">
  //       <div className="row">
  //         {FeatureList.map((props, idx) => (
  //           <Feature key={idx} {...props} />
  //         ))}
  //       </div>
  //     </div>
  //   </section>
  // );
}
