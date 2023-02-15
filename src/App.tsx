import { Navigate, Route, Routes } from "react-router-dom";
import { Card } from "./Components/Card";
import { Create } from "./Components/Create";
import { Details } from "./Components/Details";
import { NotFound } from "./Components/NotFound";



function App() 
{
  return (
  <Routes>
    {/*App Routes*/}
    <Route path="" element={<Card/>} />
    <Route path="/create" element={<Create/>}/>
    <Route path="/hotels/:id" element={<Details/>} />
    <Route path="/404" element={<NotFound/>} />
    <Route path="*" element={<Navigate to="404" />} />
  </Routes>
  );
}

export default App;
