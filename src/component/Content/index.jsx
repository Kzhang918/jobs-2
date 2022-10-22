import React, {Component} from 'react';

import PubSub from "pubsub-js"

import Search from "../Search"
import Upload from "../UploadFile"
import CreateModule from "../CreateModule"
import This from "./index.module.css"

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {activeKey: 0}
    }


    componentDidMount() {
        const {state} = this
        state.pubsub = PubSub.subscribe("getKey", (key, val) => this.onGetActive(val))
        this.setState(state)
        PubSub.subscribe("getKey", (key, val) => this.onGetActive(val))
    }

    render() {
        const {state} = this
        const {activeKey} = state
        return (
            <div className={This['form-wrapper']}>
                <h2 className={This.title}>
                    <span>
                    {activeKey === 0 ? "查找" : (activeKey === 1 ? "上传" : "建立模型")}
                    </span>
                </h2>
                {activeKey === 0 ? <Search/> : (activeKey === 1 ? <Upload/> : <CreateModule/>)}
                <hbase-tool-index v-if="activeKey === 0"/>
                <upload-component-index v-else-if="activeKey === 1"/>
                <create-component-index v-else/>
            </div>
        );
    }

    onGetActive(key) {
        const {state} = this
        state.activeKey = key
        this.setState(state)
    }

}

export default Index;