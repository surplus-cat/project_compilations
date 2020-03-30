怎么使用useCallback?

`function changeName(name) {
  return name + '给name做点操作返回新name'
}

const getNewName = useMemo(() => {
  return changeName(name)
}, [name])
`
