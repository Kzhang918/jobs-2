import React, {Component} from 'react';
import {Button, Form, Input} from "antd";

import This from "./index.module.css"

class Search extends Component {
    render() {
        return (
            <div>
                <Form onFinish={this.onFinish} className={This['demo-form-inline']}>
                    <Form.Item label="Anfrage eingeben" name="keyWord">
                        <Input className={This.input}/>
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

    onFinish() {
        console.log("finish")
    }
}

export default Search;