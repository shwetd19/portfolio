// Core packages
import Image from 'next/image'

// Section structure
import Section from '../../structure/section';
import Container from '../../structure/container';

// Section general blocks
import SectionTitle from '../../blocks/section.title.block'
import SectionGridBg from '../../blocks/section.grid.block'

// Section specific blocks
import BadgesBlock from '../../blocks/about.badges.block'
import CopyBlock from '../../blocks/about.copy.block'

// Section scss
import about from '../../../styles/sections/index/about.module.scss';

/**
 * Section: About
 * An overview of yourself.
 * Highlight your top level attributes and disciplines.
 * 
 * @returns {jsx} <About />
 */
export default function About() {
	return (
		<Section classProp={about.section} id="about">	
			<Container spacing={['verticalXXXLrg']}>
				<SectionTitle
					title="About Me"
					preTitle="Synopsis"
					subTitle="I'm a developer passionate about building AI agents that automate workflows and bring intelligent voice interactions to life. With a strong foundation in full stack development and a deep interest in emerging tech, I specialize in creating smart, scalable systems that make work feel effortless."
				/>
				<section className={about.content}>
					<div className={about.image}>
						<img src="/img/my-new-profile.jpeg" alt="Dhake family photo"/>
						{/* <Image src="/img/my-new-profile.jpeg" width={600} height={800}/> */}
					</div>
					<div className={about.copy} >
						<CopyBlock 
							title="Soft skills that scale with code"
							containerClass={about.container}
							iconClass={about.icon}
							icon={[ 'fat', 'ear-listen' ]}
							copy="I build AI agents that automate workflows and voice agents that enable natural interactions. Alongside my technical skills, I bring leadership, time management, and a strong ownership mindset—shaped through real-world product building and collaboration. I'm driven by curiosity, passionate about open-source, and focused on delivering impact through thoughtful, scalable systems."
						/>
						<BadgesBlock 
							title="Reasearch and planning" 
							containerClass={about.container}
							list={methods} 
							fullContainer="fullContainer"
							block="methods" 
							icon="fingerprint"
							copy="I love designing smart systems—from automating workflows with AI agents to building voice assistants. Planning how each piece fits together is where I thrive, blending logic and creativity to shape seamless user experiences."
							//invertedColor="invertedColor"
							headerIcon={`${about.icon}`}
						/>
					</div>
				</section>	
			</Container>
		</Section>
	)
}

const methods 	= [
	{ key: 'planet-moon', 		name: 'Workflow Automation', 		type: 'fad' },
	{ key: 'qrcode', 			name: 'Conversational AI', 	type: 'fad' },
	{ key: 'window', 			name: 'Scalable System Design', 	type: 'fad' },
	{ key: 'cubes', 			name: 'API Development', 	type: 'far' },
	{ key: 'layer-plus', 		name: 'Open Source', 	type: 'fad' },
	{ key: 'solar-system', 		name: 'Developer Experience (DX)', 		type: 'fad' },
]