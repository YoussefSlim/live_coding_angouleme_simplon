import React, { useContext } from "react";
import { FirstContext } from "../context/firstContext";

export default function ComposantC() {
  const { count } = useContext(FirstContext);
  console.log("count :>> ", count);
  return <div>ComposantC</div>;
}
