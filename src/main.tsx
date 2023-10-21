import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './App.tsx'
import { store } from './redux/index.ts'
import ErrorBoundary from './components/ErrorBoundry/ErrorBoundry.tsx'
import "./globalStyles/main.scss"
import { ThemeSelectContextProvider } from './context/ThemeSelectContext.tsx'


ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <ErrorBoundary>
            <ThemeSelectContextProvider>
                <Provider store={store}>
                    <App />
                </Provider>
            </ThemeSelectContextProvider>
        </ErrorBoundary>
    </React.StrictMode>,
)
