import React from "react";
import "../css/Static.css";

const Static = () => {
  return (
    <div>
      <div className="fixed-part flex">
        <div className="fixed-part-outer flex">
          <div>
            <i className="fa-solid fa-building-columns fa-3x  icon"></i>
          </div>
          <div className="fixed-part-inner-right">
            <div className="fixed-part-title">
              <h4> University Life</h4>
            </div>
            <div className="fixed-part-caption">
              <h6>Overall in here</h6>
            </div>
          </div>
        </div>

        <div className="fixed-part-outer flex">
          <div>
            <i class="fa-solid fa-graduation-cap fa-3x  icon"></i>
          </div>
          <div className="fixed-part-inner-right">
            <div className="fixed-part-title">
              <h4> Graduation</h4>
            </div>
            <div className="fixed-part-caption">
              <h6>Getting Diploma</h6>
            </div>
          </div>
        </div>

        <div className="fixed-part-outer flex">
          <div>
            <i class="fa-solid fa-ranking-star fa-3x  icon"></i>
          </div>
          <div className="fixed-part-inner-right">
            <div className="fixed-part-title">
              <h4> Club Life</h4>
            </div>
            <div className="fixed-part-caption">
              <h6>Overall in here</h6>
            </div>
          </div>
        </div>

        <div className="fixed-part-outer flex">
          <div>
            <i class="fa-solid fa-users fa-3x  icon"></i>
          </div>
          <div className="fixed-part-inner-right">
            <div className="fixed-part-title">
              <h4> Social</h4>
            </div>
            <div className="fixed-part-caption">
              <h6>Overall in here</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Static;
