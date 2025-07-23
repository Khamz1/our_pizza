import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { CartProvider } from './features/CartContext.jsx'

createRoot(document.getElementById('root')).render(
 <CartProvider>
    <App />
</CartProvider>
  
)
