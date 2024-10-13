
import { createRoot } from 'react-dom/client'

import App from './App'
import ProductContextProvider from './context/ProductContextProvider'

createRoot(document.getElementById('root')).render(
 <>
 <ProductContextProvider>
 <App />
 </ProductContextProvider>
 </>
    
 
)
