
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { persist } from "zustand/middleware";
import { Models } from "appwrite";
interface UserPropsAndFunctions {
  user: Models.Document | null;
  chatState: boolean;
  openChatFn: () => void;
  reSetUser: () => void;
  setUser: (P:Models.Document) => void;
}

export const useUserStore = create<UserPropsAndFunctions>()(
  immer(
    persist(
      (set, get) => ({
        user: null,
        chatState: false,
        openChatFn: () => {
          const currentState = get().chatState;
          set((state) => {
            state.chatState = !currentState;
          });
          console.log(currentState);
        },
        setUser:(data:Models.Document)=>{
          set((state) => {
            state.user = data;
          })
        },
        reSetUser:()=>{
          set((state) => {
            state.user = null;
          })
        }
      }),
      {
        name: "user_info",
      }
    )
  )
);
