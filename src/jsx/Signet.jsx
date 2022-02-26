import '../scss/Signet.scss';

import SortIcon from '@mui/icons-material/Sort';
import MoreVertIcon from '@mui/icons-material/MoreVert';

export default function Signet(props)
{
    let couleur = {backgroundColor: props.couleur};

    return (
        <article className="Signet" style={couleur}>
            <SortIcon className="sort"/>
            <img src={"./signets/" + props.titre + ".jpg"} alt={props.titre}></img>
            <h2 className="Titre">{props.titre}</h2>
            <p className="Date">{props.date}</p>
            <MoreVertIcon className="MoreVertIcon" />
        </article>
    );
}