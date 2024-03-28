import { useState } from "react";


const Introduction = () => {
    const [isHovered, setIsHovered] = useState(false);


    return (
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
                borderRadius: "5px",
                backgroundColor: isHovered ? "rgb(150 225 137)" : "rgb(31 145 10 / 50%)",
                border: "1px solid #ccc",
                color: "#333",
                fontWeight: "bold",
                cursor: "pointer",
                transition: "background-color 0.3s ease",
            }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >Go to article</button>
        </div>
    )
}

export default Introduction;