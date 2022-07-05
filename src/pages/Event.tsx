import { useState } from "react";
import { useParams } from "react-router-dom";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { Video } from "../components/Video";

export function Event() {
  const [openMenu, setOpenMenu] = useState(false);
  const { slug } = useParams<{ slug: string }>()

  console.log('openMenu', openMenu);
  

  return (
    <div className="flex flex-col min-h-screen">
      <Header isMenuOpen={openMenu} handleMenu={setOpenMenu} />
      <main className="flex flex-1">
        { slug ? <Video lessonSlug={slug} /> : <div className="flex-1" />}
        <Sidebar isMenuOpen={openMenu}  handleMenu={setOpenMenu} />
      </main>
    </div>
  )
}