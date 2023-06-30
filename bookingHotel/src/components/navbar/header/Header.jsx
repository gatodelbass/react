import "./header.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faBed} from "@fortawesome/free-solid-svg-icons"
import {faPlane} from "@fortawesome/free-solid-svg-icons"
import {faCar} from "@fortawesome/free-solid-svg-icons"
import {faTaxi} from "@fortawesome/free-solid-svg-icons"

  const Header = () => {
  return (
    <div className="header">
        <div className="headerList">
            <div className="headerListItem active">
                <FontAwesomeIcon icon={faBed} />
                <span>Stays</span>
            </div>
            <div className="headerListItem">
                <FontAwesomeIcon icon={faPlane} />
                <span>Flights</span>
            </div>
            <div className="headerListItem">
                <FontAwesomeIcon icon={faCar} />
                <span>Car rentals</span>
            </div>
            <div className="headerListItem">
                <FontAwesomeIcon icon={faTaxi} />
                <span>Airport taxis</span>
            </div>
            <h1 className="headerTitle">
                A life of discounts is genius
            </h1>
            <p className="headerDescription">get rewader for your travels</p>
            <button className="headerButton">
                Sign in / register
            </button>
        </div>
    </div>
  )
}

export default Header