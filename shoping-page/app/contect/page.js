"use client";
import { addDoc, collection } from "firebase/firestore";
import { db } from "@/config/firebase";
import { useState } from "react";

const Contect = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [course, setCourse] = useState("");
  const submitHandeler = async () => {
    let student = {
      name: userName,
      email,
      course,
    };
    try {
      const collectionName = collection(db, "abs");
      await addDoc(collectionName, student);
      console.log("Document written with ID:");
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <div>
      <h1 className="font-bold text-indigo-600 text-5xl text-center">
        Contect us directly
      </h1>

      {/* <form className="p-4 mt-10 mx-auto text-center space-y-4"> */}
      <input
        placeholder="Enter your name"
        onChange={(e) => setUserName(e.target.value)}
      ></input>
      <input
        placeholder="Enter your email"
        onChange={(e) => setEmail(e.target.value)}
      ></input>
      <input
        placeholder="Enter cource name"
        onChange={(e) => setCourse(e.target.value)}
      ></input>
      <button onClick={submitHandeler}>submit</button>
      {/* </form> */}
    </div>
  );
};

export default Contect;
