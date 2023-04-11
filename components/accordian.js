import { Fragment } from "react";
function Accordian(props) {
  const {item } = props;
  return (
    <>
    <div className="wrap">
      <div className="flex flex-row justify-center items-center">
        <div className="tabs">
          <div className="tab">
            <input
              className="hidden"
              type="checkbox"
              id={`heading-checkbox-`+`${item}`}
              name={`heading-checkbox-`+`${item}`}
            />
            <label className="tab-label" htmlFor={`heading-checkbox-`+`${item}`}>
              Algorithms Introduction
            </label>
            <div className="tab-content">
              Some data! Lorem ipsum dolor sit amet consectetur, adipisicing
              elit. Ipsum, reiciendis!
            </div>
          </div>
          
        </div>
      </div>
    </div>
    </> 
  );
}

export default Accordian;
