import React from 'react'
import F from '../../images/fnjo/f.png'
import N from '../../images/fnjo/n.png'
import J from '../../images/fnjo/j.png'
import O from '../../images/fnjo/o.png'
import next from '../../images/next.png'
import { CSSTransition } from 'react-transition-group'
import DelayLink from '../DelayLink'
import './IntroView.scss'

export class IntroView extends React.Component {
    state = {
        exit: true
    }

    render() {
        const { exit } = this.state

        return (
            <div className={'intro'}>
                <CSSTransition
                    appear={true}
                    in={exit}
                    timeout={10}
                    classNames={'mainLogo_F'}
                >
                    <img
                        className='mainLogo_F fadeInUp'
                        src={F}
                        alt='Letter F'
                    />
                </CSSTransition>
                <CSSTransition
                    appear={true}
                    in={exit}
                    timeout={10}
                    classNames={'mainLogo_N'}
                >
                    <img
                        className='mainLogo_N fadeInUp'
                        src={N}
                        alt='Letter N'
                    />
                </CSSTransition>
                <CSSTransition
                    appear={true}
                    in={exit}
                    timeout={10}
                    classNames={'mainLogo_J'}
                >
                    <img
                        className='mainLogo_J fadeInUp'
                        src={J}
                        alt='Letter J'
                    />
                </CSSTransition>
                <CSSTransition
                    appear={true}
                    in={exit}
                    timeout={10}
                    classNames={'mainLogo_O'}
                >
                    <img
                        className='mainLogo_O fadeInUp'
                        src={O}
                        alt='Letter O'
                    />
                </CSSTransition>

                <CSSTransition
                    appear={true}
                    in={exit}
                    timeout={1000}
                    classNames={'toProjectsArrow'}
                >
                    <div className='toProjectsArrow'>
                        <DelayLink
                            clickAction={this.transitionOut}
                            to='/projects'
                            delay={1400}
                        >
                            <img src={next} alt={'arrow down'} />
                        </DelayLink>
                    </div>
                </CSSTransition>
            </div>
        )
    }

    transitionOut = () => {
        this.setState({
            exit: !this.state.exit
        })
    }
}
