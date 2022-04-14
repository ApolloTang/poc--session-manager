import React from 'react';
import {
  ClientSessionProvide,
  resetClientSession,
} from './client-session-manager';
import { SomeComponent } from './some-component';
import s from './style.module.less';

const App = () => (
  <div className={`${s.app}`}>
    <ClientSessionProvide>
      <div>
        <div className={`${s.centerContainer}`}>
          <button onClick={() => resetClientSession()}>reset session</button>
        </div>
        <div className={`${s.centerContainer}`}>
          <SomeComponent />
        </div>
      </div>
    </ClientSessionProvide>
  </div>
);

export default App;
