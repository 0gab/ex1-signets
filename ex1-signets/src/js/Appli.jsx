import '../scss/Appli.scss';
import EnTete from './EnTete';
import ListeTuiles from './ListeTuiles';
// import Footer from './Footer';



export default function Appli() {
  return (
    <div className="Appli">
        <EnTete />
        <ListeTuiles />
        {/*<Footer />*/}
    </div>
  );
}
