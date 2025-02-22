import { useMutation, useQueryClient } from "@tanstack/react-query";
import {  signIn, signUp } from "../appwrite/userActions";
import {  signInProps, SignUpParams } from "@/types";
import { deletUsers, sendMessage, sendNotification, SendTransaction, upDateUser } from "../appwrite/transaction";
import { QUERY_KEYS } from "@/constants";

export type Messages = {
  message: string;

  userId: string;

  role: string;
};

export type Notifications = {
  message: string;

  userId: string;

  role?: string;
};

export type Transaction = {
  channel: string;
  amount: number;
  status: string;
  userId: string;
  type: string;
};
export const useSignUp = () => {
  const mutation = useMutation({
    mutationFn: (data: SignUpParams) => signUp(data),
    
  });
  return mutation;
};

export const useSignIn = () => {
  const mutation = useMutation({
    mutationFn: (data: signInProps) => signIn(data),
  });
  return mutation;
};



export const useSendMessage = () => {
  const queryClient = useQueryClient()
  const mutation = useMutation({
    mutationFn: (userId: Messages) => sendMessage(userId),
    onSuccess:(data)=>{
      queryClient.invalidateQueries({
          queryKey: [QUERY_KEYS.GET_MESSAGES, data?.$id]
      })
  }
  });
  return mutation;
};

export const useSendNotifcation = () => {
  const queryClient = useQueryClient()
  const mutation = useMutation({
    mutationFn: (userId: Notifications) => sendNotification(userId),
    onSuccess:(data)=>{
      queryClient.invalidateQueries({
          queryKey: [QUERY_KEYS.GET_NOTIFICATION, data?.$id]
      })
  }
  });
  return mutation;
};

export const useSendTransaction = () => {
  const queryClient = useQueryClient()
  const mutation = useMutation({
    mutationFn: (userId:Transaction) => SendTransaction(userId),
    onSuccess:(data)=>{
      queryClient.invalidateQueries({
          queryKey: [QUERY_KEYS.GET_TRANSACTIONS, data?.$id]
      })
  }
  });
  return mutation;
};

export const useDeleteUser = () => {
  const queryClient = useQueryClient()
  const mutation = useMutation({
    mutationFn: (userId:string) => deletUsers(userId),
    onSuccess:(userId)=>{
      queryClient.invalidateQueries({
          queryKey: [QUERY_KEYS.DELETE, userId]
      })
  }
  });
  return mutation;
};

export const useUpdateUser = () => {
  const queryClient = useQueryClient()
  const mutation = useMutation({
    mutationFn: (data:{userId:string, $id:string, amount?:number, code?:string}) => upDateUser(data),
    onSuccess:(data)=>{
      queryClient.invalidateQueries({
          queryKey: [QUERY_KEYS.UPDATE_USERS, data?.$id]
      })
  }
  });
  return mutation;
};