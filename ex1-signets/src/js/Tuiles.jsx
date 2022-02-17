import '../scss/Tuiles.scss';
// import MoreVertIcon from '@material-ui/icons/MoreVert';

export default function Tuiles(props){
    let couleur = {backgroundColor : props.CouleurTuile};

    return(
        <li className="Tuiles" Couleur={couleur}>
            <img src={'./images/' + props.ImgID + '.png'} alt={props.Nom}/>
            <div className="Carte">
                <p className="Nom">{props.Nom}</p>
                <p className="Modif">{props.Modif}</p>
                {/*<MoreVertIcon />*/}
            </div>
        </li>
    );
}