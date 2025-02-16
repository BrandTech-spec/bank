import React from "react";

import { ConvexProvider, ConvexReactClient } from "convex/react";

const convex = new ConvexReactClient(import.meta.env.VITE_CONVEX_URL as string);


const ChatConvexProvider = ({children}:{children:React.ReactNode}) => {
  return (
    <ConvexProvider client={convex}>
     {children}
    </ConvexProvider>
  )
}

export default ChatConvexProvider

    
  
