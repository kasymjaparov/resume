import React from 'react'
import Layout from '../components/defaults/layout'
import Hero from '../components/hero'
import About from '../components/about'
import Projects from '../components/projects'

import Contact from '../components/contact'

const IndexPage = () => (
  <Layout>

    <Hero />
    <About />
    <Projects />
    <Contact />
  </Layout>
)

export default IndexPage
