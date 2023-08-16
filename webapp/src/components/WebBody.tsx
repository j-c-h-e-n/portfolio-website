import React from 'react';
import LandingSection from './sections/LandingSection';
import BiographySection from './sections/BiographySection';
import SkillsSection from './sections/SkillsSection';
import ExperiencesSection from './sections/ExperiencesSection';
import ContactSection from './sections/ContactSection';
import '../app.css';

/**
 * The divs are responsible for the background of each section. The individual sections host their own content.
 * @returns The content on the page.
 */
const WebBody = () => {
    return (
        <>
            <div className="landing-section-div">
                <LandingSection/>
            </div>
            <div className="biography-section-div">
                <BiographySection/>
            </div>
            <div className="skills-section-div">
                <SkillsSection/>
            </div>
            <div className="experiences-section-div">
                <ExperiencesSection/>
            </div>
            <div className="contact-section-div">
                <ContactSection/>
            </div>
        </>
    )
}

export default WebBody;