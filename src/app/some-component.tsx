import React from 'react';
import { SessionCtx } from './client-session-manager';

function SomeComponent() {
  const isFullLogin = React.useContext(SessionCtx);
  console.info('in SomeComponent, isFullLogin', isFullLogin);
  return (
    <>
      {console.info('someComponent rendered')}
      <div>isFullLogin: {String(isFullLogin)}</div>
    </>
  );
}

export { SomeComponent };
