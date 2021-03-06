import React from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import ClickAwayListener from '@material-ui/core/ClickAwayListener'
import Grow from '@material-ui/core/Grow'
import Paper from '@material-ui/core/Paper'
import Popper from '@material-ui/core/Popper'
import MenuItem from '@material-ui/core/MenuItem'
import MenuList from '@material-ui/core/MenuList'
import { withStyles } from '@material-ui/core/styles'
import { runInDebugContext } from 'vm'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const styles = theme => ({
  root: {
    display: 'flex',
  },
  paper: {
    marginRight: theme.spacing.unit * 2,
  },
})

class MenuListComposition extends React.Component {
  state = {
    open: false,
  }

  handleToggle = () => {
    this.setState(state => ({ open: !state.open }))
  }

  handleClose = event => {
    if (this.anchorEl.contains(event.target)) {
      return
    }

    this.setState({ open: false })
  }

  render() {
    const { classes } = this.props
    const { open } = this.state
    return (
      <div className={classes.root}>
        <div style={{ margin: '0px', textAlign: 'right' }}>
          <Button
            buttonRef={node => {
              this.anchorEl = node
            }}
            style={{ paddingTop: '0px', marginTop: '0px' }}
            aria-owns={open ? 'menu-list-grow' : undefined}
            aria-haspopup="true"
            onClick={this.handleToggle}
          >
            <FontAwesomeIcon icon="bars" color="rgb(206, 206, 206)" size="2x" />
          </Button>
          <Popper open={open} anchorEl={this.anchorEl} transition disablePortal>
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                id="menu-list-grow"
                style={{
                  transformOrigin:
                    placement === 'bottom' ? 'center top' : 'center bottom',
                }}
              >
                <Paper>
                  <ClickAwayListener onClickAway={this.handleClose}>
                    <MenuList>
                      <MenuItem onClick={this.handleClose}>Home</MenuItem>
                      <MenuItem onClick={this.handleClose}>About</MenuItem>
                      <MenuItem onClick={this.handleClose}>Contact</MenuItem>
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>
        </div>
      </div>
    )
  }
}

MenuListComposition.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(MenuListComposition)
