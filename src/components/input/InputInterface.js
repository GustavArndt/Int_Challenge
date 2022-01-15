import React from "react";
import InputCreator from "./InputCreator";

export default function InputInterface(props) {
  return (
    <div className="input-interface">
      <InputCreator events={props.events} setEvents={props.setEvents}/>
    </div>
  );
}
