import React, {Component} from "react";
import {ExamplesList} from "./ExamplesList";
import {RoutesList} from "./RoutesList";
import "./Layouts.css";

export class Layout extends Component {
    render() {
        const {routes} = this.props;
        return (
            <div className="examples-layout">
                <ExamplesList routes={routes} />
                <RoutesList routes={routes} />
            </div>
        )
    }
}
