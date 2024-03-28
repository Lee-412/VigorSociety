import {
    Button,
    Cascader,
    DatePicker,
    Form,
    Input,
    InputNumber,
    Mentions,
    Modal,
    Select,
    TreeSelect,
} from 'antd';
import TextArea from 'antd/es/input/TextArea';
import { useState } from 'react';


const FormUser = () => {
    return (
        <>
                <Form
                    name="basic"
                    layout="vertical"
                >
                    <Form.Item
                        label="Name"
                        name="name"
                        rules={[{ required: true, message: 'Please input your name!' }]}
                        style={{ marginBottom: "5px" }}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item

                        label="Email"
                        name="email"
                        rules={[{ type: 'email', required: true }]}
                        style={{ marginBottom: "5px" }}>
                        <Input />
                    </Form.Item>

                    <Form.Item
                        name='age'
                        label="Age"
                        rules={[{ required: true, type: 'number', min: 0, max: 150 }]}
                        style={{ marginBottom: "5px" }}>
                        <InputNumber style={{ width: "100%" }} />
                    </Form.Item>

                    <Form.Item
                        label="Address"
                        name="address"
                        rules={[{ required: true, message: 'Please input your address!' }]}
                        style={{ marginBottom: "5px" }}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        name="gender" label="Gender"
                        rules={[{ required: true }]}
                        style={{ marginBottom: "5px" }}>
                    </Form.Item>

                    <Form.Item
                        name="infor" label="problem"
                        rules={[{ required: true }]}
                        style={{ marginBottom: "5px" }}>
                        <TextArea placeholder='Vấn đề mà bạn gặp phải' />


                    </Form.Item>



                </Form>
        </>
    )
};

export default FormUser;