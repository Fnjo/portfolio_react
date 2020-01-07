import React from 'react'
import './ProjectsView.scss'
import { ProjectsNav } from './../nav/ProjectsNav'
import { ProjectContent } from '../ProjectContent'
import { AboutMe } from '../Projects/AboutMe'
import { Telling } from '../Projects/Telling'
import { GBrains } from '../Projects/Gbrains'
import { FinTech } from '../Projects/FinTech'
import { TellingSocial } from '../Projects/TellingSocial'
import { MrBurger } from '../Projects/MrBurger'

export class ProjectsView extends React.Component {
    state = {
        activeProject: 'AboutMe',
        fadeIn: true,
        showNav: true,
        isMobile: false,
        fadeNav: true
    }

    componentDidMount() {
        const mobile = window.matchMedia('(max-width: 770px)').matches

        if (mobile) {
            this.setState({
                showNav: false,
                isMobile: true
            })
        }
    }

    timeOutTimeMobile = 350
    timeOutTime = 500

    render() {
        const { fadeIn, activeProject, showNav, fadeNav } = this.state

        return (
            <div className={'projects'}>
                {showNav && (
                    <ProjectsNav
                        fadeIn={fadeNav}
                        onClick={e => this.changeProject(e)}
                        activeProject={activeProject}
                    />
                )}
                {
                    <ProjectContent
                        activeProject={activeProject}
                        fadeOut={fadeIn}
                    >
                        <AboutMe
                            onClick={this.showNavOnMobile}
                            key={'AboutMe'}
                        />
                        <Telling
                            onClick={this.showNavOnMobile}
                            key={'Telling'}
                        />
                        <TellingSocial
                            onClick={this.showNavOnMobile}
                            key={'TellingSocial'}
                        />
                        <GBrains
                            onClick={this.showNavOnMobile}
                            key={'GBrains'}
                        />
                        <FinTech
                            onClick={this.showNavOnMobile}
                            key={'FinTech'}
                        />
                        <MrBurger
                            onClick={this.showNavOnMobile}
                            key={'MrBurger'}
                        />
                    </ProjectContent>
                }
            </div>
        )
    }

    changeProject = e => {
        const projectID = e.currentTarget.id
        const { isMobile, activeProject } = this.state

        this.setState({
            fadeIn: false
        })

        if (isMobile) {
            this.setState({
                fadeNav: false
            })

            setTimeout(() => {
                this.setState({
                    activeProject: projectID,
                    fadeIn: true,
                    fadeNav: true,
                    showNav: false
                })
            }, this.timeOutTimeMobile)
        } else {
            setTimeout(() => {
                if (projectID === activeProject) {
                    this.setState({
                        activeProject: 'AboutMe',
                        fadeIn: true
                    })
                } else {
                    this.setState({
                        activeProject: projectID,
                        fadeIn: true,
                        fadeNav: true,
                        showNav: true
                    })
                }
            }, this.timeOutTime)
        }
    }

    showNavOnMobile = () => {
        this.setState({
            fadeIn: false
        })

        setTimeout(() => {
            this.setState({
                activeProject: '',
                showNav: true
            })
        }, this.timeOutTimeMobile)
    }
}
