import { Routes, Route } from '@solidjs/router';

import Home from './pages/Home';
import Users from './pages/Users';
import logo from './assets/neverall-logo.svg';

export default function App() {
  return (
    <div id='app'>
      <Header />
      <div id='main'>
        <Routes>
          <Route path='/users' component={Users} />
          <Route path='/' component={Home} />
          <Route
            path='/about'
            element={<div>This site was made with Solid</div>}
          />
        </Routes>
      </div>
    </div>
  );
}
function Header() {
  return (
    <div id='header'>
      <img src={logo} alt='logo' class='logo' />
      Need to bring /feedback style from original site into this
    </div>
  );
}
