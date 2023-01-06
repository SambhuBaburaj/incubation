import Navbar from './Navbar/UserNav'
import BookPage from './hero/bookpage';
const Home=()=>
{
    return(
        <div>
<Navbar/>

<div className='pt-5'>
<BookPage/>

</div>

        </div>
    )
}
export default Home;