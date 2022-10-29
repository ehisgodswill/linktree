import zuri from './assets/Zuri.Internship_Logo.png';
import i4g from './assets/I4G.png'
function Footer(){
    return(
        <footer className="footer">
            <div><img src={zuri} alt="Zuri Training"/></div>
            <div>HNG Internship 9 Frontend Task</div>
            <div><img src={i4g} alt="Ingresive For Good"/></div>
        </footer>
    )
}

export default Footer;