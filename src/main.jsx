import { StrictMode } from 'react';

import './index.css';
import App from './App.jsx';

// This file should export App as default if not using root rendering
export default function Main() {
  return (
    <StrictMode>
      <App />
    </StrictMode>
  );
}
