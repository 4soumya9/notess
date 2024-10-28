import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useSearchParams } from "react-router-dom";
import { addToPastes, updateToPastes } from "../redux/pasteSlice";

const ViewPaste = () => {
  const {id} = useParams();
  const allPastes = useSelector((state) => state.paste.pastes);
  const paste = allPastes.filter((p) =>p._id === id)[0];
  // this will return a Array. Thats why we use only first element in this Array
  return (
    <div>
      <div className="flex flex-row gap-7 place-content-between">
        <input
          className="p-3  rounded-2xl mt-2 w-[66%] pl-4"
          type="text"
          placeholder="enter title here"
          value={paste.title}
          disabled
          onChange={(e) => setTitle(e.target.value)}
        />
       
      </div>
      <div className="mt-8">
        <textarea
          className="rounded-2xl mt-4 min-w-[500px] p-4"
          value={paste.content}
          placeholder="enter content here"
          disabled
          onChange={(e) => setValue(e.target.value)}
          row={20}
        />
      </div>
    </div>
  );
};

export default ViewPaste;
