import React, { Fragment, useState } from "react";
import { useEffect } from "react";
import instance from "../../../connections/axios/axios";
import Modal from "../modal/modal";
import Confirmation from "../modal/confirmation";
export default function Bookpage() {



  const[cancel,setcancel]=useState(false)
  const [modalOn, setModelOn] = useState(false);
  const [choice, setChoice] = useState(false);
  const [user, setuser] = useState([]);
  const [reqslot, setslot] = useState([]);
const [widrawreq,setwidraw]=useState(1)

  const widraw=()=>
  {
    
    const user = JSON.parse(localStorage.getItem("user"));

instance.get(`/withdraw?userid=${user._id}`,config).then((data)=>
{
    setwidraw(widrawreq+1)
})
setcancel(false)
  }
  const config = {
    headers: {
      "content-type": "application/json",
    },
  };
  useEffect(() => {
    
    const user = JSON.parse(localStorage.getItem("user"));
    const response = instance({
      method: "get",
      url: `/seatrequest?userid=${user._id}`,
      headers: config,
    }).then((data) => {
      console.log(data.data.slot);
      if(data.data.slot)
      {
        setslot(data.data.slot);
      }
     else{
        setslot("");
     }
setuser(data.data.user)

    });
  },[modalOn,choice,widrawreq]);

  const clicked = () => {
    setModelOn(true);
  };
 
  const clickCanceled=()=>
  {
    setcancel(true)
  }
console.log(user);
console.log(reqslot);
  return (
    <Fragment>
      <div className="container mx-auto mt-20 px-60">
        <div className="flex flex-col">
          <div className="overflow-x-auto">
        

        {reqslot?  
            <button class="inline-block px-6 py-2.5 bg-gray-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-black hover:shadow-lg focus:bg-gray-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-700 active:shadow-lg transition duration-150 ease-in-out"
            >requested</button>:  <button  disabled={reqslot}
            onClick={clicked}
            type="button"
            class="inline-block px-6 py-2.5 bg-green-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg transition duration-150 ease-in-out"
          >
            Book your Seat
          </button>}
        
          

            <div className="p-1.5 w-full inline-block align-middle">
              <div className="overflow-hidden border rounded-lg">

              
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                      >
                        ID
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                      >
                        Name
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                      >
                        Email
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                      >
                        status
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                      >
                        slot No
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                      >
                        Delete
                      </th>
                    </tr>
                  </thead>


                  {reqslot? <tbody className="divide-y divide-gray-200">

<tr>
  <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
    1
  </td>
  <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
  {reqslot.name?reqslot.name:''}{reqslot.name}
  </td>
  <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
    {reqslot.email?reqslot.email:''}
  </td>
  <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
  {reqslot.status?reqslot.status:''}
  </td>
  <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
{reqslot.status=='pending'?"pending":(reqslot.seat?reqslot.seat:'')}
  </td>
  <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
    {/* <a onClick={widraw} className="text-red-500 hover:text-red-700" href="#"> */}
    <a onClick={clickCanceled} className="text-red-500 hover:text-red-700" href="#">

      widraw
    </a>
  </td>
</tr>
</tbody>:''}
                  



                </table>
              </div>
         
            </div>
          </div>
        </div>
       
      </div>
 
      {modalOn && <Modal setModelOn={setModelOn} setChoice={setChoice} />}

    {cancel&&<Confirmation setcancel={setcancel} widraw={widraw} />}
    
    </Fragment>
    
  );
}
