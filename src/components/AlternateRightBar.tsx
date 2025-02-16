
import { Link, useLocation } from 'react-router-dom';

const AlternateRightBar = () => {
    const {pathname} = useLocation()
    const personalRouts = [
      { path: "personal-banking/savings", name: "Savings" },
      { path: "personal-banking/checking", name: "Checking" },
      { path: "personal-banking/pension", name: "Investment & Retirement" },
      { path: "personal-banking/card", name: "Credit Cards" },
    ];

        const industralRouts = [
          { path: "business-banking/savings", name: "Savings Accounts" },
          { path: "business-banking/checking", name: "Checking" },
          { path: "business-banking/pension", name: "Lending" },
          { path: "business-banking/card", name: "Credit Cards" },
        ];
  return (
    <div className={`w-1/4  sticky right-0 top-44 mr-4 inset-y-0 font-semibold max-md:hidden px-2 flex flex-col gap-3 items-starty mt-10 justify-start text-[#000] ${pathname.includes("home") && "hidden" }`} >
        {pathname.includes("personal-banking")
          ? personalRouts.map((rout, i) => {
              const isActive = pathname.includes(rout.name) || pathname === rout.path || pathname.includes(rout.path)  ;

             
                return (
                  <Link to={rout.path} key={i} className={ `truncate px-2 ${isActive && " py-2 bg-blue-400   font-mono text-black2-1  w-full truncate"}  ` }>
                    {rout.name}
                  </Link>
                );
              }
            )
          : industralRouts.map((rout, i) => {
            const isActive = pathname.includes(rout.name) || pathname === rout.path || pathname.includes(rout.path)  ;

              if (isActive) {
                return (
                  <Link to={rout.path} key={i} className={ isActive && " py-2 truncate text-black2-1  "}>
                    {rout.name}
                  </Link>
                );
              }
            })}
      </div>
  )
}

export default AlternateRightBar