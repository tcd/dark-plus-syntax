import * as React from "react";
import { Component } from "react";

export default class About extends Component<IAboutProps,IAboutState> {
    constructor(props: IAboutProps) {
		super(props);
		console.log("this is not a useless constructor");
	}
    render() {
        return(
            <div className="container text-center">
                <h1>About</h1>
            </div>
        )
    }
}

interface IAboutProps {}

interface IAboutState {}
