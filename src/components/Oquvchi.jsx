import React from "react";

function Oquvchi({setModal, modal}) {
  return (
    <div
      className=" ml-[44%] pt-5"
      style={{
        opacity: modal ? "20%" : "100%",
      }}
    >
      <button
        onClick={() => {
          setModal(true);
        }}
        className="w-40  p-2 rounded-2xl text-white mx-auto bg-blue-600 "
      >
        ⨁ Oquvchi Qoshish
      </button>
    </div>
  );
}

export default Oquvchi;
