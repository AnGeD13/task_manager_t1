import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { TasksProvider } from '../context/tasks/TasksProvider';
import MainPage from '../pages/main/MainPage';
import DetailPage from '../pages/detail/DetailPage';
import { BASE_URL } from '../data/constants/url';


export default function App() {
  return (
    <TasksProvider>
      <BrowserRouter>
        <Routes>
          <Route path={`${BASE_URL}`} element={<MainPage/>}/>
          <Route path={`${BASE_URL}task/:id`} element={<DetailPage/>}/>
        </Routes>
      </BrowserRouter>
    </TasksProvider>
  );
}
