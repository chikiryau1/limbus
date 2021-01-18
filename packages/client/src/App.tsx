import React, { FC, useEffect, useState } from 'react';
import './App.css';

const App: FC = () => {
  const [value, setValue] = useState<{ response?: string }>({});
  useEffect(() => {
    async function request(path: string): Promise<Record<string, unknown>> {
      const res = await fetch(path);

      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const data: Record<string, unknown> = await res.json();
      setValue(data);

      return data
    }

    request('http://localhost:3001/ping').then(console.log).catch(console.log);
  }, []);
  return (
    <div className='App'>
      <header className='App-header'>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        {value?.response}
      </header>
    </div>
  );
};

export default App;
