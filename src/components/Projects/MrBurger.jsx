import React from 'react'
import mrburger_1 from '../../images/mrburgermenu_1.png'
import mrburger_2 from '../../images/mrburgermenu_2.png'
import showAll from '../../images/showall_b.png'
import PropTypes from 'prop-types'

export class MrBurger extends React.Component {
    static propTypes = {
        onClick: PropTypes.func
    }

    render() {
        return (
            <div className={'mrBurger'}>
                <div className={'projectContent-header'}>
                    <h2>Mr Burger</h2>

                    <img
                        className='showallbtn'
                        src={showAll}
                        alt={'show all button'}
                        onClick={this.props.onClick}
                    />
                </div>
                <h3>App Mockup</h3>

                <img
                    className='img_1'
                    src={mrburger_1}
                    alt='MrBurger Mockup 1'
                />
                <img
                    className='img_2'
                    src={mrburger_2}
                    alt='MrBurger Mockup 2'
                />

                <p>
                    This is a school project i've done a while ago. It is a
                    mockup for a burgerbar app/mobile menu.
                </p>

                <h4>Tech sheet</h4>

                <ul>
                    <li>Adobe Photoshop</li>
                </ul>
            </div>
        )
    }
}
