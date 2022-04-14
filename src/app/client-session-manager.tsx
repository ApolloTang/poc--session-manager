import React, { useEffect, useState } from 'react';

type ctxType = boolean;
type ClientSessionProvidePropsType = {
  children: JSX.Element;
};

const SessionCtx = React.createContext<ctxType>(false);
let resetClientSession: () => void;
let id_setTimeOut: ReturnType<typeof setTimeout>;

const ClientSessionProvide = (props: ClientSessionProvidePropsType) => {
  const { children } = props;
  const [isFullLogin, setIsFullLogin] = useState(false);

  useEffect(() => {
    resetClientSession = () => {
      if (id_setTimeOut) {
        clearTimeout(id_setTimeOut);
      }
      setIsFullLogin(true);
      id_setTimeOut = setTimeout(() => {
        console.info('-------- session Expire ----------------');
        setIsFullLogin(false);
      }, 5000);
      console.info('------ session Reset ----------');
    };
  }, []);

  console.info('in ClientSessionProvide, isFullLoginState', isFullLogin);

  return (
    <SessionCtx.Provider value={isFullLogin}>
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
