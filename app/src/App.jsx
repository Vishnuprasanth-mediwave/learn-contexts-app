import "@picocss/pico";

import { useState } from "react";

import { ThemeProvider, UserProvider } from "./contexts/DataContext";

import IndexPage from "./pages/IndexPage";

function App() {
  const [name, setName] = useState("ram");

  return (
    <>
      <ThemeProvider>
        <UserProvider>
          <IndexPage />
        </UserProvider>
      </ThemeProvider>

      {/* <NamePrinterP name={name} />
      <NamePrinterH1 name={name} />

      <NameChanger name={name} onNameChange={setName} /> */}
    </>
  );
}

export default App;
