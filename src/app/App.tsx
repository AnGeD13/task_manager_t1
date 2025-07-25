import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { HomePage } from '@pages/home';
import { DetailPage } from '@pages/detail';
import "./index.css";


export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/task/:id" element={<DetailPage mode="edit" />}/>
          <Route path="/task/new" element={<DetailPage mode="create" />}/>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}
