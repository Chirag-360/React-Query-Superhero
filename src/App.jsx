import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Superhero } from "./components/Superhero";
import { Home } from "./components/Home";
import { RQSuperhero } from "./components/RQSuperhero";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import RQSingleSuperhero from "./components/RQSingleSuperhero";
import ParallelQueries from "./components/ParallelQueries";
import { DynamicParallelPage }  from "./components/DynamicParallel";
import { DependentQueries } from "./components/DependentQueries";
import { PaginatedQueries } from "./components/PaginatedQuetries";

const client = new QueryClient();
function App() {
  return (
    <>
      <QueryClientProvider client={client}>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/superheroes">Traditional SuperHeros</Link>
              </li>
              <li>
                <Link to="/rqsuperheroes">RQ SuperHeros</Link>
              </li>
              <li>
                <Link to="/rq-dependent">RQ Dependent</Link>
              </li>
              <li>
                <Link to="/rq-paginated">RQ Pagination</Link>
              </li>
            </ul>
          </nav>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/superheroes" element={<Superhero />} />
          <Route path="/rqsuperheroes" element={<RQSuperhero />} />
          <Route path="/rqsinglesuperhero/:heroId" element={<RQSingleSuperhero/>} />
          <Route path="/rq-parallel-queries" element={<ParallelQueries/>}/>
          <Route path="/rq-dynamic-parallel" element={<DynamicParallelPage heroId={[1,3]}/> }/>
          <Route path="/rq-dependent" element={<DependentQueries email="sheldon@copper.com"/>}/>
          <Route path="/rq-paginated" element={<PaginatedQueries/>}/>
        </Routes>
        <ReactQueryDevtools position="buttom-right" initialIsOpen={false} />
      </QueryClientProvider>
    </>
  );
}

export default App;
