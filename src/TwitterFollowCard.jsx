import { useState } from "react"
export function TwitterFollorCard({ userName, name , socialMedia, initialIsfollowing}){
    const [isFollowing , setIsfollowing] = useState(initialIsfollowing)
    const imgSrc = `https://unavatar.io/${socialMedia}/${userName}`
    const text = isFollowing ? 'Following' : 'Follow'
    const buttonClassname = isFollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button'
    
    const handleclick = ()=>{
        setIsfollowing(!isFollowing)
    }
    return(
    <div className='tw-followCard'>
      <header className='tw-followCard-header'>
        <img className='tw-followCard-avatar' src={imgSrc} alt={`El avatar de ${userName}`} />
        <div className='tw-followCard-info'>
          <strong  >{name}</strong>
          <span className='tw-followCard-infoUserName' >@{userName}</span>
        </div>
      </header>
      <aside>
        <button onClick={handleclick} className={buttonClassname}>
          <span className="tw-followCard-text">{text}</span>
          <span className="tw-followCard-text tw-followCard-stopFollow">Unfollow</span>
        </button>
      </aside>
    </div>
    )
} 