import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Box = styled.div`
	&:hover {
		span,
		svg,
		video {
			opacity: 1;
			transition: 0.2s;
		}
	}
`
const Video = styled.div`
	width: 250px;
	opacity: 0.4;
	transition: 0.5s;
	border-radius: 4px;
	box-shadow: 0px 0px 10px black;
	@media (max-width: 980px) {
		width: 200px;
	}
	@media (max-width: 845px) {
		width: 100%;
	}
`
const Source = styled.img`
	max-width: 100%;
	display: block;
`
const Links = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding-top: 10px;
	span {
		font-size: 14px;
		text-shadow: 0px 0px 10px black;
		opacity: 0.4;
		transition: 0.2s;
	}
`
const Wrapper = styled.div``
const Link = styled.a`
	margin-right: 10px;
	svg {
		width: 20px;
		height: 20px;
		transition: 0.2s;
		filter: drop-shadow(0px 0px 3px black);
		opacity: 0.4;
		&:hover {
			color: #02d463;
			transition: 0.2s;
		}
	}
`
const Title = styled.span``

const Project = ({ title, bgwebm, github, external }) => (
	<Box className='work__box'>
		<Video>
			<Source src={bgwebm} />
		</Video>
		<Links className='work__links'>
			<Wrapper>
				<Link href={github} target='_blank' rel='noopener noreferrer' title='GitHub'>
					<FontAwesomeIcon icon={['fab', 'github']} className='about__icon' />
				</Link>
				<Link href={external} target='_blank' rel='noopener noreferrer' title='External'>
					<FontAwesomeIcon icon='external-link-alt' />
				</Link>
			</Wrapper>
			<Title>{title}</Title>
		</Links>
	</Box>
)

export default Project
