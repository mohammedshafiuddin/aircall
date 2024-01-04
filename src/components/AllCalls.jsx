import React from "react";
import { useArchiveActivity, useGetAllActivities } from "../api-calls";
import phoneOutMissed from "../assets/phone-out-missed.svg";
import phoneOut from "../assets/phone-out.svg";
import phoneIn from "../assets/phone-in.svg";
import phoneInMissed from "../assets/phone-in-missed.svg";
import ActivityRow from "./ActivityRow";

function AllCalls() {
  const { data: activityData, refetchActivities } = useGetAllActivities({ onSuccess: () => {} });

  let filteredActivities;
  if (activityData)
    filteredActivities = activityData.filter((activity) => {
      return (
        // !activity.is_archived &&
        activity.to &&
        activity.from &&
        activity.direction
      );
    });

  console.log(filteredActivities, activityData);

  return (
    <div className="w-full">
      {
        filteredActivities?.map(activity => (
          <ActivityRow activity={activity} />
        ))
      }
    </div>
  );
}

export default AllCalls;
