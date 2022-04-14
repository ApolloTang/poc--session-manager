import React, { useEffect, useState } from 'react';
import {SessionCtx} from './client-session-manager';

type propsType = {
  children: JSX.Element;
};

function SomeComponent() {
  const isFullLogin = React.useContext(SessionCtx);
  console.log('in SomeComponent, loginState', isFullLogin)
  return (
    <>
      {console.log('someComponent rendered')}
      <div>isFullLogin: {isFullLogin+''}</div>
    </>
  );
}

export {SomeComponent}
