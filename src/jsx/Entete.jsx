import '../scss/Entete.scss';

import Avatar from '@mui/material/Avatar';


export default function Entete(props)
{
    return (
        <header className="Entete">
            <h3>Exercice 1 - Signets</h3>
            <h4>Gabriel Devoyau-Lanctôt</h4>
            <Avatar className="Profil" src="profil/Portrait_Officiel.jpg" />
        </header>
    );
}