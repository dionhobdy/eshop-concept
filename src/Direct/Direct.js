import Card from 'react-bootstrap/Card';

import svgDirect from './svgDirect.png';
import logoDirect from './logoDirect.png';

import holderDirect1 from './holderDirect1.png';
import holderDirect2 from './holderDirect2.png';
import holderDirect3 from './holderDirect3.png';
import holderDirect4 from './holderDirect4.png';

 
import './Direct.css';

function Direct() {
    return (
        <div>
        <img className='svgDirect' src={svgDirect} />
        <div className='vidDirect'>
            <iframe width="925" height="520" src="https://www.youtube.com/embed/dKB3WXRWTCM?autoplay=1&mute=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <img src={logoDirect} className='logoDirect'/>

        <h3 className='fontDirect'>Featured</h3>
        <center>
            <img className='holderDirect1' src={holderDirect1} />
            <img className='holderDirect' src={holderDirect2} />
            <img className='holderDirect' src={holderDirect3} />
            <img className='holderDirect' src={holderDirect4} />
        </center>
    </div>
    );
}

export default Direct;