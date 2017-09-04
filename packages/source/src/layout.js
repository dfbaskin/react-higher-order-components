import React, {Component} from "react";
import {ExamplesList} from "./examples-list";
import {RoutesList} from "./routes-list";
import "./layouts.css";

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
