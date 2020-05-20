import React from 'react';

const HeaderRedux = ({setScreenFromHeader}) => {

    return(
        <div className="header">
            <img src="logo.svg" alt="GAME OF GLENN"></img>
        
        <ul>
            <li onClick={() => setScreenFromHeader('Home')}>HEM</li>
            <li className="dropdown">
                <div className="dropbtn">VÄRLDAR</div>
                <div className="dropdown-content">
                <div onClick={() => setScreenFromHeader('Hufvudstaden')} >HUFVUDSTADEN</div>
                <div onClick={() => setScreenFromHeader('Slottsskogen')}>SLOTTSSKOGEN</div>
                <div onClick={() => setScreenFromHeader('Donso')}>DONSÖ</div>
                <div onClick={() => setScreenFromHeader('Hisingen')} >HISINGEN</div>
                </div>
            </li>
            <li><div onClick={() => setScreenFromHeader('Characters')} >KARAKTÄRER</div></li>
            <li><div onClick={() => setScreenFromHeader('About')} >OM GOG</div></li>
           
        </ul>

        




        </div>

    )
}

export default HeaderRedux;