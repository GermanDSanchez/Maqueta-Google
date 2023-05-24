import './App.css'
import logogoogle from './components/imgs/logogoogle.png'
import { Mic, Camera, SearchIcon} from './components/Icons/'
import { Menu } from './components/Menu.jsx'

export function App () {
    
    return (
        <>
        <header className='header'>
            <a className='headerA' href="https://mail.google.com/mail/&ogbl">Gmail</a>
            <a className='headerA' href="https://www.google.com.ar/imghp?hl=es-419&ogbl">Imágenes</a>
            <Menu />
            <a className='buttonLogin' href="https://accounts.google.com/ServiceLogin?hl=es-419&passive=true&continue=https://www.google.com/&ec=GAZAmgQ">Acceder</a>
        </header>
        <section className='sectionCenter'>
            <img className='sectionLogo' src={logogoogle} alt="Logo de Google" />
            <div className='sectionDivInput'>
                <SearchIcon width={20} height={20} fill='#9aa0a6'/>
                <input className='sectionInput' type="text" />
                <Mic width={24} height={24}/>
                <Camera width={24} height={24}/>
            </div>
            <div className='sectionDivButtons'>
                <a className='sectionButton' href="#">Buscar con Google</a>
                <a className='sectionButton' href="#">Voy a tener suerte</a>
            </div>
        </section>
        <footer className='footer'>
            <div className='footerDivArgentina'>
                <span>Argentina</span>
            </div>
            <div className='footerDivButtons'>
                <div className='footerDiv'>
                    <a href="https://about.google/?fg=1">Sobre Google</a>
                    <a href="https://ads.google.com/intl/es-419_ar/home/?subid=ww-ww-et-g-awa-a-g_hpafoot1_1!o2&fg=1">Publicidad</a>
                    <a href="https://smallbusiness.withgoogle.com/intl/es-419_ar/?subid=ww-ww-et-g-awa-a-g_hpbfoot1_1!o2&gmbsrc=ww-ww-et-gs-z-gmb-s-z-u~sb-g4sb_srvcs-u&c=AR">Negocios</a>
                    <a href="https://www.google.com/search/howsearchworks/?fg=1">Cómo funciona la Búsqueda</a>
                </div>
                <div className='footerDiv'>
                    <a href="https://policies.google.com/privacy?hl=es-419&fg=1">Privacidad</a>
                    <a href="https://policies.google.com/terms?hl=es-419&fg=1">Condiciones</a>
                    <a href="">Preferencias</a>
                </div>
            </div>
        </footer>
        </>
    )
}
