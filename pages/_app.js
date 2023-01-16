import '../styles/globals.css'
import 'rc-slider/assets/index.css';
// Import Swiper styles
import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';

import Layout from 'components/layout';
import { Toaster } from 'react-hot-toast';


function MyApp({ Component, pageProps }) {
  return (
    <Layout dontShowFooter={pageProps.DontShowFooter}>
      <Component {...pageProps} />
      <Toaster />
    </Layout>
  )
}

export default MyApp
