"use client";

import * as React from "react";
import { Check, Plus, Send } from "lucide-react";

import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import client, { appWriteConfige } from "@/actions/appwrite/appwriteConfige";
import { useMutation, useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import { useUserStore } from "@/actions/zustand/userState";
import { useDataStore } from "@/actions/zustand/dataState";
import { useSendMessage } from "@/actions/tanstack/mutasion";
import { useGetMessages } from "@/actions/tanstack/query";
import { Doc, Id } from "./_generated/dataModel";
const users = [
  {
    name: "Olivia Martin",
    email: "m@example.com",
    avatar: "/avatars/01.png",
  },
  {
    name: "Isabella Nguyen",
    email: "isabella.nguyen@email.com",
    avatar: "/avatars/03.png",
  },
  {
    name: "Emma Wilson",
    email: "emma@example.com",
    avatar: "/avatars/05.png",
  },
  {
    name: "Jackson Lee",
    email: "lee@example.com",
    avatar: "/avatars/02.png",
  },
  {
    name: "William Kim",
    email: "will@email.com",
    avatar: "/avatars/04.png",
  },
] as const;

type User = (typeof users)[number];

export function CardsChat({setOpenChat, receiver, sender, admin}:{setOpenChat:(p:boolean)=>void, receiver:string, sender:string, admin:boolean}) {
  const [open, setOpen] = React.useState(false);
  const [selectedUsers, setSelectedUsers] = React.useState<User[]>([]);
  const lastMessageRef = React.useRef<HTMLDivElement | null>(null);
  const sendMessage = useMutation(api.chats.sendMessage);
  const messages = useQuery(api.chats.getMessages, {sender:sender, reciever:receiver});
  const [input, setInput] = React.useState("");
  const inputLength = input.trim().length;
  const user = useUserStore((state) => state.user)


 const {mutateAsync:sendgMessage} = useSendMessage()
 const {data} = useGetMessages(user?.$id!)

 console.log(data);
 
  
 const populatFormFn = useDataStore((state:any)=> state.populatFormFn)
  const openChart = useUserStore((state:any)=> state.openChatFn)
  return (
    <>
      <Card className="w-full h-full relative ">
        <CardHeader className="flex flex-row sticky top-0 z-50 h-16 bg-white items-center justify-between">
          <div className="flex items-center space-x-4">
            <Avatar className="bg-gray-100">
              <AvatarImage src="/avatars/01.png" alt="Image" />
              <AvatarFallback>OM</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-medium leading-none">Sofia Davis</p>
              <p className="text-sm text-muted-foreground">m@example.com</p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-6">
              <TooltipProvider delayDuration={0}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  size="icon"
                  variant="outline"
                  className="ml-auto rounded-full"
                  onClick={() => setOpen(true)}
                >
                  <Plus />
                  <span className="sr-only">New message</span>
                </Button>
              </TooltipTrigger>
              <TooltipContent sideOffset={10}>New message</TooltipContent>
            </Tooltip>
          </TooltipProvider>
          
          <span onClick={()=> openChart()}>
            X
          </span>
          </div>
        

        </CardHeader>
        <CardContent className=" py-6 w-full relative overflow-y-auto overflow-x-hidden h-full bg-gray-200">
          <div className="space-y-4 w-full h-full">
            {messages?.map(
              (message:{  sender: string,
                body: string,
                reciever:string,
                role:string,
                time:string},idx: number) => {
                  const isLastMessage = messages?.length -1 === idx
               
                switch (message?.role) {
                  case "agent":
                    return (
                      <div
                        ref={isLastMessage ? lastMessageRef : null}
                        key={idx}
                        className="flex gap-2"
                      >
                        <Avatar className="bg-gray-300 hidden">
                          <AvatarImage src="/avatars/01.png" alt="Image" />
                          <AvatarFallback>OM</AvatarFallback>
                        </Avatar>
                        <div className="w-auto max-w-xl max-h-auto relative bg-white rounded-b-xl rounded-tr-xl text-black  py-3 px-2 shadow-[0_10px_40px_0px_rgba(0,0,0,0.15)]">
                          <div className="chat-container  pt-3">
                            <div className="container">
                              <p className="message">{message?.body}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  case "user":
                    return (
                      <div
                        ref={isLastMessage ? lastMessageRef : null}
                        key={idx}
                        className="flex gap-2 flex-row-reverse"
                      >
                        <Avatar className={`bg-blue-500 text-white hidden `}>
                          <AvatarImage src="/avatars/01.png" alt="Image" />
                          <AvatarFallback>OM</AvatarFallback>
                        </Avatar>
                        <div className="w-auto max-w-xl break-words relative bg-dark-4 bg-bankGradient rounded-b-xl rounded-tl-xl text-white py-3 px-2 shadow-[0_10px_40px_0px_rgba(0,0,0,0.15)]">
                          <div className="chat-container">
                            <div className="container2">
                              <p className="message">{message?.body}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                }
              }
            )}
          </div>
        </CardContent>
        <CardFooter className=" sticky flex items-center justify-center bottom-0 w-full ">
        <form
            onSubmit={async (event) => {
              event.preventDefault();
             

              if (inputLength === 0) return;
    
              await sendMessage({
                sender:sender,
                body: input,
                recipient:receiver,
                role: admin ? 'agent' : 'user',
                timestamp:Date.now()
              })
              setInput("");
          
              
            }}
            className="flex w-full items-center space-x-2"
          >
            <Input
              id="message"
              placeholder="Type your message..."
              className="flex-1 bg-white py-2"
              autoComplete="off"
              value={input}
              onChange={(event) => setInput(event.target.value)}
            />
            <Button
              type="submit"
              className="bg-bankGradient"
              size="icon"
              disabled={inputLength === 0}
            >
              <Send className="w-10 h-10 text-white" />
            </Button>
          </form>
        </CardFooter>
      </Card>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="gap-0 p-0 outline-none bg-white">
          <DialogHeader className="px-4 pb-4 pt-5">
            <DialogTitle>New message</DialogTitle>
            <DialogDescription>
              Invite a user to this thread. This will create a new group
              message.
            </DialogDescription>
          </DialogHeader>
          <Command className="overflow-hidden rounded-t-none border-t bg-transparent">
            <CommandInput placeholder="Search user..." />
            <CommandList>
              <CommandEmpty>No users found.</CommandEmpty>
              <CommandGroup className="p-2">
                {users.map((user) => (
                  <CommandItem
                    key={user.email}
                    className="flex items-center px-2"
                    onSelect={() => {
                      if (selectedUsers.includes(user)) {
                        return setSelectedUsers(
                          selectedUsers.filter(
                            (selectedUser) => selectedUser !== user
                          )
                        );
                      }

                      return setSelectedUsers(
                        [...users].filter((u) =>
                          [...selectedUsers, user].includes(u)
                        )
                      );
                    }}
                  >
                    <Avatar>
                      <AvatarImage src={user.avatar} alt="Image" />
                      <AvatarFallback>{user.name[0]}</AvatarFallback>
                    </Avatar>
                    <div className="ml-2">
                      <p className="text-sm font-medium leading-none">
                        {user.name}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {user.email}
                      </p>
                    </div>
                    {selectedUsers.includes(user) ? (
                      <Check className="ml-auto flex h-5 w-5 text-primary" />
                    ) : null}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
          <DialogFooter className="flex items-center border-t p-4 sm:justify-between">
            {selectedUsers.length > 0 ? (
              <div className="flex -space-x-2 overflow-hidden">
                {selectedUsers.map((user) => (
                  <Avatar
                    key={user.email}
                    className="inline-block border-2 border-background"
                  >
                    <AvatarImage src={user.avatar} />
                    <AvatarFallback>{user.name[0]}</AvatarFallback>
                  </Avatar>
                ))}
              </div>
            ) : (
              <p className="text-sm text-muted-foreground">
                Select users to add to this thread.
              </p>
            )}
            <Button
              disabled={selectedUsers.length < 2}
              onClick={() => {
                setOpen(false);
              }}
            >
              Continue
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
