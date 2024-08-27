import { Route, Routes } from 'react-router-dom';
import NxWelcome from './nx-welcome';
import { Todolist } from '@react-monorepo/todolist';
import { User } from '@react-monorepo/user';
import { PostsManager } from '@react-monorepo/post';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<PostsManager />}></Route>
      <Route path="/user" element={<User />}></Route>
      <Route path="/todolist" element={<Todolist />}></Route>
      <Route
        path="/welcome"
        element={<NxWelcome title="react-monorepo" />}
      ></Route>
    </Routes>
  );
}

export default App;
