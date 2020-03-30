**为什么使用useReducer?**
有没有想过你在某个组件里写了很多很多的 useState 是什么观感？比如以下：

const [name, setName] = useState<string>('')
const [islogin, setIsLogin] = useState<boolean>(false)
const [avatar, setAvatar] = useState<string>('')
const [age, setAge] = useState<number>(0)

场景举例：
与 useContext 结合代替 Redux 方案，往下阅读。
