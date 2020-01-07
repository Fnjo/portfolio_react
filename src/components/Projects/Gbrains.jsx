import React from 'react'
import gbrainsMain from '../../images/gbrainsmain.png'
import showAll from '../../images/showall_b.png'
import PropTypes from 'prop-types'

export class GBrains extends React.Component {
    static propTypes = {
        onClick: PropTypes.func
    }

    render() {
        return (
            <div className={'gbrains'}>
                <div className={'projectContent-header'}>
                    <h2>G-Brains</h2>
                    <img
                        className='showallbtn'
                        src={showAll}
                        alt={'show all button'}
                        onClick={this.props.onClick}
                    />
                </div>
                <h3>Website</h3>

                <img
                    className='img_1'
                    src={gbrainsMain}
                    alt='G-brains website'
                />

                <p>I was responsible for building the website for G-brains.</p>

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
