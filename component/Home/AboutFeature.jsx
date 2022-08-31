import { faEarth, faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { AboutFeatureBox, AboutFeatureBoxH3, AboutFeatureBoxP, AboutFeatureCont, AboutFeatureRow } from '../../StylingComp/Home/ AboutFeature'

const AboutFeature = () => {
  return (
    <AboutFeatureCont>
        <AboutFeatureRow>
            <AboutFeatureBox>
                <FontAwesomeIcon icon={faEarth} />
                <AboutFeatureBoxH3>World Wide</AboutFeatureBoxH3>
                <AboutFeatureBoxP>
                    We available worldwide and with quality service
                </AboutFeatureBoxP>
            </AboutFeatureBox>
            <AboutFeatureBox>
                <FontAwesomeIcon icon={faPhoneAlt} />
                <AboutFeatureBoxH3>247 Customer Care</AboutFeatureBoxH3>
                <AboutFeatureBoxP>
                    We available worldwide and with quality service
                </AboutFeatureBoxP>
            </AboutFeatureBox>
            <AboutFeatureBox>
                <FontAwesomeIcon icon={faEarth} />
                <AboutFeatureBoxH3>World Wide</AboutFeatureBoxH3>
                <AboutFeatureBoxP>
                    We available worldwide and with quality service
                </AboutFeatureBoxP>
            </AboutFeatureBox>
            <AboutFeatureBox>
                <FontAwesomeIcon icon={faEarth} />
                <AboutFeatureBoxH3>World Wide</AboutFeatureBoxH3>
                <AboutFeatureBoxP>
                    We available worldwide and with quality service
                </AboutFeatureBoxP>
            </AboutFeatureBox>
        </AboutFeatureRow>
    </AboutFeatureCont>
  )
}

export default AboutFeature