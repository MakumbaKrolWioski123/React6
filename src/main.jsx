import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Tooltip from './components/Tooltip.jsx'
import PageLayout from './components/PageLayout.jsx'
import Sidebar from './components/Sidebar.jsx'
import ContentArea from './components/ContentArea.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Tooltip hint="Zapisz zmiany!">
      <button>Zapisz</button>
    </Tooltip>
    <PageLayout
      title="Strona główna"
      content={
        <ContentArea>
          <p>Witamy na naszej stronie!</p>
          <p>To jest przykładowa strona stworzona w React.</p>
          <p>Możesz tutaj znaleźć różne informacje i funkcje.</p>
        </ContentArea>
        
      }
      sidebar={
        <Sidebar>
          <p>Menu:</p>
          <ul style={{ listStyleType: 'none', padding: 0, display: 'flex', flexDirection: 'row', gap: '10px', justifyContent: 'center', width: '100%' }}>
            <li><a href="/">Strona główna</a></li>
            <li><a href="/o-nas">O nas</a></li>
            <li><a href="/kontakt">Kontakt</a></li>
          </ul>
        </Sidebar>
      }
      footer="© 2024 Moja Firma"
    />
    
   

  </StrictMode>,
)
