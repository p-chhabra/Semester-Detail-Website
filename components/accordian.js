import { Fragment } from "react";
function Accordian(props) {
  const { item, topics, name } = props;
  let i = 0;
  return (
    <>
      <div className="wrap">
        <div className="flex flex-row justify-center items-center">
          <div className="tabs">
            <div className="tab">
              <input
                className="hidden"
                type="checkbox"
                id={`heading-checkbox-` + `${item}`}
                name={`heading-checkbox-` + `${item}`}
              />
              <label
                className="tab-label"
                htmlFor={`heading-checkbox-` + `${item}`}
              >
                {name}
              </label>
              <div className="tab-content">
                <div className="text-left">
                  {topics.map((topic) => {
                    return (
                      <p key={++i} className="m-3">
                        {topic}
                      </p>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Accordian;
