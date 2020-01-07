import React from 'react'
import './NavTile.scss'
import PropTypes from 'prop-types'

export class NavTile extends React.Component {
    state = {
        isMobile: false
    }

    static propTypes = {
        size: PropTypes.oneOf(['full', 'half', 'half--left']),
        onClick: PropTypes.func.isRequired,
        name: PropTypes.string.isRequired,
        imglink: PropTypes.string.isRequired,
        imgwidth: PropTypes.string,
        imgwidthMobile: PropTypes.string,
        activeProject: PropTypes.string
    }

    static defaultProps = {
        size: 'full',
        imgwidth: '35%'
    }

    componentDidMount() {
        const mobile = window.matchMedia('(max-width: 770px)').matches
        if (mobile) {
            this.setState({
                isMobile: true
            })
        }
    }

    render() {
        const {
            size,
            onClick,
            name,
            imglink,
            imgwidth,
            imgwidthMobile,
            activeProject
        } = this.props
        const { isMobile } = this.state

        return (
            <div
                onClick={onClick}
                className={
                    activeProject === name
                        ? `navTile navTile-${size} navTile-isActive`
                        : `navTile navTile-${size}`
                }
                id={name}
            >
                <img
                    src={imglink}
                    alt={'logo img'}
                    width={
                        isMobile && imgwidthMobile ? imgwidthMobile : imgwidth
                    }
                />
            </div>
        )
    }
}
