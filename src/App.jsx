import { Box, useColorModeValue } from '@chakra-ui/react';
import { Route, Routes } from 'react-router-dom';

// Components
import Navbar from './components/Navbar.jsx';
import HomePage from './pages/HomePage.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';

function App() {
  const bgColor = useColorModeValue('surface.light', 'surface.dark');

  return (
    <Box bg={bgColor} minH="100vh">
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* Catch-all route for 404 Not Found page */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Box>
  );
}

export default App;
