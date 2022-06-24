import * as React from "react";
import { FunctionComponent, useEffect, useState } from "react";
import { invoke } from '@tauri-apps/api';

import './App.css';

const App : FunctionComponent<{}> = () => {

  const [greeting, setGreeting] = useState<string>();

  useEffect(() => { 
    invoke<string>("greet", { name: "world" }).then(setGreeting);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>
          { greeting }
        </p>
      </header>
    </div>
  );
}

export { App };
