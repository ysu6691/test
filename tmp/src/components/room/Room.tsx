import React from "react";

import BroadcastVideo from "../broadcast/BroadcastVideo";
import Owner from "../owner/Owner";

interface IProps {
  role: string;
}

const Room = function (props: IProps) {
  console.log(props.role);
  return <div>{props.role === "owner" ? <Owner /> : <BroadcastVideo selectedFeed="지렁" />}</div>;
};

export default Room;
