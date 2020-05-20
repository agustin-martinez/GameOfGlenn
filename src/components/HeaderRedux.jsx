import React from 'react';

const HeaderRedux = () => {

    return(
        <div class="header">
            <img src="logo.svg" alt="GAME OF GLENN"></img>
        
        <ul>
            <li><a href="#home">HEM</a></li>
            <li class="dropdown">
                <a href="javascript:void(0)" class="dropbtn">VÄRLDAR</a>
                <div class="dropdown-content">
                <a href="#">HUFVUDSTADEN</a>
                <a href="#">SLOTTSSKOGEN</a>
                <a href="#">DONSÖ</a>
                <a href="#">HISINGEN</a>
                </div>
            </li>
            <li><a href="#news">KARAKTÄRER</a></li>
            <li><a href="#news">OM GOG</a></li>
           
        </ul>

        




        </div>

    )
}

export default HeaderRedux;