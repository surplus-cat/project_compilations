import Loadable from 'react-loadable';

// import Loading from './my-loading-component';
 // 意思是在加载的时候 显示 都加载组件没有组件的时候 我们可以写为
 const Loading = () => null;  //加载时不现实loading

const Home = Loadable({
  loader: () => import('../useMemo/index.tsx'),
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

const Memo = Loadable({
  loader: () => import('../useMemo/index.tsx'),
  loading: Loading
})

const Callback = Loadable({
  loader: () => import('../useCallback/index.tsx'),
  loading: Loading
})

const Reducer = Loadable({
  loader: () => import('../useReducer/index.tsx'),
  loading: Loading
})

const Context = Loadable({
  loader: () => import('../useContext/index.tsx'),
  loading: Loading
})

const SimpleRedux = Loadable({
  loader: () => import('../useContext/simple-redux.tsx'),
  loading: Loading
})

export {
  Home, Ref, Effect, State, Memo, Callback, Reducer, Context, SimpleRedux
}
