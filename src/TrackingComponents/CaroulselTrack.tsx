import './Tracking_Nutrion.tsx'
import './Tracking.css'
import TrackingComponent from './Tracking_Nutrion.tsx'

interface  Data {
    name: string,
}

function CarouselTracking (props: Data) {
    
    return (
        <div className='progress'>
            <h1>{props.name}</h1>
            <TrackingComponent/>
        </div>
    )
}

export default CarouselTracking
