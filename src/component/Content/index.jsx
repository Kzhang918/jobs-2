import React, {Component} from 'react';
import PubSub from "pubsub-js"

import Search from "../Search"
import Upload from "../UploadFile"
import CreateFEMDEMFEM from "../CreateFEMDEMFEM"
import CreateLaminierSimulation from "../CreateLaminierSimulation"
import This from "./index.module.css"

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {activeKey: 0}
    }


    componentDidMount() {
        // 解构赋值 相当于  const state= this.state
        const {state} = this

        state.pubsub = PubSub.subscribe("getKey", (_, key) => this.onGetActive(key))
        this.setState(state)
        PubSub.subscribe("getKey", (_, key) => this.onGetActive(key))
    }

    render() {
        const {state} = this
        const {activeKey} = state
        return (
            <div className={This['form-wrapper']}>
                <h2 className={This.title}>
                    <span>
                    {activeKey === 0 ? "SparqlQuery" : activeKey === 1 ? "Hochladen" : (activeKey === 2 ? "FEM-DEM-FEM Simulation" : "Laminiersimulation")}
                    </span>
                </h2>
                {activeKey === 0 ? <Search/> : activeKey === 1 ? <Upload/> : (activeKey === 2 ? <CreateFEMDEMFEM/> : <CreateLaminierSimulation/>)}
            </div>
        );
    }

    onGetActive(key) {
        const {state} = this
        state.activeKey = key
        this.setState(state)
    }

}

export default Content;