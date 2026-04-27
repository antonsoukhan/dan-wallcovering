import Head from 'next/head';
import Header from '/components/Header';
import Intro from '@/components/Intro';
import Features from '@/components/Features';
import Gallery from '@/components/Gallery';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import ButtonFixed from '@/components/ButtonFixed';
import styles from './index.module.css';

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Dan Miller Wall Covering | Professional Wallpaper Installation</title>
        <meta name='description' content='Dan Miller Wall Covering — professional wallpaper and wall covering installation in Southern California. Call (951) 858-4019 for a free estimate!' />
        <link rel='canonical' href='https://www.danmillerwallcovering.com/' />

        {/* Open Graph */}
        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://www.danmillerwallcovering.com/' />
        <meta property='og:title' content='Dan Miller Wall Covering | Professional Wallpaper Installation' />
        <meta property='og:description' content='Professional wallpaper and wall covering installation in Southern California. Free estimates. Call (951) 858-4019.' />
        <meta property='og:image' content='https://www.danmillerwallcovering.com/images/hero.jpg' />
        <meta property='og:site_name' content='Dan Miller Wall Covering' />
        <meta property='og:locale' content='en_US' />

        {/* Twitter Card */}
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:title' content='Dan Miller Wall Covering | Professional Wallpaper Installation' />
        <meta name='twitter:description' content='Professional wallpaper and wall covering installation in Southern California. Free estimates. Call (951) 858-4019.' />
        <meta name='twitter:image' content='https://www.danmillerwallcovering.com/images/hero.jpg' />

        {/* JSON-LD Local Business */}
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: 'Dan Miller Wall Covering',
              description: 'Professional wallpaper and wall covering installation in Southern California.',
              url: 'https://www.danmillerwallcovering.com',
              image: 'https://www.danmillerwallcovering.com/images/hero.jpg',
              telephone: '+19518584019',
              address: {
                '@type': 'PostalAddress',
                addressRegion: 'CA',
                addressCountry: 'US',
              },
              areaServed: {
                '@type': 'State',
                name: 'Southern California',
              },
              serviceType: ['Wallpaper Installation', 'Wall Covering Installation', 'Grasscloth Installation', 'Fabric Wall Covering'],
              priceRange: '$$',
            }),
          }}
        />
      </Head>

      <main>
        <Header />
        <div className={styles.btnFixedBox}>
          <ButtonFixed />
        </div>
        <Intro />
        <Features />
        <Gallery />
        <CTA />
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
