import React from 'react';
import {
  Route,
  Redirect,
  Switch
} from 'react-router-dom'
import './App.css';
import routes from './routes'

function App() {
  return (
    <div className="App">
      <Switch>
        {
          routes.map(route => { 
            return(
              <Route 
              key = {route.path}
              path = {route.path}
              component = {route.component}/>
            )
          })
        }
      <Redirect exact from = "/" to = {routes[0].path} />
        {/* 这里用 redirect 进行 首页自动跳转到 /home 路由下 
            exact 意味着精确匹配 当为 / 时才跳转 /home 不是包含 / 就跳转到 /home
        */}
        <Redirect to = '/404'/>
        {/* 如果找不到页面 则去 4040页面 */}
      </Switch>
    </div>
  );
}

export default App;
