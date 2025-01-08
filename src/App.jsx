import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import 'bootstrap/dist/css/bootstrap.min.css';
import CreateIdeaPage from './pages/CreateIdeaPage';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/ideas/create" element={<CreateIdeaPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
