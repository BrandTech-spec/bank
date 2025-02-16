import { useQuery } from "@tanstack/react-query"
import { deletUsers, getAllUsers, getMessages, getNotification, getTransaction } from "../appwrite/transaction"
import { getUserById, getUserInfo } from "../appwrite/userActions"
import { QUERY_KEYS } from "@/constants"

export const useGetMessages = (id:string)=>{
    //const queryClient =  useQueryClient()
    const query = useQuery({
      queryKey:[QUERY_KEYS.GET_MESSAGES, id],
        queryFn: () => getMessages(id),

      })

    return query
}
export const useGetUserInfo = (email:string, password:string) => {

  const query = useQuery({
    queryKey:[],
    queryFn: () => getUserInfo(email, password),
    
  })
  return query;
};
export const useGetNotification = (id:string)=>{
    //const queryClient =  useQueryClient()
    const query = useQuery({
      queryKey:[QUERY_KEYS.GET_NOTIFICATION, id],
        queryFn: () => getNotification(id),
        enabled: !!id
      })

    return query
}

export const useGetTransaction = (id:string)=>{
    //const queryClient =  useQueryClient()
    const query = useQuery({
      queryKey:[QUERY_KEYS.GET_TRANSACTIONS, id],
        queryFn: () => getTransaction(id),
        enabled: !!id
      })

    return query
}

export const useGetAllUsers = ()=>{
  //const queryClient =  useQueryClient()
  const query = useQuery({
    queryKey:[QUERY_KEYS.GET_TRANSACTIONS],
      queryFn: () => getAllUsers(),
    })

  return query
}

export const useGetUserById = (id:string)=>{
  //const queryClient =  useQueryClient()
  const query = useQuery({
    queryKey:[QUERY_KEYS.GET_TRANSACTIONS],
      queryFn: () => getUserById(id),
    })

  return query
}

