import React from 'react'
import styled from 'styled-components'
import bart from '../images/bart.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import js from '../images/icons/js.svg'
import react from '../images/icons/react.svg'
import redux from '../images/icons/redux.png'
import sass from '../images/icons/sass.svg'
import ts from '../images/icons/ts.svg'
import formik from '../images/icons/formik.png'
import html from '../images/icons/html.png'
import css from '../images/icons/css.png'
import material from '../images/icons/material.png'

const AboutSection = styled.section`
	display: flex;
	justify-content: center;
	align-items: flex-start;
	padding: 100px 0;
`
const Container = styled.div`
	align-items: center;
	flex-direction: row;
	justify-content: space-between;
`
const Wrapper = styled.div`
	width: 50%;
	
`
const Title = styled.h2`
	@media (max-width: 920px) {
		width: 100%;
		text-align: center;
	}
`
const Description = styled.p`
	width: 80%;
	margin-top: 50px;
	color: #bdbdbd;
	text-align: left;
	@media (max-width: 920px) {
		width: 100%;
		text-align: center;
	}
`
const List = styled.ul`
	list-style: none;
	margin: 0;
	padding: 0;
	display: grid;
	grid-template-columns: repeat(3, minmax(90px, 100px));
	margin-top: 25px;
	@media (max-width: 920px) {
		justify-content: center;
	}
`
const Item = styled.li`
	color: #bdbdbd;
	margin-bottom: 10px;
	width: 90px;
	height: 90px;
	background: #28212c;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	.skill__icon {
		display: block;
		max-width: 26px;
		height: 26px;
		margin: 0 0 10px 0;
	}
	@media (max-width: 920px) {
		.skill__icon {
			position: relative;
			left: calc(50% - 13px);
		}
	}
`
const ItemText = styled.span``
const Image = styled.img`
	opacity: 0.4;
	transition: 0.5s;
	box-shadow: 0px 0px 20px rgba(0, 0, 0, 1);
	border-radius: 4px;

	&:hover {
		opacity: 1;
		transition: 0.5s;
	}
`

export default function About() {
	const technologies = [
		{ text: 'HTML', icon: html },
		{ text: 'CSS', icon: css },
		{ text: 'JS', icon: js },
		{ text: 'React', icon: react },
		{ text: 'Redux', icon: redux },
		{ text: 'Formik', icon: formik },
		{ text: 'SASS', icon: sass },
		{ text: 'Material', icon: material },
		{ text: 'TS', icon: ts }
	]
	return (
		<AboutSection id='about'>
			<div className='container--secondary container'>
				<Container className='container container--primary about__container'>
					<Wrapper className='about__wrapper'>
						<Title>About me</Title>
						<Description className='section__desc'>
							I started coding in December 2019, and I am a self-taught developer. I have a passion for
							modern looking websites with a few animations. I love what I am doing, and I am highly
							motivated to collaborate with someone. If you are up into some projects, just let me know!
						</Description>
						<Description className='section__desc'>Technologies that I use:</Description>
						<List>
							{technologies.map((item) => (
								<Item>
									<img className='skill__icon' src={item.icon} alt={item.text} />
									<ItemText>{item.text}</ItemText>
								</Item>
							))}
						</List>
					</Wrapper>
					<Image style={{ width: 520 }} src={bart} alt='adilet kasymjaparov' loading='lazy' />
				</Container>
			</div>
		</AboutSection>
	)
}
