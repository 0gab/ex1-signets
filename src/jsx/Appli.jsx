import '../scss/Appli.scss';
import Entete from './Entete';
import ListeSignets from './ListeSignets';

import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

export default function Appli()
{
  return (
    <div className="Appli">
      <Entete />
      <ListeSignets />
      
      <Fab className="Fab">
        <AddIcon />
      </Fab>
    </div>
  );
}
