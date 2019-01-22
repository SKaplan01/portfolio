import React, { Component } from 'react'
import ModalLayout from '../ModalLayout'
import JoblyDetails from '../atoms/JoblyDetails'
import FaneronDetails from '../atoms/FaneronDetails'
import './ProjectDetails.css'

const style = {
  display: 'flex',
  alignItems: 'center',
  textAlign: 'right',
  position: 'fixed',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  width: '100vw',
  height: '100vh',
  backgroundColor: 'rgba(255, 255, 255, 0.5)',
  zIndex: 100000,
}

const projectDetailsStyle = {
  border: '2px solid black',
  padding: '2em',
  backgroundColor: 'white',
  width: '90%',
  height: '90%',
  margin: '0 auto',
  overflow: 'scroll',
  fontSize: '.8em',
}

const buttonStyle = {
  backgroundColor: '255, 255, 255, 0',
  border: 'none',
  size: '2em',
}

class ProjectDetails extends Component {
  render() {
    let { theme } = this.props
    let innerContent
    if (this.props.project === 'Jobly') {
      innerContent = <JoblyDetails theme={theme} />
    } else if (this.props.project === 'Faneron') {
      innerContent = <FaneronDetails theme={theme} />
    }
    return (
      <ModalLayout>
        <div style={style}>
          <div style={projectDetailsStyle}>
            <button style={buttonStyle} onClick={this.props.toggleModal}>
              X
            </button>
            <div id="DetailsContentContainer">
              {innerContent}
              <div style={{ textAlign: 'left' }}>
                <button
                  onClick={this.props.toggleModal}
                  style={{
                    backgroundColor: theme,
                    fontSize: '0.8em',
                    borderRadius: '5px',
                  }}
                >
                  <span
                    style={{
                      letterSpacing: '.15em',
                      color: 'rgb(240,240,240)',
                      fontSize: '0.9em',
                      textTransform: 'uppercase',
                    }}
                  >
                    Close
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </ModalLayout>
    )
  }
}

export default ProjectDetails
