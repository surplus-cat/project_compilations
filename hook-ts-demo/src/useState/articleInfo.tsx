import React, { useState } from 'react'

type ArticleInfo = {
  title: string,
  content: string
}


const Article:React.FC<ArticleInfo> = ({ title, content }) => {

  const [article, setArticle] = useState<ArticleInfo>({ title, content })

  return (
    <div>
      <p>{article.title}</p>
      <section>{article.content}</section>
      <button onClick={() => setArticle({
        title: '下一篇',
        content: '下一篇的内容'
      })}>下一篇</button>
    </div>
  )
}

export default Article;

// setXxx 并不会像 this.setState 合并旧的状态，它是完全替代了旧的状态，所以我们要实现合并，可以这样写（虽然我们以上例子不需要）:
/* 
setArticle({
  title: '下一篇',
  content: '下一篇的内容',
  ...article
})
*/