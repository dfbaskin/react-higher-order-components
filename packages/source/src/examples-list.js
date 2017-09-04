import React, {Component} from "react";
import {Link} from 'react-router-dom'
import "./examples-list.css";

export class ExamplesList extends Component {
    render() {
        const {routes} = this.props;
        return (
            <div className="examples-list">
                <div>Examples</div>
                <ul>
                    {routes.map((route, idx) => {
                        const {path, desc} = route;
                        return (
                            <li key={`item-${idx}`}>
                                <Link to={path}>{desc}</Link>
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}
