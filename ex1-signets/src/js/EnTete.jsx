import '../scss/EnTete.scss';

export default function EnTete (props){
    return(
        <header className="EnTete">
            <ul>
                <li>Signets</li>
                <li>Gabriel Devoyau-Lanctôt<img src={'./images/profil.jpg'} alt="Test"/></li>
            </ul>
        </header>
    );

}