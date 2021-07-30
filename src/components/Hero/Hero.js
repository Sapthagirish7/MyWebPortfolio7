import React from 'react';

import { Section, SectionSubText, SectionText, SectionTitle } from '../../styles/GlobalComponents';
// These are used for all the sections using global style files
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main centre>
        Welcom To <br />
        My Personal Portfolio 
      </SectionTitle>
      <SectionText>
        Hello, I am Sapthagirish.I am a passionate programmer with a curious mind who enjoys solving complex and challenging real-world problems.  
     </SectionText>
     <Button onClick={() =>window.location="#about" } >Learn More</Button>
    </LeftSection>

  </Section>
);

export default Hero;