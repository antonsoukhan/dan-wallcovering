import Head from 'next/head';
import Header from '/components/Header';
import Intro from '@/components/Intro';
import Features from '@/components/Features';
import Gallery from '@/components/Gallery';
import TvFeatures from '@/components/TvFeatures';
import AsSeenOnStrip from '@/components/AsSeenOnStrip';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import ButtonFixed from '@/components/ButtonFixed';
import styles from './index.module.css';

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Dan Miller Wall Covering | Paperhanger & Wallpaper Installation in Southern California</title>
        <meta name='description' content='Dan Miller Wall Covering — professional paperhanger offering wallpaper installation, wallcovering, wall murals, custom murals, custom graphics and peel and stick wallpaper for the home in Southern California. Call (951) 858-4019 for a free estimate!' />
        <meta name='keywords' content='paperhanger, wallpaper, wallpaper installation, wallpaper for the home, home decorating, interior design, interior decorating, interior decorator, home decorator, peel and stick wallpaper, custom graphics, custom murals, wall murals, wallcovering, wall covering, Southern California' />
        <link rel='canonical' href='https://www.danmillerwallcovering.com/' />

        {/* Open Graph */}
        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://www.danmillerwallcovering.com/' />
        <meta property='og:title' content='Dan Miller Wall Covering | Professional Wallpaper Installation' />
        <meta property='og:description' content='Professional paperhanger for wallpaper installation, wallcovering, wall murals and custom murals in Southern California. Free estimates. Call (951) 858-4019.' />
        <meta property='og:image' content='https://www.danmillerwallcovering.com/images/hero.jpg' />
        <meta property='og:site_name' content='Dan Miller Wall Covering' />
        <meta property='og:locale' content='en_US' />

        {/* Twitter Card */}
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:title' content='Dan Miller Wall Covering | Professional Wallpaper Installation' />
        <meta name='twitter:description' content='Professional paperhanger for wallpaper installation, wallcovering, wall murals and custom murals in Southern California. Free estimates. Call (951) 858-4019.' />
        <meta name='twitter:image' content='https://www.danmillerwallcovering.com/images/hero.jpg' />

        {/* JSON-LD Local Business */}
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: 'Dan Miller Wall Covering',
              description: 'Professional paperhanger offering wallpaper installation, wallcovering, wall murals, custom murals, custom graphics and peel and stick wallpaper for homeowners, interior designers and interior decorators in Southern California.',
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
              serviceType: [
                'Wallpaper Installation',
                'Paperhanger',
                'Wallcovering Installation',
                'Wall Murals',
                'Custom Murals',
                'Custom Graphics',
                'Peel and Stick Wallpaper',
                'Grasscloth Installation',
                'Fabric Wall Covering',
              ],
              knowsAbout: ['Home Decorating', 'Interior Design', 'Interior Decorating', 'Wallpaper for the Home'],
              priceRange: '$$',
            }),
          }}
        />
      </Head>

      <main>
        <Header />
        <AsSeenOnStrip />
        <div className={styles.btnFixedBox}>
          <ButtonFixed />
        </div>
        <Intro />
        <Features />
        <Gallery />
        <TvFeatures />
        <CTA />
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
