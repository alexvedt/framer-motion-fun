import EncryptButton from "./components/button-code";
import Fetching from "./components/fetch";

function App() {
  return (
    <>
      <div className="grid min-h-[200px] place-content-center bg-slate-900 p-4">
        <EncryptButton />
        <Fetching />
      </div>
    </>
  );
}

export default App;
