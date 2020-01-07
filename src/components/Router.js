import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { IntroView } from './views/IntroView'
import { ProjectsView } from './views/ProjectsView'

const Router = () => (
    <BrowserRouter>
        <div className={'mainContent'}>
            <Switch>
                <Route exact path='/' component={IntroView} />
                <Route path='/projects' component={ProjectsView} />
                <Route component={ProjectsView} />
            </Switch>
        </div>
    </BrowserRouter>
)

export default Router
