
import './App.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import Chart from './components/Chart'

const queryClient = new QueryClient();


function App() {
  return (
      <>
      <QueryClientProvider client={queryClient}>
        <div className='App'>
          <h1>User API Data</h1>
            <Chart />
        </div>
        </QueryClientProvider>
      </>
  );
}

export default App;
