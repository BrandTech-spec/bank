
import { messages, tranlation } from "@/constants";
import React from "react";
import { IntlProvider } from "react-intl";


   
const IntlProviderComponent = ({ children }: { children: React.ReactNode }) => {




  return (
    <IntlProvider locale="fr" 
        messages={ 
            tranlation  
        }
        defaultLocale="en"
    >
      {children}
    </IntlProvider>
  );
};

export default IntlProviderComponent;
