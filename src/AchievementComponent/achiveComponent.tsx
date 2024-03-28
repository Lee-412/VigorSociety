import './Achieve.css'
import LineProgress from "./LineProgression";

const AchieveComponent = () => {
    return (
        <div className="achieve-container">
            <h1>Thành tựu</h1>
            <div className="list-item">
                <LineProgress rate={100}/>
                <h3>100 days running challenge</h3>
            </div>
            <div className="list-item">
                <LineProgress rate={75}/>
                <h3>Workout for 1 hour everyday</h3>
            </div>
            <div className="list-item">
                <LineProgress rate={71}/>
                <h3>Perform muscle up</h3>
            </div>
            <div className="list-item">
                <LineProgress rate={63}/>
                <h3>Perform planche</h3>
            </div>
            <div className="list-item">
                <LineProgress rate={30}/>
                <h3>100 days running challenge</h3>
            </div>
        </div>
    )
}
export default AchieveComponent;