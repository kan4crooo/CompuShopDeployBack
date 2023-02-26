
import React from "react";
import style from "./ProfileDetail.module.css"
import { useAuth0 } from "@auth0/auth0-react";
import {Link} from 'react-router-dom'


const ProfileDetail = () => {
    
    
    const { user, logout } = useAuth0();
    const infoUser = JSON.parse(localStorage.getItem("user"));
    console.log("info user profile", infoUser);
    
    return (
        <div className={style.fondo}>
            <div className={style.container}>
                <p className={style.titulo}><i class="fa-solid fa-user "></i> Mi cuenta</p>
                <Link to={"/productos"}><p className={style.volver}>🡸</p></Link>
                
                <div className={style.izquierda}>
                    <div className={style.cuadro1}>
                        <h2><i class="fa-solid fa-user-secret"></i> Mi información</h2>
                        <p>Nombre: {user.name}</p>
                        <p>Email: {user.email}</p>
                        <p>Celular: {user.phone_number} </p>
                    </div>

                    <div className={style.cuadro2}>
                        <h2><i class="fa-solid fa-bag-shopping"></i> Mis compras</h2>
                        <p>Aqui van a aparecer tus futuras reviews de productos</p>
                    </div>
                    
                    <div className={style.cuadro3}>
                            <h2><i class="fa-solid fa-star"></i> Mis reviews</h2>
                            <p>Aqui van a aparecer tus futuras compras</p>
                        </div>
                    </div>
    
                    <div className={style.derecha}>
                        <div className={style.cuadro4}>
                            <h2><i class="fa-solid fa-file-invoice-dollar"></i> Mis facturas</h2>
                            <p>Aqui van a aparecer tus futuras facturas</p>
                        </div>
    
                        <div className={style.cuadro5}>
                            <h2><i class="fa-solid fa-map-location-dot"></i> Mi dirección</h2>
                            <p>Direccion actual: {user.address}</p>
                            <button className={style.direccion}>Actualizar mi dirección</button>
                        </div>
    
                        <div className={style.cuadro6}>
                            <Link to={"/shoppingCart"}><button className={style.carrito}><i class="fa-solid fa-cart-shopping"></i> Carrito</button></Link>
                            <Link to={"/edituser"} ><button className={style.datos}><i class="fa-solid fa-wrench"></i> Actualizar información</button></Link>
                            <button className={style.salir} onClick={()=> logout({ returnTo: window.location.origin})}><i class="fa-solid fa-right-from-bracket"></i> Cerrar sesión</button>
                        </div>
                    </div>
                </div>
            </div>)

    }
export default ProfileDetail;