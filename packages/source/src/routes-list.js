import React, {Component} from "react";
import {Route} from 'react-router-dom'

export class RoutesList extends Component {
    render() {
        const {routes} = this.props;
        return (
            <div>
                {routes.map((route, idx) => {
                    const {path, component} = route;
                    const routeProps = {
                        path,
                        component,
                        key: `route-${idx}`
                    };
                    return (
                        <Route {...routeProps} />
                    )
                })}
            </div>
        )
    }
}
