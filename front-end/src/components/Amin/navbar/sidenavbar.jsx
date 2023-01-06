import { useState } from "react";
import ApplicationList from "../content/applicationList";
import "./style/sidebar.css";
import { SidebarData } from "./sideNavebarData";
import { useEffect } from "react";
import instance from "../../../connections/axios/axios";
export default function Sidebar() {
  const [open, setOpen] = useState(false);
  let [menu, setmenu] = useState(1);

  // const [tabledata, settabledata] = useState([]);

  const config = {
    headers: {
      "content-type": "application/json",
    },
  };

  // useEffect(() => {
  //   instance.get("/admin/tabledata", config).then((data) => {
  //     console.log(data.data);
  //     settabledata(data.data);
  //   });
  // }, [menu]);

  return (
    <div className="flex ">
      <div
        className={` ${
          open ? "w-40" : "w-60 "
        } flex flex-col h-screen p-3 bg-gray-800 shadow duration-300`}
      >
        <div className="space-y-3">
          {/* <div className="flex items-center justify-between">
                        <h2 className="text-xl font-bold text-white">
                            Dashboard
                        </h2>
                        <button onClick={() => setOpen(!open)}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-6 h-6 text-white"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </button>
                    </div> */}
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center py-4">
              <button
                type="submit"
                className="p-2 focus:outline-none focus:ring"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </span>
            <input
              type="search"
              name="Search"
              placeholder="Search..."
              className="w-full py-2 pl-10 text-sm rounded-md focus:outline-none"
            />
          </div>
          <div className=" flex-1">
            <ul className="sidebarlist">
              {SidebarData.map((val,key) => {
                return (
                  <li
                    className="rounded-sm row  hover:bg-gray-900 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 flex MenuItems"
                    key={key}
                    id={menu == val.nav ? "active" : " "}
                    onClick={() => {
                      setmenu(val.nav);
                    }}
                  >
                    <div className=" hover:bg-gray-900 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 flex MenuItems">
                      <div className="text-white text-1xl pb-4 pt-1">
                        {val.icon}
                      </div>
                      <div className="text-gray-100 text-1xl pb-4 font-bold">
                        {val.title}
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>

      <ApplicationList props={menu} />
    </div>
  );
}
