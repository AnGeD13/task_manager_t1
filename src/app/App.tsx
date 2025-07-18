import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { TasksProvider } from './providers';
import { HomePage } from '../pages/home';
import { DetailPage } from '../pages/detail';
import "./index.css";


export default function App() {
  return (
    <TasksProvider>
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/task/:id" element={<DetailPage/>}/>
        </Routes>
      </BrowserRouter>
    </TasksProvider>
  );
}
