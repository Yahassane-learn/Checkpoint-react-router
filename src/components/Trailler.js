import { useParams } from 'react-router-dom';


const Trailler = ( ) => {

    const { title } = useParams();

    return (
        <div className='Movie'>
            {movies
                .filter((movie) => movie.title === title)
                .map((movie, index) => (
                    <div key={index} >
                        <video width="320" height="240" autoPlay>
                            <source src={movie.srcMovie} type="video/mp4" />
                        </video> 
                        <h5>{movie.title}</h5>
                        <a href={movie.href} className="MovieURL"> <h6> movieURL </h6> </a>
                    </div>
                ))}
dgb
        </div>

    )
}
export default Trailler;