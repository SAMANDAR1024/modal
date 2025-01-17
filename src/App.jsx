import { useState } from "react";
import "./App.css";
import Oquvchi from "./components/Oquvchi";
import Table from "./components/Table";

function App() {
  const [modal, setModal] = useState(false)
  return (
    <div className="container" style={{
      backgroundColor: modal ? 'rgb(134, 134, 134)' : '',
      height: '100vh'
    }}>
      <Oquvchi setModal={setModal} modal={modal}/>
     <Table setModal={setModal} modal={modal}/>
    </div>
  );
}

export default App;
