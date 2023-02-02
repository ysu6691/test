import React from "react";

import Broadcast from "../broadcast/Broadcast";
import Owner from "../owner/Owner";

interface IProps {
  role: string;
}

const Room = function (props: IProps) {
  return <div>{props.role === "owner" ? <Owner /> : <Broadcast />}</div>;
};

export default Room;
