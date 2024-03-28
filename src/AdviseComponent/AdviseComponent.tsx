import Icon from "@ant-design/icons";
import { Avatar, Card, Col, Row } from "antd";
import Meta from "antd/es/card/Meta";
import { useState } from "react";
import FormUser from "./form.user.information";
import CallComponent from "./CallComponent";

const AdviseComponent = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [showForm, setShowForm] = useState(false);
    const [isCallOpen, setIsCallOpen] = useState(false);


    const HandleClickInformation = () => {
        window.location.href = '/Information';
    };
    const HandleClickAdvisetoForm = () => {
        setIsModalOpen(true);
    }
    const handleClickAdviseCall = () => {
        setIsCallOpen(true);

    }

    return (
        <>
            <h1> Tư Vấn và hỗ trợ</h1>
            <div
                style={{ height: "50px" }}></div>
            <Row gutter={16}>
                <Col span={8}>
                    <div style={{
                        borderRadius: "15px",
                        backgroundColor: "#96b9ac"
                    }}
                    >
                        <Card style={{
                            display: "flex",
                            height: "350px",
                            textAlign: "center",
                            justifyContent: "center",
                            alignItems: "center",
                            backgroundColor: "#74c6cf",
                            borderRadius: "350px"

                        }}
                            bordered={false} onClick={() => HandleClickInformation()}>

                            <Meta
                                avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" />}
                                title="Tìm hiểu thông tin"
                                description="Tìm hiểu thông tin vấn đề mình gặp phải thông qua trang thông tin của hệ thông"
                            />
                        </Card>
                    </div>
                </Col>
                <Col span={8}>
                    <div style={{
                        borderRadius: "15px",
                        backgroundColor: "#d97373"
                    }}
                    >
                        <Card style={{
                            display: "flex",
                            height: "350px",
                            textAlign: "center",
                            justifyContent: "center",
                            alignItems: "center",
                            backgroundColor: "#f5c0c0",
                            borderRadius: "500px"

                        }}
                            bordered={false} onClick={() => HandleClickAdvisetoForm()}>

                            <Meta
                                avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" />}
                                title="Để lại yêu cầu"
                                description="Nếu bạn không quá gấp về việc tra cứu thông tin hoặc chuyên gia của chúng tôi đang không thể trả lời trực tiếp, hãy để lại cho chúng tôi một vài lời nhắn, chúng tôi sẽ trả lời sau"
                            />
                        </Card>
                    </div>
                </Col>
                <Col span={8}>
                    <div style={{
                        borderRadius: "15px",
                        backgroundColor: "#8dbd95"
                    }}>

                        <Card style={{
                            display: "flex",
                            height: "350px",
                            textAlign: "center",
                            justifyContent: "center",
                            alignItems: "center",
                            backgroundColor: "#84eb87",
                            borderRadius: "500px"
                        }}
                            bordered={false} onClick={() => handleClickAdviseCall()}>

                            <Meta
                                avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" />}
                                title="Tư vấn trực tiếp"
                                description="Liên hệ trực tiếp với chuyên gia của chúng tôi và trao đổi.
                                    (Bạn có thể phải chờ trong giây lát, vui lòng chuẩn bị thiết bị có camera và micro)"
                            />
                        </Card>

                    </div>
                </Col>
            </Row >

            <FormUser
                isModalOpen={isModalOpen}
                setIsModalOpen={setIsModalOpen}
            />
            <CallComponent
                isCallOpen={isCallOpen}
                setIsCallOpen={setIsCallOpen}
            />
        </>
    )
}
export default AdviseComponent;