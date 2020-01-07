import React from 'react'
import tellingSocialMain from '../../images/tellingsocialmain.png'
import tellingSocialDashboard from '../../images/tellingdashboard.png'
import showAll from '../../images/showall_b.png'
import PropTypes from 'prop-types'

export class TellingSocial extends React.Component {
    static propTypes = {
        onClick: PropTypes.func
    }

    render() {
        return (
            <div className={'tellingSocial'}>
                <div className={'projectContent-header'}>
                    <h2>TELLING Social</h2>

                    <img
                        className={'showallbtn'}
                        src={showAll}
                        alt={'show all button'}
                        onClick={this.props.onClick}
                    />
                </div>
                <h3>Website & dashboard</h3>

                <img
                    className={'img_1'}
                    src={tellingSocialMain}
                    alt={'telling social website'}
                />

                {/* <a
                    className='btn btn-primary'
                    href='https://tellingsocial.com/'
                    target='_blank'
                    role='button'
                >
                    Visit website
                </a> */}

                <p>I designed and build the website for Telling Social</p>

                <h4>Tech sheet</h4>

                <ul>
                    <li>Sketch</li>
                    <li>HTML 5</li>
                    <li>CSS 3</li>
                    <li>Bootstrap</li>
                    <li>Javascript ES5</li>
                    <li>Jquery</li>
                </ul>

                <img
                    className='img_1'
                    src={tellingSocialDashboard}
                    alt={'telling dashboard'}
                />

                <p>
                    I was responsible for designing the dashboard and building
                    the front-end with the Laravel framework. Generating the
                    graphs was done with plotly.js.
                </p>

                <h4>Tech sheet</h4>

                <ul>
                    <li>Sketch</li>
                    <li>HTML 5</li>
                    <li>CSS 3</li>
                    <li>Laravel</li>
                    <li>Javascript ES5</li>
                    <li>Jquery</li>
                    <li>Plotly.js</li>
                </ul>
            </div>
        )
    }
}
