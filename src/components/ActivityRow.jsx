import React from "react";
import phoneOutMissed from "../assets/phone-out-missed.svg";
import phoneOut from "../assets/phone-out.svg";
import phoneIn from "../assets/phone-in.svg";
import phoneInMissed from "../assets/phone-in-missed.svg";
import voicemail from "../assets/voicemail.svg";
import archiveIcon from "../assets/archive.svg";
import unArchiveIcon from "../assets/unarchive.svg";
import { useArchiveActivity } from "../api-calls";

const imgMap = {
  "outbound#missed": phoneOutMissed,
  "outbound#answered": phoneOut,
  "inbound#answered": phoneIn,
  "inbound#missed": phoneInMissed,
  "inbound#voicemail": voicemail,
  "outbound#voicemail": voicemail,
};

function format12HourTime(hours, minutes) {
  const period = hours >= 12 ? "pm" : "am";
  const formattedHours = hours % 12 || 12; // Convert 0 to 12 for 12-hour format
  const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;

  return `${formattedHours}:${formattedMinutes} ${period}`;
}

function ActivityRow({ activity, archiveFn, unArchiveFn }) {
  let iconString = `${activity.direction}#${activity.call_type}`;

  let imgSrc = imgMap[iconString];

  let callType = activity.call_type;
  let infoString = "";

  if (callType === "answered") infoString = "was on a call with";
  else if (callType === "missed") infoString = "was being called by";
  else if (callType === "voicemail") infoString = "was left a voicemail by";

  let time = format12HourTime(
    new Date(activity.created_at).getHours(),
    new Date(activity.created_at).getMinutes()
  );
  // console.log({id:activity.id})
  
  return (
    <div className="flex gap-3 activity-row px-3 py-1.5">
      <img src={imgSrc} alt="" className="w-6" />
      <div className="">
        <p className="text-sm font-bold">{activity.to.toString()}</p>
        <p className="text-md text-gray-400">
          <span className="text-sm">{`${infoString}`} </span>
          {activity.from.toString()}
        </p>
      </div>
      <div className="ml-auto flex items-center gap-2">
        <p className="text-sm text-gray-400">{time}</p>
        {archiveFn && (
          <button onClick={() => archiveFn([activity.id])}>
            <img src={archiveIcon} className="w-4 h-4" />
          </button>
        )}
        {unArchiveFn && (
          <button onClick={() => unArchiveFn([activity.id])}>
            <img src={unArchiveIcon} className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
}

export default ActivityRow;
