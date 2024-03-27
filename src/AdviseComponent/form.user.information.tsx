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


interface AdviseProps {
    isModalOpen: boolean,
    setIsModalOpen: (v: boolean) => void;
}

const FormUser = (props: AdviseProps) => {

    const { isModalOpen, setIsModalOpen } = props;


    const { Option } = Select;

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <>

            <Modal title="Thông tin tư vấn"
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
                maskClosable={false} >

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
                        <Select
                            placeholder="Select a option and change input text above"
                            allowClear
                        >
                            <Option value="MALE">male</Option>
                            <Option value="FEMALE">female</Option>
                            <Option value="OTHER">other</Option>
                        </Select>
                    </Form.Item>

                    <Form.Item
                        name="infor" label="problem"
                        rules={[{ required: true }]}
                        style={{ marginBottom: "5px" }}>
                        <TextArea placeholder='Vấn đề mà bạn gặp phải' />


                    </Form.Item>



                </Form>
            </Modal>
        </>
    )
};

export default FormUser;