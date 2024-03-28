import './Support.css'
import { useState } from "react";
import FormUser from "./form.support.information";
import CarouselAid from './CarouselSupport';

//const [isModalOpen, setIsModalOpen] = useState(false);

const Support = () => {
    return (
        <div className="Support">
            <FormUser/>
            <CarouselAid/>
        </div>
    )
}
export default Support;