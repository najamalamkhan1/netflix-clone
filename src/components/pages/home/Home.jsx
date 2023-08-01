import List from '../../list/List'
import Featured from '../../featured/Featured'
import Navbar from '../../navbar/Navbar'
import './home.css'
const Home = () => {
  return (
    <div className='home'>
      <Navbar />
      <Featured type='movie' />
      <List />
      <List />
      <List />
    </div>
  )
}

export default Home