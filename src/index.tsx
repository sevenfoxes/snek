import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';
import StyledEngineProvider from '@mui/material/StyledEngineProvider';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import App from './App';
import { RecoilRoot } from 'recoil';
import { RecoilDevTools } from 'recoil-gear';

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <RecoilRoot>
          <RecoilDevTools />
          <StyledEngineProvider injectFirst>
            <BrowserRouter>
              <App />
            </BrowserRouter>
          </StyledEngineProvider>
        </RecoilRoot>
      </HelmetProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </StrictMode>
);
