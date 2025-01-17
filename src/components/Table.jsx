import React from "react";

function Table({modal, setModal}) {
  return (
    <div
      style={{
        display: modal ? "block" : "none",
      }}
      className="w-[500px] bg-slate-300 rounded-xl  p-3 kill"
    >
      <div className="flex items-center justify-between ">
        <h1 className="font-bold text-2xl mb-5 mt-6">Oquvchi Malumotlari</h1>
        <button
          className="text-3xl"
          onClick={() => {
            setModal(false);
          }}
        >
          ⨉
        </button>
      </div>
      <div className="mb-6 ">
        <label className="text-xl block" htmlFor="Ism">
          Ism
        </label>
        <input className="w-full p-3 mb-4 rounded-lg border-none" type="text" />

        <label className="text-xl block" htmlFor="Familiya">
          Familiya
        </label>
        <input className="w-full p-3 mb-4 rounded-lg border-none" type="text" />

        <label className="text-xl block" htmlFor="Yosh">
          Yosh
        </label>
        <input
          className="w-full p-3 mb-4 rounded-lg border-none"
          type="number"
        />

        <label className="text-xl block" htmlFor="Sinf  ">
          Sinf
        </label>
        <input
          className="w-full p-3 mb-4 rounded-lg border-none"
          type="number"
        />
      </div>
      <div className="flex justify-end gap-3 text-white mb-5">
        <button
          onClick={() => {
            setModal(false);
          }}
          className="p-2 rounded-lg bg-red-500"
        >
          Bekor Qilish
        </button>
        <button className="p-2 rounded-lg bg-green-500">Saqlash</button>
      </div>
    </div>
  );
}

export default Table;
