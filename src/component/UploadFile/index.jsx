import React, {Component} from 'react';
import {Button, Form, Input,} from "antd";
import This from "./index.module.css"



class Upload extends Component {
    constructor(props) {
        super(props);
        this.$refs = {}

        this.onFinish = this.onFinish.bind(this)
    }

    render() {
        return (
            <div>
                <Form onFinish={this.onFinish} className={This['demo-form-inline']}>
                    <Form.Item label="Daten hochladen" name="file">
                        <Input type="file" ref={c => this.$refs.file = c} className={This.input}/>
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" className={This.submit}>
                        Bestätigt
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        )
            ;
    }

    // 回调函数，发送请求逻辑需要写在这里
    onFinish() {
        // 获取用户输入
        const {file} = this.$refs
        try {
            console.log(file.files)
        }catch (e) {

        }

    }
}


export default Upload;