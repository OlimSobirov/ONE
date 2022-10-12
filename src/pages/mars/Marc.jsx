import './Marc.scss'
import image2 from '../../asetss/images/marc.png'
import {Link} from 'react-router-dom'

function Marc(){

    return(
        <main className='destinationbox'>
        <article className='destination'>

             <div className='destination__image'>
                <h4>01 Pick your destination</h4>
                <img src={image2} alt="" />

             </div>
             <div className='destination__info'>
                <div className='destination__info__nav'>
                    <ul>
                        <li><Link to="/destination">MOON</Link></li>
                        <li><Link to="/destination/mars">MARS</Link></li>
                        <li><Link to="/destination/europa">EUROPA</Link></li>
                        <li><Link to="/destination/titan">TITAN</Link></li>
                        
                    </ul>
                </div>
                <div className='destination__info__name'>
                    <h2>MARS</h2>
                    <p>
                     



                        <span> Don’t forget to pack your hiking boots. You’ll need them to   </span>

                    <span>tackle Olympus Mons, the tallest planetary mountain in</span>
                    <span>our solar system. It’s two and a half times the size of</span>
                    Everest!
                    </p>
                </div>
                <div className='destination__info__info'>
                    <div className='destination__info__info__info1'>
                        <p>AVG. DISTANCE</p>
                        <h4>225 MIL. km</h4>
                    </div>
                    <div className='destination__info__info__info2'>
                    <p>Est. travel time</p>
                        <h4>9 months</h4>
                    </div>
                    
            
                </div>
             </div>
             <div></div>

        </article>

        
        
    </main>
    

    )
}
export default Marc