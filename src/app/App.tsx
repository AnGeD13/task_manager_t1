import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { TasksProvider } from '../context/tasks/TasksProvider';
import MainPage from '../pages/main/MainPage';
import DetailPage from '../pages/detail/DetailPage';


export default function App() {
  return (
    <TasksProvider>
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <Routes>
          <Route path="/" element={<MainPage/>}/>
          <Route path="/task/:id" element={<DetailPage/>}/>
        </Routes>
      </BrowserRouter>
    </TasksProvider>
  );
}
