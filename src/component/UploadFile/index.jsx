import React, {Component} from 'react';
import {Button, Form, Input} from "antd";

import This from "./index.module.css"

class Index extends Component {
    constructor(props) {
        super(props);
        this.$refs = {}
    }

    render() {
        return (
            <div>
                <Form onFinish={this.onFinish} className={This['demo-form-inline']}>
                    <Form.Item label="文件" name="file">
                        <input type="file" ref={c => this.$refs.file = c} className={This.input}/>
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" className={This.submit}>
                            上传
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        )
            ;
    }

    onFinish() {
        console.log("finish")
    }
}

export default Index;