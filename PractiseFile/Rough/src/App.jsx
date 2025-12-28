import React from 'react';
import ThemeProvider from "./themeProvider";
import Child1 from './Child1';

const App = () => {
  return (
    <ThemeProvider>
      <Child1 />
    </ThemeProvider>
  );
};

export default App;
