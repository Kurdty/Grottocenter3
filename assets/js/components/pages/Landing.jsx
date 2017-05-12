import React from 'react';
import Header from '../homepage/Header';
import Welcome from '../homepage/Welcome';
import LatestBlogNewsSection from '../homepage/LatestBlogNewsSection';
import Association from '../homepage/Association';
import WhatIsIt from '../homepage/WhatIsIt';
import RandomEntry from '../homepage/RandomEntry';
import Partners from '../homepage/Partners';
import Footer from '../homepage/Footer';
import Faq from '../homepage/Faq';

const Landing = () => (
  <div>
    <Header/>
    <Welcome/>
    <WhatIsIt/>
    <RandomEntry/>
    <LatestBlogNewsSection/>
    <Association/>
    <Faq/>
    <Partners/>
    <Footer/>
  </div>
);

export default Landing;
