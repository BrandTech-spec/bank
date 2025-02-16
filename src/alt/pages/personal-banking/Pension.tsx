
import {  mapTypes, pensions } from "@/constants";

import { FormattedMessage, useIntl } from "react-intl";

const Pension = () => {
  const { formatMessage } = useIntl();
  return (
    <div className="w-full h-full py-10">

      <div className="w-full flex space-y-3 flex-col items-center justify-center ">
        <p className="text-[10px]">
          <FormattedMessage
            id="pensionHeading"
            defaultMessage="Good morning {name}"
            values={{ name: "John" }}
          />{" "}
        </p>

        <div className="mb-3 flex flex-col items-center justify-center">
          <h1 className="font-bold text-2xl  font-mono">
            <FormattedMessage
              id="pensionSubHeading"
              defaultMessage="Good morning {name}"
              values={{ name: "John" }}
            />{" "}
          </h1>
          <p className="w-10 h-1 bg-black2-1"></p>
        </div>
        <p className="font-medium text-sm">
          <FormattedMessage
            id="pensionContent"
            defaultMessage="Good morning {name}"
            values={{ name: "John" }}
          />{" "}
        </p>
      </div>

      <div className="w-full mt-5 space-y-3  ">
        <div className="mb-3 ">
          <h1 className="font-bold text-2xl  font-mono">
            <FormattedMessage
              id="pensionFinanceHeading"
              defaultMessage="Good morning {name}"
              values={{ name: "John" }}
            />{" "}
            
          </h1>
          <p className="w-10 h-1 bg-black2-1"></p>
        </div>
        <p className=" text-xs">{formatMessage({ id: "pensionContentDescription" })}</p>
      </div>
      {/*<Features/>*/}
      {pensions.map((save, i) => {
        {/************* ************** */}
        if (save.type === mapTypes.featutesAlso) {
          return (
            <div key={i} className="space-y-4">
              <div className="flex items-center  w-full mt-3 p-2 text-white bg-blue-500 gap-2">
                <save.icons className="w-5 h-5" />
                <h1>
                  {" "}
                  
                </h1>
              </div>
              <p className="text-xs">
              
                {formatMessage({ id: save.description })}
              </p>
             
              
              <ul className="text-sm pl-5" typeof="circle">
                {
                save.feature.map((p, i)=>(
                  <li key={i}>
                   {formatMessage({ id: p })}
                </li>
                ))
              }
              </ul>
              <p className="text-[8px] font-semibold">
                {" "}
                <FormattedMessage
                  id={save?.subDescription}
                  defaultMessage="Good morning {name}"
                  values={{ name: "John" }}
                />
              </p>
            </div>
          );
        }

          {/************* ************** */}
          if (save.type === mapTypes.contentOnly) {
            return (
              <div className="space-y-4">
                <div className="flex items-center  w-full mt-3 p-2 text-white bg-blue-500 gap-2">
                  <save.icons className="w-5 h-5" />
                  <h1>
                    {" "}
                    {formatMessage({ id: save.heaging })}
                  </h1>
                </div>
                <p className="text-xs">
                
                  {formatMessage({ id: save.description })}
                </p>
              
            
              </div>
            );
          }
      })}
    </div>
  );
};

export default Pension;
