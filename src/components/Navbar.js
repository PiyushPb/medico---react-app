import React from "react";
import { IoCallSharp, IoMailOpen } from "react-icons/io5";

function Navbar() {
  return (
    <div>
      <div className="uppernavbar bg-white flex justify-end gap-10 p-3">
        <div className="flex justify-center items-center gap-5">
          <IoCallSharp />
          +9193265 82108
        </div>
        <div className="flex justify-center items-center gap-5">
          <IoMailOpen />
          piyushp0512@gmail.com
        </div>
      </div>
    </div>
  );
}

export default Navbar;
