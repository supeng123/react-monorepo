import { Route, Routes } from 'react-router-dom';
import NxWelcome from './nx-welcome';
import { Todolist } from '@react-monorepo/todolist';
import { User } from '@react-monorepo/user';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<User />}></Route>
      <Route path="/todolist" element={<Todolist />}></Route>
      <Route
        path="/welcome"
        element={<NxWelcome title="react-monorepo" />}
      ></Route>
    </Routes>
  );
}

export default App;
