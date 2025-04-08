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
import experience from '../../../styles/sections/index/experience.module.scss'

/**
 * Section: Experience
 * Showcase professional experience with detailed descriptions
 * and technologies used.
 * 
 * @returns {jsx} <Experience />
 */
export default function Experience() {
	return (
		<Section classProp={`${experience.section} borderBottom`} id="experience">	
			<Container spacing={['verticalXXXLrg']}>
				<SectionTitle
					title="Experience"
					preTitle="Professional Journey"
					subTitle="I am currently leading, architecting, and developing all digital and software engineering projects across the Full Stack, Flutter, and DevOps domains."
				/>
				<section className={`${experience.content} ${experience.container}`}>
					<div className={experience.copy}>
						<div className={experience.experienceItem}>
							<h3>Attack Capital</h3>
							<h4>Software
Development Engineer</h4>
							<p className={experience.duration}>July 2024 - Current</p>
							<p className={experience.description}>My key contributions during this time 👇</p>
							<ul className={experience.achievements}>
								<li>Developed RESTful APIs with Node.js for seamless data integration between the front-end and back-end systems at OpenMic.ai Implemented rate limiting with Redis, cutting database requests by 50% and enhancing performance.</li>
								<li>Integrated LiveKit as a WebRTC solution for real-time calling at OpenMic.ai, deploying the AI Agent over GCP to facilitate efficient real-time communication.</li>
								<li>Developed a Probot-based GitHub App called CodeSama, integrating Codium-AI to automate pull-request reviews, improving code quality and streamlining the review process.</li>
							</ul>
							<BadgesBlock 
								title="Technologies Used" 
								list={currentTech} 
								block="tech"
								fullContainer="fullContainer" 
								icon="laptop-code"
								containerClass={experience.container}
								headerIcon={experience.icon} 
							/>
						</div>

						<div className={experience.experienceItem}>
							<h3>Sellerkin</h3>
							<h4>Full-Stack Developer Intern</h4>
							<p className={experience.duration}>Jan 2024 - Jul 2024 · 6 mos</p>
							<p className={experience.description}>Some key contributions during this time 👇</p>
							<ul className={experience.achievements}>
								<li>Proposed an efficient algorithm to accurately calculate the sales performance of specific products on Etsy using official Etsy APIs.</li>
								<li>Developed robust server-side features including Etsy API data fetching, smart content filtering, and algorithm-driven product curation.</li>
								<li>Designed a high-converting sales page focused on strategic customer targeting and improved user engagement.</li>
								<li>Proposed a comprehensive email validation tool with real-time SMTP verification and enhanced deliverability checks.</li>
							</ul>
							<BadgesBlock 
								title="Technologies Used" 
								list={internTech} 
								block="tech"
								fullContainer="fullContainer" 
								icon="laptop-code"
								containerClass={experience.container}
								headerIcon={experience.icon} 
							/>
						</div>
					</div>
				</section>	
			</Container>
		</Section>
	)
}

const currentTech = [
	{ key: 'typescript', name: 'Typescript', type: 'devicon' },
	{ key: 'nodejs', name: 'NodeJS', type: 'devicon' },
	{ key: 'nextjs', name: 'NextJs', type: 'devicon' },
	{ key: 'livekit', name: 'LiveKit', type: 'devicon' },
	{ key: 'python', name: 'Python', type: 'devicon' },
	{ key: 'googlecloud', name: 'GCP', type: 'devicon' },
	{ key: 'docker', name: 'Docker', type: 'devicon' },
	{ key: 'git', name: 'Git', type: 'devicon' },
	{ key: 'mongodb', name: 'MongoDB', type: 'devicon' },
	{ key: 'postgresql', name: 'PostgreSQL', type: 'devicon' }
]

const internTech = [
	{ key: 'typescript', name: 'Typescript', type: 'devicon' },
	{ key: 'nodejs', name: 'NodeJS', type: 'devicon' },
	{ key: 'nextjs', name: 'NextJs', type: 'devicon' },
	{ key: 'restapi', name: 'RestAPI', type: 'devicon' },
	{ key: 'javascript', name: 'Javascript', type: 'devicon' },
	{ key: 'etsy', name: 'Etsy API', type: 'devicon' },
	{ key: 'git', name: 'Git', type: 'devicon' },
	{ key: 'mongodb', name: 'MongoDB', type: 'devicon' },
	{ key: 'postgresql', name: 'PostgreSQL', type: 'devicon' }
] 