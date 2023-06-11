import './App.css'
import {TwitterFollorCard} from './TwitterFollowCard'
export function App() {
  return (
    <div className='App'>
      <TwitterFollorCard socialMedia='twitter' initialIsfollowing userName='Edondji_ibolo' name='Enzo Battaglia Mbula'/>
      <TwitterFollorCard socialMedia='twitter'  userName='EsaraWendy' name='Wendy Esara Mpeyo'/>
      <TwitterFollorCard socialMedia='twitter' initialIsfollowing userName='sobre_eg_' name='EG MEMES'/>
      <TwitterFollorCard socialMedia='twitter'  userName='elchiringuitotv' name='EL CHIRINGUITO TV'/>
      <TwitterFollorCard socialMedia='twitter' initialIsfollowing userName='ceciarmy' name='CECIARMY'/>
      <TwitterFollorCard socialMedia='twitter'  userName='lucasondo' name='Lucas Ondo'/>

      <TwitterFollorCard socialMedia='instagram'  userName='sobre_eg_' name='Wonda Mind'/>
      <TwitterFollorCard socialMedia='instagram'  userName='frank_mba8' name='Frank Mba'/>
    </div>
   
  )
}


