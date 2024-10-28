import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { addToPastes, updateToPastes } from "../redux/pasteSlice";

const Home = () => {
  const [title, setTitle] = useState("");
  const [value,setValue]= useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const pasteId  = searchParams.get("pasteId");

  const dispatch = useDispatch();

  function createPaste(){
    const paste = {
        title: title,
        content: value,
        _id: pasteId ||
        Date.now().toString(36),
        createdAt: new Date().toISOString(),
    }

    if(pasteId){
        //update 
        dispatch(updateToPastes(paste));
    }else{
        //create
        dispatch(addToPastes(paste));
    }

    //after creation or updation

    setTitle('');
    setValue('');
    setSearchParams({});
  }

  return (
    <div>
        <div className="flex flex-row gap-7 place-content-between">
      <input 
      className="p-3  rounded-2xl mt-2 w-[66%] pl-4"
        type="text"
        placeholder="enter title here"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={createPaste}className="p-3  rounded-2xl mt-2">{
        pasteId ? "Update My Paste " : "Create My Paste"} </button>
    </div>
    <div className="mt-8">
        <textarea  className="rounded-2xl mt-4 min-w-[500px] p-4"value={value} placeholder="enter content here" onChange={(e)=>setValue(e.target.value)} row={20}/>
    </div>
    </div>
  );
};

export default Home;