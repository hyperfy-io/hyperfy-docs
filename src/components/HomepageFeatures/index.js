import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
//  {
//    title: 'Cross-platform',
//    Svg: require('@site/static/img/vr-phone.svg').default,
//    description: (
//      <>
//         Made from pure web tech. Mobile, Desktop, + VR supported on any browser that supports WebXR.
//      </>
//    ),
//  },
//  {
//    title: 'Collaborative',
//    Svg: require('@site/static/img/collab.svg').default,
//    description: (
//      <>
//        3D infinite canvas for your imagination. Invite others to create your worlds with real-time drag and drop editing. 
//      </>
//    ),
//  },
//  {
//    title: 'Extensible',
//    Svg: require('@site/static/img/web.svg').default,
//    description: (
//      <>
//        If you've ever used React to build a website or app, you'll feel right at home with the Hyperfy SDK.
//      </>
//    ),
//  },
];

function Feature({Svg, title, description}) {
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

export default function HomepageFeatures() {
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
  );
}
