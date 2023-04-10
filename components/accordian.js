import { Fragment } from "react";
function Accordian() {
  return (
    <Fragment>
        <h1 className="h1">Analysis and Design of Algorithms</h1>
        <p>Syllabus</p>
         <div className="flex flex-row justify-center items-center">
        <div class="tabs">
          <div class="tab">
            <input
              className="hidden"
              type="checkbox"
              id="heading-checkbox-1"
              name="heading-checkbox-1"
            />
            <label class="tab-label" for="heading-checkbox-1">
            Algorithms Introduction
            </label>
            <div class="tab-content">
              Some data! Lorem ipsum dolor sit amet consectetur, adipisicing
              elit. Ipsum, reiciendis!
            </div>
          </div>
          <div class="tab">
            <input
              className="hidden"
              type="checkbox"
              id="heading-checkbox-2"
              name="heading-checkbox-2"
            />
            <label class="tab-label" for="heading-checkbox-2">
            Divide and Conquer Approach
            </label>
            <div class="tab-content">
              Some data again!! Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Ipsum, reiciendis!
            </div>
          </div>
          <div class="tab">
            <input
              className="hidden"
              type="checkbox"
              id="heading-checkbox-3"
              name="heading-checkbox-3"
            />
            <label class="tab-label" for="heading-checkbox-3">
            Greedy Algorithms
            </label>
            <div class="tab-content">
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
          <div class="tab">
            <input
              className="hidden"
              type="checkbox"
              id="heading-checkbox-4"
              name="heading-checkbox-4"
            />
            <label class="tab-label" for="heading-checkbox-4">
            Graph Algorithms
            </label>
            <div class="tab-content">
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
