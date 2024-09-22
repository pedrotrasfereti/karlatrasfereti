import { Box } from '@chakra-ui/react';
import { Route, Routes } from 'react-router-dom';

// Components
import HomePage from './pages/HomePage.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';

function App() {
  return (
    <Box minH="100vh">
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* Catch-all route for 404 Not Found page */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Box>
  );
}

export default App;
