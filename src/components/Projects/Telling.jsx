import React from 'react'
import tellingMain from '../../images/tellingmain.png'
import showAll from '../../images/showall_b.png'
import PropTypes from 'prop-types'

export class Telling extends React.Component {
    static propTypes = {
        onClick: PropTypes.func
    }

    render() {
        return (
            <div className={'telling'}>
                <div className={'projectContent-header'}>
                    <h2>TELLING</h2>
                    <img
                        className={'showallbtn'}
                        src={showAll}
                        alt={'Show all button'}
                        onClick={this.props.onClick}
                    />
                </div>
                <h3>Website</h3>
                <img
                    className='img_1'
                    src={tellingMain}
                    alt='telling website'
                />
                {/* <a
                    className='btn btn-primary'
                    href='https://tellinginsights.com/'
                    target='_blank'
                    rel='noopener noreferrer'
                    role='button'
                >
                    Visit website
                </a> */}
                <p>
                    For this project I was responsible for the corporate
                    identity of TELLING. I made the design for the logo and the
                    website which I also build. I came up with a design for
                    their logo that consists of two "1", one horizontally
                    flipped and the other one upside down. The two "1"
                    represents the data they are working with. Because it looks
                    likes a "N" the logo is also included into the full name
                    logo. TELLING is a company that focuses on data analytics
                    and more.
                </p>
                <h4>Tech sheet</h4>
                <ul>
                    <li>Sketch</li>
                    <li>HTML 5</li>
                    <li>CSS 3</li>
                    <li>Bootstrap</li>
                    <li>Javascript ES5</li>
                    <li>Jquery</li>
                </ul>
            </div>
        )
    }
}
