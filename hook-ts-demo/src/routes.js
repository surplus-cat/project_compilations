import {
  Home, Ref, State, Effect, Memo, Callback, Reducer, Context, SimpleRedux
} from './pages' //导入页面
//通过组件配置路由
const routes = [
  {
    path: '/home',
    component: Home
  }, {
    path: '/ref',
    component: Ref
  }, {
    path: '/state',
    component: State
  }, {
    path: '/effect',
    component: Effect
  }, {
    path: '/Memo',
    component: Memo
  }, {
    path: '/Callback',
    component: Callback
  }, {
    path: '/Reducer',
    component: Reducer
  }, {
    path: '/Context',
    component: Context
  }, {
    path: '/SimpleRedux',
    component: SimpleRedux
  }
];
export default routes
