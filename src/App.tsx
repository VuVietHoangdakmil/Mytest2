import FormCreate from "./component/FormCreact";
import FormCard from "./component/FormCard";
import Provider from "./component/provider/Global";
function App() {
  return (
    <div style={{ width: "1200px", margin: "0 auto" }}>
      <Provider>
        <FormCreate />
        <FormCard />
      </Provider>
    </div>
  );
}

export default App;
