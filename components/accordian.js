import { Fragment } from "react";
function Accordian() {
  return (
    <Fragment>
      <h1 className="h1">Analysis and Design of Algorithms</h1>
      <div className="flex flex-row justify-center items-center">
        <div className="tabs">
          <div className="tab">
            <input
              className="hidden"
              type="checkbox"
              id="heading-checkbox-1"
              name="heading-checkbox-1"
            />
            <label className="tab-label" htmlFor="heading-checkbox-1">
              Algorithms Introduction
            </label>
            <div className="tab-content">
              Some data! Lorem ipsum dolor sit amet consectetur, adipisicing
              elit. Ipsum, reiciendis!
            </div>
          </div>
          <div className="tab">
            <input
              className="hidden"
              type="checkbox"
              id="heading-checkbox-2"
              name="heading-checkbox-2"
            />
            <label className="tab-label" htmlFor="heading-checkbox-2">
              Divide and Conquer Approach
            </label>
            <div className="tab-content">
              Some data again!! Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Ipsum, reiciendis!
            </div>
          </div>
          <div className="tab">
            <input
              className="hidden"
              type="checkbox"
              id="heading-checkbox-3"
              name="heading-checkbox-3"
            />
            <label className="tab-label" htmlFor="heading-checkbox-3">
              Greedy Algorithms
            </label>
            <div className="tab-content">
              Lots of data! Lorem ipsum dolor sit amet consectetur, adipisicing
              elit. Ipsum, reiciendis! Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Quas culpa architecto veniam facere distinctio
              quaerat voluptatibus minima, maxime quae modi esse repudiandae
              laudantium delectus illum nihil nulla officia eligendi ut quos
              fugiat ducimus est rerum ipsa perferendis. Assumenda porro
              reiciendis saepe laboriosam maiores aut incidunt et tempora
              nostrum! Nostrum, aut!
            </div>
          </div>
          <div className="tab">
            <input
              className="hidden"
              type="checkbox"
              id="heading-checkbox-4"
              name="heading-checkbox-4"
            />
            <label className="tab-label" htmlFor="heading-checkbox-4">
              Graph Algorithms
            </label>
            <div className="tab-content">
              Dynamic Programming and Backtracking
              <ul>
                <li>item 1</li>
                <li>item 2</li>
                <li>item 3</li>
                <li>item 4</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Accordian;
