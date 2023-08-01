import { InfoOutlined, PlayArrow } from '@mui/icons-material'
import '../featured/featured.css'
import List from '../list/List' 

const Featured = ({ type }) => {
    return (
        <div className='featured'>
            {type && (
                <div className="category">
                    <span>
                        {type === 'movie' ? 'Movies' : 'Series'}
                    </span>
                    <select name="genre" id="genre">
                        <option>Genre</option>
                        <option value="advanture">Advanture</option>
                        <option value="comedy">Comedy</option>
                        <option value="crime">Crime</option>
                        <option value="fantasy">Fantasy</option>
                        <option value="historical">Historical</option>
                        <option value="horrer">Horrer</option>
                        <option value="romance">Romance</option>
                        <option value="sci-fi">Sci-fi</option>
                        <option value="thriller">Thriller</option>
                        <option value="westren">Westren</option>
                        <option value="animation">Animation</option>
                        <option value="drama">Drama</option>
                        <option value="documentry">Documentry</option>
                    </select>
                </div>
            )}
            <img width='100%' src="https://w0.peakpx.com/wallpaper/994/181/HD-wallpaper-la-casa-de-papel-season-4-netflix-series-movies.jpg" alt="" />
            <div className="info">
                <img src="https://occ-0-2773-300.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABRYwssiYqFQk0AMTz6Sk2gJcynwEXm7Z63r-s6aIkwDimtUWoZefgzIsMjMumecjIZWEPE8uoixk_-Acjx57MGODKOw9AGpXTDdPwzwBjSTR2U4COxyFlrtRISIBmHYYtyuEUIvm__G6eMlm0HfP2gEJeq6LnU5O8cdpioXzGlMxJWq1c-qikw.png?r=768" alt="" />
                <soan className="desc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum debitis sapiente corrupti reprehenderit provident, quos molestiae porro suscipit magni numquam omnis sequi molestias. Eaque dicta vero consequuntur dolores ex excepturi?
                </soan>
                <div className="buttons">
                    <button className="play">
                        <PlayArrow />
                        <span>
                            play
                        </span>
                    </button>
                    <button className="more">
                        <InfoOutlined />
                        <span>
                            Info
                        </span>
                    </button>
                </div>
            </div>
            <List />
        </div>
    )
}

export default Featured