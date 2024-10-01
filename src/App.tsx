import { Post, PostType } from './components/Post'
import { Header } from './components/Header'
import { SideBar } from './components/SideBar'
import styles from './App.module.css'
import "./global.css"



export function App() {

  //author: {avatar_url:"", name:"", role:""}
  //publishedAt: Date
  //content: string
  const posts: PostType[] = [
    {
      id: 1,
      author: {
        avatarUrl: "https://github.com/FL3U1Z.png",
        name: "Flávio Barbosa",
        role: "Web Developer"
      },
      content: [
        { type: 'paragraph', content: 'Fala galeraa 👋' },
        { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
        { type: 'link', content: '👉jane.design/doctorcare' },
        { type: 'link', content: '#novoprojeto' },
        { type: 'link', content: '#nlw' },
        { type: 'link', content: '#rocketseat' },
      ],
      publishedAt: new Date('2024-09-03 10:00:00')
    },
    {
      id: 2,
      author: {
        avatarUrl: "https://github.com/diego3g.png",
        name: "Diego",
        role: "CEO Rocktseat"
      },
      content: [
        { type: 'paragraph', content: 'Fala galeraa 👋' },
        { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
        { type: 'link', content: '👉 jane.design/doctorcare' },
        { type: 'link', content: '#novoprojeto' },
        { type: 'link', content: '#nlw' },
        { type: 'link', content: '#rocketseat' },
      ],
      publishedAt: new Date('2024-02-03 10:00:00')
    },
  ]

  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <SideBar />
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                post={post}
              />
            )
          })}
        </main>
      </div>
    </>
  )
}

export default App
