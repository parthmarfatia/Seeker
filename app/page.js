import SwipeCard from "@/components/SwipeCard";
import { Button } from "@/components/ui/button";
export default function Home() {
  return (
    <div className="flex items-center justify-center h-full">
      <Button variants="primary">
        <SwipeCard />
      </Button>
    </div>
  );
}
