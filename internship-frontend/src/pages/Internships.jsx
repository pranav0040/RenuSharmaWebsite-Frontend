import React from 'react'
import TopNavbar_Internship from '../components/TopNavbar_Internship'
import Hero_Internship from '../components/Hero_Internship'
// import HeroSection from '../components/HeroSection'
import HowItWorks_Internship from '../components/HowItWorks_Internship'
import HandsOnProjectSection_Internships from '../components/HandsOnProjectSection_Internships'
import WhyUsInternship from '../components/WhyUsInternship'

import Alumni_Internship from '../components/Alumni_Internship'
import NextCohortSection_Internship from '../components/NextCohortSection_Internship'

import Client_Showcase_Internship from '../components/Client_Showcase_Internship'
import Faq_Internship from '../components/Faq_Internship'


const Internships = () => {
  return (
    <div>
      <TopNavbar_Internship />
      <Hero_Internship />
      <WhyUsInternship />
      {/* <HeroSection /> */}
      <HowItWorks_Internship />
      <HandsOnProjectSection_Internships />
      <Alumni_Internship />
      <Client_Showcase_Internship />
      <NextCohortSection_Internship />
      <Faq_Internship />
    </div>
  );
};

export default Internships;
