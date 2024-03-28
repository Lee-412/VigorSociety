import './Tracking_Nutrion.tsx'
import './Tracking.css'
import TrackingComponent from './Tracking_Nutrion.tsx'

interface  Data {
    name: string,
    rate: number
}

function CarouselTracking (props: Data) {
    
    return (
        <div className='progress'>
            <h3>{props.name}</h3>
            <TrackingComponent rate = {props.rate}/>
        </div>
    )
}

export default CarouselTracking
