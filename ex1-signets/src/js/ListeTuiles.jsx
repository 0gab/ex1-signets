import '../scss/ListeTuiles.scss';
import DataSignets from '../data/signets.json';
import Tuiles from "./Tuiles";

export default function ListeTuiles(props){
    return(
        <div className="ListeTuiles">
            <ul className="ListeTuilesUL">
                {DataSignets.map(UnSignet => <Tuiles key={UnSignet.ImgId} couleur={UnSignet.Couleur} modif={UnSignet.Modif}/>) }
            </ul>
        </div>
    );
}