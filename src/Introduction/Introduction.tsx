import { MessageOutlined, SearchOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { useState } from "react";


const Introduction = () => {
    const [isHovered, setIsHovered] = useState(false);


    return (
        <>
            <div style={{ position: "relative" }}>
                <img
                    style={{
                        borderRadius: "15px"
                    }}
                    src="https://caas.athenahealth.com/sites/default/files/styles/webp_image_style/public/banr-sgp32500_startup_ah_lander_r3_0_0.webp?itok=RwW6oGpH" alt="" />
                <div style={{
                    position: "absolute",
                    top: "50%",
                    left: "18%",
                    transform: "translate(-50%, -50%)",
                    padding: "10px 20px",
                    color: "white",
                    width: "300px",
                }}>
                    <p
                        style={{
                            fontSize: "20px",
                            textAlign: "left",
                            fontFamily: "Georgia",
                            fontWeight: "bold"
                        }}>Starting Healthy Habits. <br /><br />Hãy tìm sự độc lập với một đối tác ủng hộ thành công của bạn</p>
                    <p
                        style={{
                            fontSize: "10px",
                            textAlign: "left",
                            fontFamily: "Arial"
                        }}>Vigor Society giúp đơn giản hóa những phức tạp khi bắt đầu một thói quen tốt cho sức khỏe, để bạn có thể tập trung vào chăm sóc bệnh nhân.</p>
                </div>
                <button style={{
                    position: "absolute",
                    top: "80%",
                    left: "15%",
                    transform: "translate(-50%, -50%)",
                    padding: "10px 20px",
                    borderRadius: "50px",
                    backgroundColor: isHovered ? "rgb(32 122 15 / 75%)" : "rgb(44 189 17 / 75%)",
                    border: "1px solid #ccc",
                    color: "white",
                    fontWeight: "bold",
                    cursor: "pointer",
                    transition: "background-color 0.3s ease",
                    paddingBlock: "5px"
                }}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >   Go to article   </button>
            </div>
            <div className="quote">
                <div>
                    <div
                        style={{
                            display: "flex",
                        }}>
                        <img
                            style={{
                                width: "500px",
                                marginLeft: "70px",
                                marginTop: "30px",
                                borderRadius: "15px"
                            }}
                            src="https://caas.athenahealth.com/sites/default/files/styles/webp_image_style/public/IMG-Start-up1.webp?itok=GiBMx0hP" alt="" />
                        <div style={{
                            display: "flex",
                            marginLeft: "80px",
                            paddingTop: "100px", flexDirection: "column"

                        }}>
                            <div style={{
                                fontWeight: "bolder",
                                color: "blueviolet",
                                fontSize: "35px",
                            }}>Key milestones for starting a practice</div>
                            <br></br>
                            <br></br>
                            <div style={{
                                fontSize: "20px"
                            }}>
                                Bạn có đam mê của mình, có cuộc sống của chính mình, nhưng liệu bạn có mọi thứ để biến nó thành hiện thực <br />
                                Hạnh phúc lớn nhất trong cuộc đời không phải là bạn có bao nhiêu của cải. Sức khỏe là của cải quý giá nhất trong cuộc sống, và bình yên là niềm hạnh phúc lớn nhất trong cuộc đời.
                            </div>

                        </div>

                    </div>

                    <div
                        style={{
                            display: "flex",
                        }}>
                        <div style={{
                            display: "flex",
                            marginLeft: "150px",
                            paddingTop: "100px", flexDirection: "column"

                        }}>
                            <div style={{
                                fontWeight: "bolder",
                                color: "blueviolet",
                                fontSize: "35px",
                            }}>Starting your practice step-by-step</div>
                            <br></br>
                            <br></br>
                            <div style={{
                                display: "flow",
                                fontSize: "20px"
                            }}>
                                Đơn vị nhỏ nhất của nỗ lực là hơi thở. <br />
                                Hoàn thành chặng đường với từng bước một để kết quả được chắc chắn nhất
                            </div>

                        </div>
                        <img
                            style={{
                                width: "500px",
                                marginLeft: "30px",
                                marginTop: "30px",
                                borderRadius: "15px"
                            }}
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpSpS0YBQysVQJHbwAvME97-orNDurREil_w&usqp=CAU" alt="" />


                    </div>
                    <div
                        style={{
                            display: "flex",
                        }}>
                        <img
                            style={{
                                width: "500px",
                                marginLeft: "70px",
                                marginTop: "30px",
                                borderRadius: "15px"
                            }}
                            src="data:image/jpeg;base64,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" alt="" />
                        <div style={{
                            display: "flex",
                            marginLeft: "80px",
                            paddingTop: "100px", flexDirection: "column"

                        }}>
                            <div style={{
                                fontWeight: "bolder",
                                color: "blueviolet",
                                fontSize: "35px",
                            }}>Maintain the habit and success is waiting for you</div>
                            <br></br>
                            <br></br>
                            <div style={{
                                fontSize: "20px"
                            }}>
                                Sẽ không có điều kì diệu nếu nỗ lực của bạn chỉ là ảo tưởng <br />
                                Thay đổi tư duy, duy trì thói quen, tập luyện cho chính bản thân mình, và đợi chờ thành quả
                            </div>

                        </div>
                    </div>
                </div>
            </div >

            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    margin: "50px"
                }}>
                <img src="src\Imgae\sources.png" alt="" />
            </div>

            <Button icon={<MessageOutlined />}
                size="large"
                style={{
                    position: "fixed",
                    top: "auto",
                    bottom: "55px",
                    left: "95%",

                }}>

            </Button>
        </>
    )
}

export default Introduction;    