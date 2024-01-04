import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "./services/axios";

export const useGetAllActivities = ({ onSuccess }) =>
  useQuery({
    queryKey: ["getActivities"],
    queryFn: () =>
      axios.request({
        method: "GET",
        // baseURL: baseURL,
        url: "activities",
      }),
    ...{ staleTime: Infinity, refetchOnWindowFocus: false, onSuccess },
  });

export const useArchiveActivity = ({ onSuccess }) => {
  return useMutation({
    mutationKey: ["archiveActivity"],
    mutationFn: (ids) => {
      let proms = ids.map((id) =>
        axios.request({
          method: "PATCH",
          url: `activities/${id}`,
          data: { is_archived: true },
        })
      );
      return Promise.all(proms);
    },
    ...{ onSuccess },
  });
};

export const useUnarchiveActivity = ({ onSuccess }) => {
  return useMutation({
    mutationKey: ["unarchiveActivity"],
    mutationFn: (ids) => {
      let proms = ids.map((id) =>
        axios.request({
          method: "PATCH",
          url: `activities/${id}`,
          data: { is_archived: false },
        })
      );
      return Promise.all(proms);
    },
    ...{ onSuccess },
  });
};


export const useReset = ({ onSuccess }) => {
  return useMutation({
    mutationKey: ["reset"],
    mutationFn: () => {
      return axios.request({
        method: "PATCH",
        url: "reset",
      });
    },
    ...{ onSuccess },
  });
}