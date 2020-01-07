import React from 'react'
import './ProjectsNav.scss'
import { NavTile } from './NavTile'
import { CSSTransition } from 'react-transition-group'
import PropTypes from 'prop-types'
import tellingLogo from './../../images/logo/N_w.png'
import gbrainsLogo from './../../images/logo/g-brains-logo_W.svg'
import mrburgerLogo from './../../images/logo/mrburger_W.svg'
import tellingsocialLogo from './../../images/logo/tellingsociallogo_W.png'
import fintechLogo from './../../images/logo/logo-fintech_W.svg'
import F from './../../images/logo/f_W.svg'

export class ProjectsNav extends React.Component {
    static propTypes = {
        onClick: PropTypes.func,
        fadeIn: PropTypes.bool,
        activeProject: PropTypes.string
    }

    render() {
        const { onClick, fadeIn, activeProject } = this.props

        return (
            <CSSTransition
                appear={true}
                in={fadeIn}
                timeout={10}
                classNames={'fadeNav'}
            >
                <div className={'projectsNav fadeInRight'}>
                    <NavTile
                        name={'Telling'}
                        onClick={onClick}
                        imglink={tellingLogo}
                        imgwidth={'25%'}
                        imgwidthMobile={'17%'}
                        activeProject={activeProject}
                    />
                    <NavTile
                        name={'GBrains'}
                        size={'half'}
                        onClick={onClick}
                        imglink={gbrainsLogo}
                        activeProject={activeProject}
                    />
                    <NavTile
                        name={'MrBurger'}
                        onClick={onClick}
                        size={'half'}
                        imglink={mrburgerLogo}
                        activeProject={activeProject}
                    />
                    <NavTile
                        name={'TellingSocial'}
                        onClick={onClick}
                        imglink={tellingsocialLogo}
                        imgwidth={'40%'}
                        imgwidthMobile={'30%'}
                        activeProject={activeProject}
                    />
                    <NavTile
                        name={'FinTech'}
                        onClick={onClick}
                        size={'half'}
                        imglink={fintechLogo}
                        imgwidth={'65%'}
                        activeProject={activeProject}
                    />
                    <NavTile
                        name={'AboutMe'}
                        onClick={onClick}
                        size={'half'}
                        imglink={F}
                        imgwidth={'20%'}
                        activeProject={activeProject}
                    />
                </div>
            </CSSTransition>
        )
    }
}
