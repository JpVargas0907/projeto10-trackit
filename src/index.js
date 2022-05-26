
import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';

import "./assets/css/reset.css";
import "./assets/css/shared.css";

import App from "./components/App";

const rootElement = document.querySelector(".root");
const root = createRoot(rootElement);

root.render(
    <StrictMode>
        <App />
    </StrictMode>, 
);