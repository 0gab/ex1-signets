import '../scss/ListeSignets.scss';
import Signet from './Signet.jsx';
import lesSignets from '../data/signets.json'

export default function ListeSignets(props)
{
    return (
        <section className="ListeSignets">
            <div className="Signets">
                {
                   lesSignets.map(unSignet => <Signet key={unSignet.id} titre={unSignet.titre} couleur={unSignet.couleur} date={unSignet.date} ></Signet>)
                }
            </div>
        </section>
    )
}