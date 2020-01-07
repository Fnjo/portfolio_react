import React from 'react'
import './ProjectContent.scss'
import PropTypes from 'prop-types'
import { CSSTransition } from 'react-transition-group'

export class ProjectContent extends React.Component {
    static propTypes = {
        activeProject: PropTypes.string,
        fadeOut: PropTypes.bool
    }

    currentProject = 0

    render() {
        const { children, activeProject, fadeOut } = this.props

        this.currentProject = children.findIndex(
            project => project.key === activeProject
        )

        if (this.currentProject >= 0) {
            return (
                <CSSTransition
                    appear={true}
                    in={fadeOut}
                    timeout={10}
                    classNames={'fadeOutText'}
                >
                    <div className={`projectContent fadeInText`}>
                        {children[this.currentProject]}
                    </div>
                </CSSTransition>
            )
        } else {
            return null
        }
    }
}
