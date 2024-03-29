import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { Button } from "@/components/ui/button";
export function HomeSection() {
  return (
    <ResizablePanelGroup direction="horizontal">
      <ResizablePanel defaultSize={50}>
        <div className="grid grid-row-2 w-[70%] h-[350px] items-left justify-left p-6">
          <span className="font-extrabold text-6xl ">
           Bridging Job Seekers with Top Companies
          </span>
          <ul>
            <li className="font-semibold text-xl text-gray-700 dark:text-gray-800">
              Any job you can possibly think of
            </li>
            <li className="font-semibold text-xl text-gray-700 dark:text-gray-800">
              Save up to 90% & get quotes for free
            </li>
            <li className="font-semibold text-gray-700 dark:text-gray-800 text-xl">
              Pay only when you're 100% happy
            </li>
          </ul>
          <div className="space-x-6">
          <Button size="xl">
            <span className="text-2xl font-semibold"> Find Top Companies</span>
               
              </Button>
              <Button variant="outline" size="xl">
                <span className="text-2xl font-semibold">
                Create a Account
                </span>
                
              </Button>
          </div>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}
