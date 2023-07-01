import "./header.css";

import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faCalendar,
  faCalendarDays,
  faPerson,
} from "@fortawesome/free-solid-svg-icons";
import { faPlane } from "@fortawesome/free-solid-svg-icons";
import { faCar } from "@fortawesome/free-solid-svg-icons";
import { faTaxi } from "@fortawesome/free-solid-svg-icons";

import { DateRange } from "react-date-range";
import { useState } from "react";

const Header = () => {

    const [openDate, setOpenDate] = useState(false)

  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  return (
    <div className="header">
      <div className="headerContainer">
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
        </div>
        <h1 className="headerTitle">A life of discounts is genius</h1>
        <p className="headerDescription">get rewader for your travels</p>
        <button className="headerBtn">Sign in / register</button>
        <div className="headerSearch">
          <div className="headerSerachItem">
            <FontAwesomeIcon icon={faBed} className="headerIcon" />
            <input
              type="text"
              placeholder="where are you going"
              className="headerSearchInput"
            />
          </div>
          <div className="headerSerachItem">
            <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
            <span onClick={() => setOpenDate(!openDate)} className="headerSearchText">{`${format(
              date[0].startDate,
              "yyyy/MM/dd"
            )} to ${format(date[0].endDate, "yyyy/MM/dd")}`}</span>

            { openDate &&
            <DateRange
              editableDateInputs={true}
              onChange={(item) => setDate([item.selection])}
              moveRangeOnFirstSelection={false}
              ranges={date}
              className="date"
            />
            }



          </div>
          <div className="headerSerachItem">
            <FontAwesomeIcon icon={faPerson} className="headerIcon" />
            <span className="headerSearchText">2 adults</span>
          </div>
          <div className="headerSerachItem">
            <button className="headerBtn">Search</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
