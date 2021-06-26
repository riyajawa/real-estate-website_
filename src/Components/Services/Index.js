import React from 'react'
import Icon1 from '../../Images/svg-1.svg'
import Icon2 from '../../Images/svg-2.svg'
import Icon3 from '../../Images/svg-3.svg'
import { ServicesCard, ServicesContainer, ServicesH1, ServicesH2, ServicesIcon, ServicesP, ServicesWRapper } from './ServicesElements'

const Services = () => {
    return (
        <ServicesContainer>
            <ServicesH1>Our Services</ServicesH1>
            <ServicesWRapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1} ></ServicesIcon>
                    <ServicesH2>EXPENSES</ServicesH2>
                    <ServicesP>iytdrsdfghuijokp[oi9u8y7tdrfghjiokp[0i9[u8y7tp86ro5idsfcghvjbiojp9u089y7t67r56d
                    </ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2} ></ServicesIcon>
                    <ServicesH2>EXPENSES</ServicesH2>
                    <ServicesP>iytdrsdfghuijokp[oi9u8y7tdrfghjiokp[0i9[u8y7tp86ro5idsfcghvjbiojp9u089y7t67r56d
                    </ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3} ></ServicesIcon>
                    <ServicesH2>EXPENSES</ServicesH2>
                    <ServicesP>iytdrsdfghuijokp[oi9u8y7tdrfghjiokp[0i9[u8y7tp86ro5idsfcghvjbiojp9u089y7t67r56d
                    </ServicesP>
                </ServicesCard>
            </ServicesWRapper>
        </ServicesContainer>
    )
}

export default Services
