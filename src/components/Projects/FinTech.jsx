import React from 'react'
import fintechmain from '../../images/fintechmain.png'
import showAll from '../../images/showall_b.png'
import PropTypes from 'prop-types'

export class FinTech extends React.Component {
    static propTypes = {
        onClick: PropTypes.func
    }

    render() {
        return (
            <div className={'finTech'}>
                <div className={'projectContent-header'}>
                    <h2>FinTech-Jobs</h2>
                    <img
                        className={'showallbtn'}
                        src={showAll}
                        alt={'Show all button'}
                        onClick={this.props.onClick}
                    />
                </div>
                <h3>Website</h3>

                <img
                    className={'img_1'}
                    src={fintechmain}
                    alt={'Fintech-jobs website'}
                />

                {/* <a
                    className='btn btn-primary'
                    href='https://www.fintech-jobs.nl/'
                    target='_blank'
                    role='button'
                    rel='noopener noreferrer'
                >
                    Visit website
                </a> */}

                <p>
                    I was responsible for building the website for FinTech-Jobs.
                </p>

                <h4>Tech sheet</h4>

                <ul>
                    <li>HTML 5</li>
                    <li>CSS 3</li>
                    <li>Bootstrap</li>
                    <li>Javascript ES5</li>
                </ul>
            </div>
        )
    }
}
