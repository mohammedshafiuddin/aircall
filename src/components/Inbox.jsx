import React from "react";
import { useArchiveActivity, useGetAllActivities } from "../api-calls";
import phoneOutMissed from "../assets/phone-out-missed.svg";
import phoneOut from "../assets/phone-out.svg";
import phoneIn from "../assets/phone-in.svg";
import phoneInMissed from "../assets/phone-in-missed.svg";
import ActivityRow from "./ActivityRow";
import HorizBtn from "./HorizBtn";

function Inbox() {
  const { data: activityData, refetch:refetchActivities } = useGetAllActivities({ onSuccess: () => {} });
  const {mutate: archiveActivity} = useArchiveActivity({ onSuccess: refetchActivities });
  let filteredActivities;
  if (activityData)
    filteredActivities = activityData.filter((activity) => {
      return (
        !activity.is_archived &&
        activity.to &&
        activity.from &&
        activity.direction
      );
    });

    function archiveAll() {
      let ids = filteredActivities.map((activity) => activity.id);
      archiveActivity(ids);
    }

  return (
    <div className="w-full">
      <HorizBtn title="Archive All" action={archiveAll} />
      {filteredActivities?.map((activity) => (
        <ActivityRow activity={activity} archiveFn={archiveActivity} />
      ))}
    </div>
  );
}

export default Inbox;
