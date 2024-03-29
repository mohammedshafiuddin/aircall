import React from "react";
import { useGetAllActivities, useUnarchiveActivity } from "../api-calls";
import phoneOutMissed from "../assets/phone-out-missed.svg";
import phoneOut from "../assets/phone-out.svg";
import phoneIn from "../assets/phone-in.svg";
import phoneInMissed from "../assets/phone-in-missed.svg";
import ActivityRow from "./ActivityRow";
import HorizBtn from "./HorizBtn";

function Archived() {
  const { data: activityData, refetch: refetchActivities } =
    useGetAllActivities({ onSuccess: () => {} });
  const {
    mutate: unArchiveActivity,
    reset: resetUnArchiveFn,
    isLoading: isUnArchiving,
  } = useUnarchiveActivity({
    onSuccess: () => {
      refetchActivities();
      resetUnArchiveFn();
    },
  });

  let filteredActivities;
  if (activityData)
    filteredActivities = activityData.filter((activity) => {
      return (
        activity.is_archived &&
        activity.to &&
        activity.from &&
        activity.direction
      );
    });

  function unArchiveAll() {
    let ids = filteredActivities.map((activity) => activity.id);
    unArchiveActivity(ids);
    // !isUnArchiving && refetchActivities();
  }

  return (
    <div className="w-full">
      <HorizBtn title="Unarchive All" action={unArchiveAll} />
      {filteredActivities?.map((activity) => (
        <ActivityRow unArchiveFn={unArchiveActivity} activity={activity} />
      ))}
    </div>
  );
}

export default Archived;
