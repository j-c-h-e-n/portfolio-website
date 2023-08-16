import React from 'react';
import LandingSection from './sections/LandingSection';
import BiographySection from './sections/BiographySection';
import SkillsSection from './sections/SkillsSection';
import ExperiencesSection from './sections/ExperiencesSection';
import ContactSection from './sections/ContactSection';

const WebBody = () => {
    return (
        <>
            <div>
                <LandingSection/>
            </div>
            <div>
                <BiographySection/>
            </div>
            <div>
                <SkillsSection/>
            </div>
            <div>
                <ExperiencesSection/>
            </div>
            <div>
                <ContactSection/>
            </div>
        </>
    )
}

export default WebBody;