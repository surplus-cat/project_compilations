import {
  Home, Ref, State, Effect
} from './pages' //导入页面
//通过组件配置路由
const routes = [{
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
},
];
export default routes
