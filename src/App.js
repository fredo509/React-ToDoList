// import logo from './logo.svg';
// eslint-disable-next-line
import { Outlet } from 'react-router';
import './App.css';
import TodoApp from './components/toDoApp';

export default function App() {
  return (
    <>
      <TodoApp />
      <Outlet />
    </>
  );
}
