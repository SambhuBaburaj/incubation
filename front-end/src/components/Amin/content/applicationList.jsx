import React, { useEffect } from "react";
import { json } from "react-router-dom";
import instance from "../../../connections/axios/axios";
import Swal from "sweetalert2";
import { useState } from "react";
import SelectSlot from "../../user/modal/SelectSlot";
import Infocard from "../../user/modal/Infocard";
function ApplicationList(props) {
  const totalseat=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32]
  const config = {
    headers: {
      "content-type": "application/json",
    },
  };
  const [info,setinfo]=useState(false)
  const [tabledata, settabledata] = useState([]);
const [slotnummber,setslotnumber]=useState(0)
  const [reload, setreload] = useState(true);
  const [selectslot,setslot]=useState(false)
  const selectuser=(slot)=>
  {
   
    setslot(true)
    setslotnumber(slot)
  }
  useEffect(() => {
    instance.get("/admin/tabledata", config).then((data) => {
 
      settabledata(data.data);
    });
  }, [reload,selectslot]);

  const accept = (value) => {
    instance.get(`/admin/acceptrequest?userid=${value}`,config);
    setreload(!reload);

  };


  const reject = (value) => {
    instance.get(`/admin/rejectrequest?userid=${value}`, config);
    setreload(!reload);
  };

  if (props.props == 1) {
  
    return (
      <div className="container mx-auto mt-12 px-10">
        <div className="flex flex-col">
          <div className="overflow-x-auto">
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
                        full Details
                      </th>

                      <th
                        scope="col"
                        className=" px-6 py-3 text-xs font-bold r text-gray-500 uppercase "
                      >
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {tabledata.slice(0).reverse().map((val, key) => {
                      if (val.status == "pending") {
                        return (
                          <tr>
                            <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                              {key + 1}
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                              {val.name}
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                              {val.email}
                            </td>
                            <td className=" px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                              <a onClick={()=> setinfo(true)}
                                className="text-green-500 hover:text-green-700"
                                href="#"
                              >
                                details
                              </a>
                            </td>
                            <td className="flex  justify-center gap-5 items-center px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                              <button
                                onClick={() => accept(val._id)}
                                style={{ border: "1px solid green" }}
                                class="bg-transparent hover:bg-green-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-x-green-800 hover:border-transparent rounded"
                              >
                                accept
                              </button>
                              <button
                                onClick={() => reject(val._id)}
                                style={{ border: "1px solid red" }}
                                class="bg-transparent hover:bg-red-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded"
                              >
                                reject
                              </button>
                            </td>
                       {info&&     <Infocard info={setinfo} userdata={val} />}
                          </tr>
                          
                        );
                      }
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
     
      </div>
     
    );
  } else if (props.props == 2) {
    return (
      <div className="container mx-auto mt-12 px-10">
        <div className="flex flex-col">
          <div className="overflow-x-auto">
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
                        full Details
                      </th>

                      <th
                        scope="col"
                        className=" px-6 py-3 text-xs font-bold r text-gray-500 uppercase "
                      >
                        status
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {tabledata.slice(0).reverse().map((val, key) => {
                      if (val.status == "accepted"&& val.seat ===0) {
                        return (
                          <tr>
                            <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                              {key + 1}
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                              {val.name}
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                              {val.email}
                            </td>
                            <td className=" px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                              <a onClick={()=> setinfo(true)}
                                className="text-green-500 hover:text-green-700"
                                href="#"
                              >
                                details
                              </a>
                            </td>
                            <td className="flex  justify-center gap-5 items-center px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                              {val.status}
                            </td>
                       {info&&     <Infocard info={setinfo} userdata={val} />}

                          </tr>
                        );
                      }
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else if (props.props == 3) {


    return (
      <div className="container mx-auto mt-12 px-10">
        <div className="flex flex-col">
          <div className="overflow-x-auto">
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
                        full Details
                      </th>

                      <th
                        scope="col"
                        className=" px-6 py-3 text-xs font-bold r text-gray-500 uppercase "
                      >
                        status
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {tabledata.slice(0).reverse().map((val, key) => {
                      if (val.status == "Rejected") {
                        return (
                          <tr>
                            <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                              {key + 1}
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                              {val.name}
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                              {val.email}
                            </td>
                            <td className=" px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                              <a
                                className="text-green-500 hover:text-green-700"
                                href="#"
                              >
                                details
                              </a>
                            </td>
                            <td className="flex  justify-center gap-5 items-center px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                              {val.status}
                            </td>
                          </tr>
                        );
                      }
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    ); 
  } else if (props.props == 4) {
    return (
      <div className="container mx-auto mt-12 px-10">
      <div className="grid grid-cols-8 gap-4">
    
   
       {totalseat.map((val)=>
       {
       let flag=false
       console.log("ergie");
          tabledata.map((data)=>
          {
            if(val===data.seat)
        flag=true

          })

          return(
     

     <div onClick={flag?'':()=>{selectuser(val)}}>
     <div className={flag?"flex justify-center items-center box-border h-20 w-20 p-4 border-4 bg-orange-400 ":"flex justify-center items-center box-border h-20 w-20 p-4 border-4 ..."}>
     {val}
   </div> 
   
   </div>


        )
     
      
  
       })}
 
   


        </div>
        {selectslot&&<SelectSlot slot={setslot} slotnumber={slotnummber} tabledata={tabledata} />}
      </div>
    )
  }
  else if (props.props === 5) {

    

    return (
      <div className="container mx-auto mt-12 px-10">
        <div className="flex flex-col">
          <div className="overflow-x-auto">
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
                        full Details
                      </th>

                      <th
                        scope="col"
                        className=" px-6 py-3 text-xs font-bold r text-gray-500 uppercase "
                      >
                        status
                      </th>
                      <th
                        scope="col"
                        className=" px-6 py-3 text-xs font-bold r text-gray-500 uppercase "
                      >
                      seat Number
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {tabledata.slice(0).reverse().map((val, key) => {
                      if (val.seat !=0) {
                        return (
                          <tr>
                            <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                              {key + 1}
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                              {val.name}
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                              {val.email}
                            </td>
                            <td className=" px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                              <a onClick={()=> setinfo(true)}
                                className="text-green-500 hover:text-green-700"
                                href="#"
                              >
                                details
                              </a>
                            </td>
                            <td >
                              <div className="flex justify-center  px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                              {val.status}
                              </div>
                            </td>
                         
                            <td className="flex justify-center items-center px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                              {val.seat}
                            </td>
                            {info&&     <Infocard info={setinfo} userdata={val} />}

                          </tr>
                        );
                      }
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    ); 

  }
}

export default ApplicationList;
