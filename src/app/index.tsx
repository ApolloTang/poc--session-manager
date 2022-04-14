import React from 'react';
import {
  SessionCtx,
  ClientSessionProvide,
  resetClientSession,
} from './client-session-manager';
import { SomeComponent } from './some-component';
import s from './style.module.less';

const App = () => (
  <div className={`${s.app}`}>
    <ClientSessionProvide>
      <div className={`${s.imageContainer}`}>
        <button onClick={() => resetClientSession()}>reset session</button>
        <SomeComponent />
      </div>
    </ClientSessionProvide>
  </div>
);

export default App;
