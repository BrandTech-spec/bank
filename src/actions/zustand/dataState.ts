
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { persist } from "zustand/middleware";

import { Models } from "appwrite";
interface UserPropsAndFunctions {
  input: string;
  populatFormFn: (p:string) => void;
  data:Models.Document[] | undefined
}

export const useDataStore = create<UserPropsAndFunctions>()(
  immer(
    persist(
      (set, get) => ({
        input:"",
        data:[],
        populatFormFn: (data:string) => {
          const currentState = get().input;
          set((state) => {
            state.input = data;
          });
          console.log(currentState);
        },
     
      }),
      {
        name: "user_info",
      }
    )
  )
);
