import React from "react";

function HorizBtn({title,action}) {
  return (
    <div className="w-full px-12 mt-2 mb-4 rounded-md">
      <button onClick={action} className="w-full bg-slate-400 text-white font-bold py-2 rounded-md shadow-md">
        {title}
      </button>
    </div>
  );
}

export default HorizBtn;
