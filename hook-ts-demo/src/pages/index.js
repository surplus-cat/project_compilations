import Loadable from 'react-loadable';

// import Loading from './my-loading-component';
 // 意思是在加载的时候 显示 都加载组件没有组件的时候 我们可以写为
 const Loading = () => null;  //加载时不现实loading

const Home = Loadable({
  loader: () => import('../useMemo/ex.tsx'),
  loading: Loading
})

const Ref = Loadable({
  loader: () => import('../useRef/createRef.tsx'),
  loading: Loading
})

const Effect = Loadable({
  loader: () => import('../useEffect/switchCount.tsx'),
  loading: Loading
})

const State = Loadable({
  loader: () => import('../useState/articleInfo.tsx'),
  loading: Loading
})

export {
  Home, Ref, Effect, State
}