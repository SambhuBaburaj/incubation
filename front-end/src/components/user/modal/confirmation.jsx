import React from "react";
import { useState } from "react";
import confimation from "./modal";
function confirmation({ setcancel, widraw }) {
  const confirm = () => {
    widraw(
      
    );
  };
  const cancelbutton = () => {
    setcancel(false);
  };

  return (
    <div className="mt-10   bg-zinc-200 opacity-80 fixed inset-0 z-50   ">
      <div className="flex h-screen justify-center items-center ">
        <main class="antialiased bg-gray-200 text-gray-900 font-sans overflow-x-hidden">
          <div class="relative px-4 min-h-screen md:flex md:items-center md:justify-center">
            <div class="bg-white rounded-lg md:max-w-md md:mx-auto p-4 fixed inset-x-0 bottom-0 z-50 mb-4 mx-4 md:relative">
              <div class="md:flex items-center">
                <div class="mt-4 md:mt-0 md:ml-6 text-center md:text-left">
                  <p class="font-bold">are you sure</p>
                  <p class="text-sm text-gray-700 mt-1">
                    You will lose your reservaion . This action cannot be
                    undone.
                  </p>
                </div>
              </div>
              <div class="text-center md:text-right mt-4 md:flex md:justify-end">
                <button
                  onClick={confirm}
                  class="block w-full md:inline-block md:w-auto px-4 py-3 md:py-2 bg-red-200 text-red-700 rounded-lg font-semibold text-sm md:ml-2 md:order-2"
                >
                  Delete
                </button>
                <button
                  onClick={cancelbutton}
                  class="block w-full md:inline-block md:w-auto px-4 py-3 md:py-2 bg-gray-200 rounded-lg font-semibold text-sm mt-4
          md:mt-0 md:order-1"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default confirmation;
