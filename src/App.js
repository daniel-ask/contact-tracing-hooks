import { useState } from "react";
import History from "./component/History";
import Form from './component/Form';

function App() {
  const [data, setData] = useState([
    {
      date: new Date().toLocaleString(),
      streetNumber: 120,
      streetAddress: "Spencer Street",
      suburb: "Melbourne",
    },
  ]);

  function addLocation(location){
    setData([
      location,
      ...data,
    ])
  }

  console.log(data);
  return (
    <div>
      <h1>Contact Tracing</h1>
      {/* <button onClick={() => setData("hello")}>click me</button> */}
      <Form addLocation={addLocation} />
      <History data={data} />
    </div>
  );
}

export default App;
