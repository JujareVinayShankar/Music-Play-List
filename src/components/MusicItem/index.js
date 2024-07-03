// import {MdOutlineDeleteOutline} from 'react-icons/md'
import {RiDeleteBin7Line} from 'react-icons/ri'
import './index.css'

const MusicItem = props => {
  const {musicItem, deleteMusicItem} = props
  const {id, imageUrl, name, genre, duration} = musicItem
  const onClickDelete = () => {
    deleteMusicItem(id)
  }
  return (
    <li className="music-item">
      <div className="left-container">
        <div className="music-item-image-container">
          <img className="music-item-image" src={imageUrl} alt="track" />
        </div>
        <div className="left-name-container">
          <p className="song-name">{name}</p>
          <p className="song-genre">{genre}</p>
        </div>
      </div>
      <div className="right-container">
        <p className="duration">{duration}</p>
        <button
          className="delete-button"
          alt="delete"
          type="button"
          onClick={onClickDelete}
          data-testid="delete"
        >
          {/* <MdOutlineDeleteOutline /> */}
          <RiDeleteBin7Line />
        </button>
      </div>
    </li>
  )
}

export default MusicItem
