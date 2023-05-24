import { useState } from 'react'

import { googlecollections, logocalendar, logocontactos, logodrive, logomeet, logofotos, logogmail, logog, logomaps, logonoticias, logoplay, logotraductor, logoyoutube, 
logoshopping, logochat, logoavatar, logoblogger, logobooks, logoclassroom, logodocuments, logoearth, logohangouts, logojamboard, logokeep, logosheets, logoslides, logoforms, logoone, logostore } from './imgs/'

import MenuIcon from './Icons/MenuIcon'
import './Menu.css'


const Lista = ({ icono, nombre }) => {

    return (
        <li className='menuLi'>
            <a href="#">
                <img src={icono} width={53} height={53} alt="Icono de Google Apps" />
                <span>{nombre}</span>
            </a>
        </li>
    )
};

export function Menu () {

    const [dropdown, setDropdown] = useState(false)

    const handleClick = () => {
        setDropdown(!dropdown)
    }

    const objetosMenu = [
        {
            icono: logoavatar,
            nombre: "Cuenta",
            id: 1
        },
        {
            icono: logog,
            nombre: "Búsqueda",
            id: 2
        },
        {
            icono: logomaps,
            nombre: "Maps",
            id: 3
        },
        {
            icono: logoyoutube,
            nombre: "Youtube",
            id: 4
        },    
        {
            icono: logoplay,
            nombre: "Play",
            id: 5
        },
        {
            icono: logonoticias,
            nombre: "Noticias",
            id: 6
        },
        {
            icono: logogmail,
            nombre: "Gmail",
            id: 7
        },
        {
            icono: logomeet,
            nombre: "Meet",
            id: 8
        },      
        {
            icono: logochat,
            nombre: "Chat",
            id: 9
        },  
        {
            icono: logocontactos,
            nombre: "Contactos",
            id: 10
        },
        {
            icono: logodrive,
            nombre: "Drive",
            id: 11
        },
        {
            icono: logocalendar,
            nombre: "Calendario",
            id: 12
        },
        {
            icono: logotraductor,
            nombre: "Traductor",
            id: 13

        }, 
        {
            icono: logofotos,
            nombre: "Fotos",
            id: 14

        },
        {
            icono: logoshopping,
            nombre: "Shopping",
            id: 15
        }
    ];

    const objetosMenu2 = [
        {
            icono: logodocuments,
            nombre: "Documentos",
            id: 16
        },
        {
            icono: logosheets,
            nombre: "Hojas de cálculo",
            id: 17
        },
        {
            icono: logoslides,
            nombre: "Presentaciones",
            id: 18
        },
        {
            icono: logobooks,
            nombre: "Libros",
            id: 19
        },        
        {
            icono: logoblogger,
            nombre: "Blogger",
            id: 20
        },
        {
            icono: logohangouts,
            nombre: "Hangouts",
            id: 21
        },
        {
            icono: logokeep,
            nombre: "Google Keep",
            id: 22
        },
        {
            icono: logojamboard,
            nombre: "Jamboard",
            id: 23
        },      
        {
            icono: logoclassroom,
            nombre: "Classroom",
            id: 24
        },  
        {
            icono: logoearth,
            nombre: "Earth",
            id: 25
        },
        {
            icono: googlecollections,
            nombre: "Guardado",
            id: 26
        },
        {
            icono: logoone,
            nombre: "Google One",
            id: 27
        },
        {
            icono: logoforms,
            nombre: "Formularios",
            id: 28
        }, 
        {
            icono: logostore,
            nombre: "Chrome Web Store",
            id: 29
        },
    ];

    return (
        <>
            <button className='headerButtons' onClick={handleClick}><MenuIcon width={24} height={24} fill="#fff"/></button>
            <section className={`sectionMenu ${dropdown ? "desplegar" : ""}`}>
                <div className='menuDiv'>
                    <ul className='menuUl'>
                        {
                        objetosMenu.map((objeto) => {
                            return (
                                <Lista icono = {objeto.icono} nombre = {objeto.nombre} key={objeto.id}/>
                            )
                        })
                        }
                    </ul>
                </div>
                <span className='sectionLine'></span>
                <div className='menuDiv'>
                    <ul className='menuUl'>
                        {
                        objetosMenu2.map((objeto) => {
                            return (
                                <Lista icono = {objeto.icono} nombre = {objeto.nombre} key={objeto.id}/>
                            )
                        })
                        }
                    </ul>
                </div>
            </section>
        </>
    )
}