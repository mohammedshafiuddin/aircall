import { Tab } from "@headlessui/react";
import Inbox from "./Inbox";
import Archived from "./Archived";
import AllCalls from "./AllCalls";
import classNames from "../utis";

var comps = [
  {
    name: "Inbox",
    component: Inbox,
  },
  {
    name: "Archived",
    component: Archived,
  },
  {
    name: "All Activities",
    component: AllCalls,
  },
];
export default function MyTabs() {
  return (
    <div className="">
      <Tab.Group as="div" className="relative">
        <Tab.List
          as="div"
          className= "flex justify-between px-8 sticky top-8 bg-lime-100 py-4 rounded-b-md" 
        >
          {comps.map((comp) => (
            <Tab
            key={comp.name} 
            className={({ selected }) =>
            classNames("px-3 py-2 rounded-md font-bold", 
            selected && "bg-lime-700 text-white"
            )
          }
            >{comp.name}</Tab>
          ))}
        </Tab.List>
        <Tab.Panels as="div" className="">
          {comps.map((comp) => (
            <Tab.Panel key={comp.name}>
              <comp.component />
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
