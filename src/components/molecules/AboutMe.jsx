import React, { Component } from 'react'
import headshot3 from '../../assets/headshot3.jpg'
import heron from '../../assets/heron.jpg'
import muir_woods from '../../assets/muir_woods.jpg'
import simba from '../../assets/simba.jpg'
import { Link } from 'gatsby'
import sarahKaplanResume from '../../assets/sarahKaplanResume.pdf'
import './AboutMe.css'

class AboutMe extends Component {
  render() {
    return (
      <div id="aboutContainer">
        <div id="floated">
          <img src={headshot3} alt="" />
        </div>
        <div id="aboutInfo">
          <h2>About me</h2>
          <p>
            I'm a React and Node / Express developer looking for new
            opportunities. As a former K-12 teacher, I'm passionate about edTech
            and its potential to personalize and accelerate student learning.
            You can check out my work{' '}
            <Link
              style={{
                color: '#3846c7',
              }}
              to="/"
            >
              here
            </Link>{' '}
            and on{' '}
            <a
              style={{
                color: '#3846c7',
              }}
              href="https://github.com/SKaplan01"
            >
              Github,
            </a>{' '}
            or download my{' '}
            <a
              href={sarahKaplanResume}
              target="_blank"
              style={{
                color: '#3846c7',
              }}
            >
              resume
            </a>
            .
          </p>
          <p>
            I started my career in Boston as a high school English and Special
            Education teacher in an inclusion classroom where students with
            disabilities were educated alongside their peers. In order to try to
            meet the needs of students with a wide range of skill levels, I
            started to incorporate more technology into my classroom. I could
            adjust the difficulty of a text with Newsela, add vocabulary hints
            to a novel on a Kindle, let students brainstorm in a Google Doc
            using text-to-speech software, or collect instant data about student
            comprehension by polling my class with Kahoot.
          </p>
          <p>
            There were even e-learning platforms that automatically adjusted
            questions to target students’ skill gaps. I started to wonder about
            these applications. How were they built? What assumptions were being
            made about teaching and learning? What would I build if I knew how
            to code?
          </p>
          <p>
            This curiosity (and a desire to some day make the perfect chatbot
            reading tutor) inspired me to sign up for an introductory Javascript
            course. I fell in love with coding right away. I could create
            something, test it, see the results immediately, and then try to
            improve what I had created.
          </p>

          <p>
            I enrolled in Rithm School&mdash;a 17-week intensive, in-person
            program focused on React, Node, Python, PostgreSQL, and data
            structures. During this program, I had the chance to develop several
            new features for Faneron, an e-commerce site that sells lipstick to
            benefit progressive organizations. It was exciting to jump into a
            new codebase with an unfamiliar tech stack (their site is built with
            GatsbyJS and GraphQL) and to realize how quickly I could contribute
            (thanks, Gatsby docs!). You can check out my work for Faneron{' '}
            <Link
              style={{
                color: '#3846c7',
              }}
              to="/"
            >
              here
            </Link>
            .
          </p>
          <p>
            Now I’m looking for new opportunities to solve challenging problems
            by writing clean, testable code.
          </p>
          <p>
            When I’m not coding, you can find me birdwatching, hiking, and
            snuggling with my cats!
          </p>
          <div id="pictureRow">
            <img src={heron} alt="" />
            <img src={muir_woods} alt="" />
            <img src={simba} alt="" />
          </div>
        </div>
      </div>
    )
  }
}

export default AboutMe
