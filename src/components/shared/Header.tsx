"use client";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  GitPullRequest,
  Layout,
  Plus,
  Question,
  SidebarSimple,
} from "@phosphor-icons/react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "../ui/tabs";

export default function Header() {
  return (
    <div className="bg-gray-100">
      <div className="flex items-center justify-between gap-2 h-[42px] border-b-[1px]">
        <div className="flex items-center gap-2 px-2">
          <SidebarSimple />
          <div className="border w-[1px] h-7" />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">All Projects</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Untitled Project</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        <div className="flex items-center gap-2 px-2">
          <Button size={"sm"} className="text-sm h-7">
            Export data
          </Button>
          <div className="rounded-full bg-gray-200 p-1">
            <Question />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between gap-2 h-[42px]">
        <div className="flex items-center gap-2 px-2">
          <Button size={"sm"} variant={"outline"} className="text-sm h-7 gap-1">
            <SidebarSimple />
            Main
          </Button>
          <div className="border w-[1px] h-7" />
          <Button
            size={"sm"}
            variant={"ghost"}
            className="text-sm text-gray-400 h-7 gap-1"
          >
            <Plus />
            New stage
          </Button>
        </div>
        <Tabs defaultValue="1" className="px-2">
          <TabsList className="bg-gray-200 h-8">
            <TabsTrigger value="1">
              <Layout />
            </TabsTrigger>
            <TabsTrigger value="2">
              <Layout />
            </TabsTrigger>
            <TabsTrigger value="3">
              <GitPullRequest />
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
    </div>
  );
}
