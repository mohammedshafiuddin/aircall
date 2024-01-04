import React from "react";
import Header from "./Header.jsx";
import Tabs from "./components/tabs.jsx";
import { useReset } from "./api-calls.jsx";
import useClearApiData from "./hooks/useClearApiData.jsx";

const App = () => {
  const { mutate: resetActivities } = useReset({
    onSuccess: useClearApiData,
  });
  // const resetQueries = useClearApiData();
  const reset = () => {
    resetActivities();
  };
  return (
    <div className="flex justify-center overflow-y-scroll">
      <div className="wrapper relative">
        <div className="header-box flex sticky top-0 h-8 z-10 bg-lime-100 px-2 py-2">
          <Header />
          <button
            onClick={reset}
            className="ml-auto px-2 py-1 h-full underline text-gray-400"
          >
            Reset
          </button>
        </div>
        <div className="container-view w-[450px] h-[700px] justify-self-end">
          <Tabs />
        </div>
      </div>
    </div>
  );
};

export default App;
