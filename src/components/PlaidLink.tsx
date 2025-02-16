import React, { useCallback, useEffect, useState } from 'react'

import { PlaidLinkProps } from '@/types';



const PlaidLink = ({ user, variant }: PlaidLinkProps) => {


  const [token, setToken] = useState('');

  useEffect(() => {

  }, [user]);



  
  return (
    <>
      
        <button  className="plaidlink-default">
          <img
            src="/icons/connect-bank.svg"
            alt="connect bank"
            className="w-8 h-8"
          />
         <p className="text-[16px] font-semibold text-black2-2">Connect bank</p>
        </button>
      
    </>
  );
}

export default PlaidLink