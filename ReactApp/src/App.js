
import './App.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import Chart from './components/Chart'

const queryClient = new QueryClient();


function App() {
  return (
      <>
      <QueryClientProvider client={queryClient}>
        <div className='app'>
          <h1>Data</h1>
          <table>
            <Chart />
            </table>
        </div>
        </QueryClientProvider>
      </>
  );
}

export default App;
