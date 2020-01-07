import React from 'react'
import amsterdam from './../../images/amsterdam.svg'
import PropTypes from 'prop-types'

export class AboutMe extends React.Component {
    static propTypes = {
        onClick: PropTypes.func
    }

    render() {
        return (
            <div className={'aboutMe'}>
                <p className='name'>
                    Hello, I'm <span>Franjo Lam</span>
                </p>
                <p className={'job1'}>Front-end Developer</p>
                <p className={'job2'}> UX Designer</p>
                <p className={'location'}>Based in Amsterdam</p>
                <button id={'showprojects'} onClick={this.props.onClick}>
                    View projects
                </button>
                <img
                    src={amsterdam}
                    alt={'Amsterdam'}
                    className={'amsterdam'}
                />
            </div>
        )
    }
}
