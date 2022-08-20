import React from 'react'
import '../css/About.css'

const About = () => {



    return(
        <div className=" ">

            <div className='mission-statement-div'>
                <p className="mission-statement">To save the hungry, the helpless, the lost, and the little ones just struggling to survive; 
                    to house and feed as many animals as possible; to ease the suffering of the weak and unloved.</p>
            </div>
            <div className='about-content'>
                <h3>Northwest Animal Companions is a 501(c)(3), no-kill animal rescue located in the Portland metropolitan area of Oregon. </h3>
                <p className='about-text'>
                    It was founded in 2004 when a group of independent animal rescuers decided to pool their resources and talents for the benefit 
                    of all dogs and cats in their care. They opened their homes and hearts to create an organization where animals could have the 
                    best possible quality of life.
                </p>
                <p className='about-text'>
                    To this day, NWAC is completely volunteer-run, relying on loving foster homes for our animals in rescue and donations to cover 
                    the needs of those animals. With very minimal overhead costs, we channel donations toward veterinary care, spaying/neutering, 
                    grooming, nutrition, and enrichment for animals in foster, then find them permanent, loving homes.
                </p>
                
                

                <h3>Our Mission</h3>
                <p className='about-text'>
                    To ensure respectful and humane treatment of animals by providing assistance, 
                    rescuing and educational services; bringing people and animals together to enrich each other’s lives through
                    adoption and companionship; and creating a society in which all animals’ inherent value is recognized.
                </p>

                <h3>Our Board</h3>
                <p className='about-text'>
                    The NWAC board is made up of hard-working, experienced animal rescuers and animal care professionals, all of whom are also 
                    foster volunteers for the organization. 
                </p>

                
            </div>
            
        </div>
    )
}

export default About;