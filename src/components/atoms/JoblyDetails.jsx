import React, { Component } from 'react'
import jobly from '../../assets/jobly.gif'
import jobly_search from '../../assets/jobly_search.gif'

class JoblyDetails extends Component {
  render() {
    let { theme } = this.props
    return (
      <div id="joblyDetails">
        <h1 style={{ color: theme }}>Jobly</h1>
        <hr />
        <p>
          Jobly is a mock app where users can view job postings and apply for
          open positions. The frontend is built with React and styled with
          ReactStrap, while the backend is built with Node / Express and a
          PostgreSQL database. The app uses JSON web tokens for authentication
          and authorization.
        </p>
        <p>
          Live demo:{' '}
          <a
            style={{ textShadow: 'none', backgroundImage: 'none' }}
            href="https://jobilly.herokuapp.com/"
          >
            https://jobilly.herokuapp.com/
          </a>
        </p>
        <ul>
          <li>Username: test</li>
          <li>Password: password</li>
        </ul>
        <div style={{ textAlign: 'center' }}>
          <img src={jobly} alt="" />
        </div>
        <br />
        <p>
          <a
            style={{ textShadow: 'none', backgroundImage: 'none' }}
            href="https://github.com/SKaplan01/jobly"
          >
            View on Github
          </a>
        </p>
        <p>
          One challenge I faced during this project was implementing a live
          search feature so that the list of jobs is automatically filtered as
          the user types. This was a challenge because we wanted to make sure we
          didn’t slow our application down by firing off an API call with every
          keystroke. To solve this problem, we used a debounce function to make
          sure an API call only occured when a user had stopped typing in the
          search bar for at least 800ms.
        </p>
        <div style={{ textAlign: 'center' }}>
          <img src={jobly_search} alt="" />
        </div>
        <br />
        <p>
          While implementing the live search, I learned a lot about the
          underlying logic of debounce functions. (They’re built with
          Javascript’s setTimeout function and use closure. Pretty cool!) If you
          want to learn more about debounce functions, check out{' '}
          <a href="https://skaplan01.github.io/debounce_presentation/#/">
            {' '}
            this presentation{' '}
          </a>{' '}
          I created for a lightning talk.
        </p>

        <p>
          Collaborators:{' '}
          <a
            style={{ textShadow: 'none', backgroundImage: 'none' }}
            href="https://github.com/skaplan01/"
          >
            Sarah Kaplan
          </a>{' '}
          and{' '}
          <a
            style={{ textShadow: 'none', backgroundImage: 'none' }}
            href="https://github.com/hasierpastor"
          >
            Hasier Pastor
          </a>
        </p>
      </div>
    )
  }
}

export default JoblyDetails
