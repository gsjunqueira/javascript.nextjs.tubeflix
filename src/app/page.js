import MusicsPage from "./musics/page";
import VideosPage from "./videos/page";
import style from "./page.module.css"

export default function Home() {
  return (
    <>
      <h2 className={style.title}>Início</h2>
      <VideosPage />
      <MusicsPage />
    </>
    
  )
}
