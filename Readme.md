# Frontend Setup

### HomePage.jsx

```jsx
import React from "react";

const HomePage = () => {
  return (
    <div className="pt-5">
      <h1 className="text-2xl font-bold mb-5">Add Task</h1>
      <form>
        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium text-gray-900 ">
            Title
          </label>
          <input
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Task title"
            required
          />
        </div>
        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium text-gray-900 ">
            Description
          </label>
          <textarea
            rows="4"
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Task description..."
          ></textarea>
        </div>

        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default HomePage;
```

### TaskListPage.jsx

```jsx
import React from "react";
import Badge from "../components/Badge";
import { Link } from "react-router-dom";
const TaskListPage = () => {
  return (
    <div className="pt-5">
      <h1 className="text-2xl font-bold mb-5">My Tasks</h1>

      <div className="border p-3 rounded-md mb-5">
        <h3 className="text-lg font-semibold">
          <span className="me-2">
            If you can't wait for a new release to test the latest features, you
            will need to clone the
          </span>
          <Badge props={{ color: "blue", text: "Pending" }} />
        </h3>
        <p className="line-clamp-2 mb-3">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, quam
          excepturi obcaecati placeat voluptates laboriosam delectus rerum
          dignissimos inventore explicabo numquam, ex quia nam odit. Impedit
          vitae error adipisci dolor!
        </p>
        <div className="flex gap-5 items-center">
          <Link className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  text-center inline-flex items-center p-2">
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeWidth="2"
                d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z"
              />
              <path
                stroke="currentColor"
                strokeWidth="2"
                d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>
          </Link>
          <button className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm  text-center inline-flex items-center p-2">
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskListPage;
```

### Layout.jsx

```jsx
import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";
const Layout = () => {
  return (
    <div className="max-w-screen-sm mx-auto mt-10 p-5 shadow-sm border rounded">
      <Navigation />
      <Outlet />
    </div>
  );
};

export default Layout;
```

### Navigation.jsx

```jsx
import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { RouteIndex, RouteTaskList } from "../helper/RouteName";

const Navigation = () => {
  const location = useLocation();

  const buttonClass =
    "py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100";

  const activeButtonClass =
    "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none";

  return (
    <div className="pb-5 border-b flex gap-5">
      <NavLink
        to={RouteIndex}
        className={({ isActive }) =>
          isActive ? activeButtonClass : buttonClass
        }
      >
        Add Task
      </NavLink>
      <NavLink
        to={RouteTaskList}
        className={({ isActive }) =>
          isActive ? activeButtonClass : buttonClass
        }
      >
        My Task
      </NavLink>
    </div>
  );
};

export default Navigation;
```

### Badge.jsx

```jsx
import React from "react";

const Badge = ({ props }) => {
  return (
    <>
      {props.color === "blue" && (
        <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded">
          {props.text}
        </span>
      )}
      {props.color === "red" && (
        <span className="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded ">
          {props.text}
        </span>
      )}
      {props.color === "green" && (
        <span className="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded ">
          {props.text}
        </span>
      )}
      {props.color === "yellow" && (
        <span className="bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded ">
          {props.text}
        </span>
      )}
    </>
  );
};

export default Badge;
```
