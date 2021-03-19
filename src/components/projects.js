import React from 'react'
import styled from 'styled-components'
import Project from './project'

import img1 from '../images/projects/1.PNG'
import img2 from '../images/projects/2.PNG'
import img3 from '../images/projects/3.PNG'
import img4 from '../images/projects/4.PNG'
import img5 from '../images/projects/5.PNG'
import img6 from '../images/projects/6.PNG'

const ProjectsWrapper = styled.section`
	display: flex;
	justify-content: center;
	align-items: flex-start;
	background: #111;
	padding: 100px 0;
`
const WorkWrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-gap: 60px 20px;
	width: 100%;
`
const Title = styled.h2``
const Description = styled.p`
	text-align: center;
	margin: 50px 0;
	color: #bdbdbd;
`
const Animation = styled.div`
	&:nth-of-type(2),
	&:nth-of-type(5),
	&:nth-of-type(8) {
		margin-top: 50px;
	}

	&:nth-of-type(3),
	&:nth-of-type(6),
	&:nth-of-type(9) {
		margin-top: 100px;
	}
`

export default function Projects() {
	return (
		<ProjectsWrapper id='projects'>
			<div className='container container--secondary'>
				<div className='container container--primary'>
					<Title>My projects</Title>
					<Description className='work__desc section__desc'>Check out my portfolio!</Description>
					<WorkWrapper className='work__wrapper'>
						<Animation className='work--animation'>
							<Project
								title='EventMaker'
								bgwebm={img1}
								github='https://github.com/kasymjaparov/eventmaker-react'
								external='https://eventmaker-react.vercel.app/'
							/>
						</Animation>
						<Animation className='work--animation'>
							<Project
								title='Personal Area'
								bgwebm={img2}
								github='https://github.com/kasymjaparov/personal_area-react'
								external='https://personal-area-react.vercel.app'
							/>
						</Animation>
						<Animation className='work--animation'>
							<Project
								title='Norma.kg'
								bgwebm={img3}
								github='https://github.com/kasymjaparov/landing_site-3-react'
								external='https://landing-site-3-react.vercel.app/'
							/>
						</Animation>
						<Animation className='work--animation'>
							<Project
								title='SportEventsBishkek'
								bgwebm={img4}
								github='https://github.com/kasymjaparov/sportEventsBishkek-react'
								external='https://sport-events-bishkek.vercel.app/'
							/>
						</Animation>
						<Animation className='work--animation'>
							<Project
								title='PerfectWeight'
								bgwebm={img5}
								github='https://github.com/kasymjaparov/perfectweight-react'
								external='https://perfectweight.vercel.app/'
							/>
						</Animation>
						<Animation className='work--animation'>
							<Project
								title='Елки.kg'
								bgwebm={img6}
								github='https://github.com/kasymjaparov/tree_site-react'
								external='https://elki-kg.vercel.app/'
							/>
						</Animation>
					</WorkWrapper>
				</div>
			</div>
		</ProjectsWrapper>
	)
}
