import React, { useEffect, useState } from 'react';

type ctxType = boolean;

let resetClientSession: () => void;

const SessionCtx = React.createContext<ctxType>(false);

type propsType = {
  children: JSX.Element;
};

let id_setTimeOut: ReturnType<typeof setTimeout>;

const ClientSessionProvide = (props: propsType) => {
  const { children } = props;

  const [loginState, setLoginState] = useState(false);

  useEffect(() => {
    resetClientSession = () => {
      if (id_setTimeOut) {
        clearTimeout(id_setTimeOut);
      }
      setLoginState(true);
      id_setTimeOut = setTimeout(() => {
        console.info('-------- session Expire ----------------');
        setLoginState(false);
      }, 5000);
      console.info('------ session Reset ----------');
    };
  }, []);

  console.info('in ClientSessionProvide, loginState', loginState);
  return (
    <SessionCtx.Provider value={loginState}>
      <div>
        {console.info('ClientSessionProvide rendered')}
        {children}
      </div>
    </SessionCtx.Provider>
  );
};

export {
  SessionCtx,
  ClientSessionProvide,
  resetClientSession, // <--- This is a live export see
  //                          https://stackoverflow.com/questions/32558514/javascript-es6-export-const-vs-export-let
  //                          it is assign the value after ClientSessionProvide has mounted.
};
