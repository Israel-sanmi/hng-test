import React from "react";

const Atom = ({linkName}) => {
  return (
    <div className="w-full bg-[#EAECF0] py-10 text-center my-5">
      <p className="font-semibold text-[18px]">{linkName}</p>
    </div>
  );
};

export default Atom;
