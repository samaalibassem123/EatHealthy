"use client";

import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";

export function FoodForm() {
  return (
    <Drawer>
      <DrawerTrigger className="text-md animate-pulse outline p-1 px-2 hover:bg-amber-500 hover:animate-none hover:text-black transition  rounded-md cursor-pointer">
        Add Food for today
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Welcome To EatHealthy</DrawerTitle>
          <DrawerDescription>
            Please Describe what did you eat today and our Eathealthy Ai bot
            will Take care of the Calculation .
          </DrawerDescription>
        </DrawerHeader>
        <form action="" className="p-2 space-y-2.5">
          <Textarea placeholder="write what did u eat Here today !" />
          <Button variant={"outline"}>Calculate</Button>
        </form>
        <DrawerFooter>
          <form action="" className="w-full">
            <Button className="w-full">Save</Button>
          </form>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
