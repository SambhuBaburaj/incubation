import React from "react";
import { useState } from "react";
import confimation from "./modal";
function Infocard({ info, userdata }) {
    console.log(userdata);
    console.log();

  const cancelbutton = () => {
    console.log('gerinngb');
    info(false);
  };

  return (
    <div className="mt-10   bg-zinc-200 opacity-80 fixed inset-0 z-50   ">
      <div className="flex h-screen justify-center items-center ">
        <div class="flex items-center justify-between">
          <div class="border-0 rounded-lg shadow-lg relative flex flex-col w-full min-w-[400px] bg-white outline-none focus:outline-none">
            <div class="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t"></div>
            <div class="relative p-6 flex-auto">
              <table>
                <tbody class="flex flex-col ">
                  <tr class="pt-2">
                    <th class="text-right pr-2 w-[35%]">Name : </th>
                    <td width="200px">{userdata.name}</td>
                  </tr>
                  <tr class="pt-2">
                    <th class="text-right pr-2 w-[35%]">Email : </th>
                    <td width="200px">{userdata.email}</td>
                  </tr>
                  <tr class="pt-2">
                    <th class="text-right pr-2 w-[35%]">Phone : </th>
                    <td width="200px">{userdata.phone}</td>
                  </tr>
                  <tr class="pt-2">
                    <th class="text-right pr-2 w-[35%] align-top">
                      Address :{" "}
                    </th>
                    <td width="200px">
                    {userdata.address} <br/>{userdata.city}   </td>
                  </tr>
 
                  <tr class="pt-2">
                    <th class="text-right pr-2 w-[35%]">Status : </th>
                    <td width="200px">{userdata.status}</td>
                  </tr>
                  
   
                </tbody>
              </table>
            </div>
            <button onClick={cancelbutton} class=" flex justify-center items-center  bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 rounded">
  ok
</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Infocard;
