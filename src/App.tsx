import { useLoading } from "./hooks/useLoading";
import { TicketsPage } from "./layout/page/TicketsPage";


function App() {
  useLoading();
  return <TicketsPage />
}

export default App;
