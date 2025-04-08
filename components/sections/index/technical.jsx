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
import about from '../../../styles/sections/index/about.module.scss'

/**
 * Section: Technical
 * Highlight your technical skills with a short blurb about you,
 * Then display the programs you are proficient with and the technologies you use if applicable.
 * 
 * @returns {jsx} <Technical />
 */
export default function Technical() {
	return (
		<Section classProp={`${about.section} borderBottom`} id="technical">	
			<Container spacing={['verticalLrg']}>
				<SectionTitle
					title="Technical"
					preTitle="Hardskills"
					subTitle="As a developer passionate about intelligent systems, I build AI agents that automate workflows and power natural voice interactions. Blending creativity with technical depth, I turn complex processes into seamless, human-centric experiences using tools across the AI and web development stack."
				/>
				<section className={`${about.content} ${about.container}`}>
					<div className={about.copy}>
						<CopyBlock 
							title="AI-Powered Craftsmanship"
							icon={[ 'fat', 'chart-network' ]}
							copy="I build AI agents and voice-driven systems that automate complex workflows. With a focus on real-time communication and LLM integration, I turn repetitive tasks into intelligent, scalable, and adaptive solutions."
							iconClass={about.icon}
							containerClass={about.container}
						/>
						<BadgesBlock 
							title="What I Build" 
							copy="I create voice agents and workflow automation tools that act, learn, and improve over time. From backend logic to conversational UX, I bring together AI and engineering for seamless human-machine collaboration."
							list={software}
							block="software" 
							fullContainer="fullContainer"
							icon="grid-2-plus"
							containerClass={about.container}
							headerIcon={about.icon} 
						/>
						<BadgesBlock 
							title="Technologies I love to build with" 
							copy="I work with technologies like LiveKit, LangChain, TypeScript, and Node.js. These tools power the intelligent systems I build—real-time, resilient, and designed to solve problems with precision and clarity."
							list={tech} 
							block="tech"
							fullContainer="fullContainer" 
							icon="laptop-code"
							containerClass={about.container}
							headerIcon={about.icon} 
						/>							
					</div>
					<div className={`${about.image} ${about.technicalSvg}`}>
						<Image src="/img/dataism-24.svg" width={477} height={1111} alt="Data Strings 01 by Colorpong: https://ywft.us/2177b695b" />
					</div>
				</section>	
			</Container>
			{/* <SectionGridBg gridSize={4}/> */}
		</Section>
	)
}

const software = [
	{ key: 'photoshop', 	name: 'Photoshop', 			type: 'devicon' },
	{ key: 'illustrator', 	name: 'Illustrator', 		type: 'devicon' },
	{ key: 'figma', 		name: 'Figma', 				type: 'devicon' },
	{ key: 'vscode', 		name: 'VSCode', 			type: 'devicon' },
	{ key: 'mailbox', 		name: 'Postman', 			type: 'fas' },
	{ key: 'computer-mouse',name: 'Click Up', 			type: 'fas' },
	{ key: 'list-music',	name: 'Ableton', 			type: 'fas' },
	{ key: 'aftereffects',	name: 'After Effects', 		type: 'devicon' },
	{ key: 'premierepro',	name: 'Premiere Pro', 		type: 'devicon' },
]

const tech = [
	{ key: 'typescript', name: 'Typescript', type: 'devicon' },
	{ key: 'nodejs', name: 'NodeJS', type: 'devicon' },
	{ key: 'nextjs', name: 'NextJs', type: 'devicon' },
	{ key: 'livekit', name: 'LiveKit', type: 'devicon' },
	{ key: 'python', name: 'Python', type: 'devicon' },
	{ key: 'googlecloud', name: 'GCP', type: 'devicon' },
	{ key: 'restapi', name: 'RestAPI', type: 'devicon' },
	{ key: 'javascript', name: 'Javascript', type: 'devicon' },
	{ key: 'etsy', name: 'Etsy API', type: 'devicon' },
	{ key: 'docker', name: 'Docker', type: 'devicon' },
	{ key: 'git', name: 'Git', type: 'devicon' },
	{ key: 'mongodb', name: 'MongoDB', type: 'devicon' },
	{ key: 'postgresql', name: 'PostgreSQL', type: 'devicon' }
]