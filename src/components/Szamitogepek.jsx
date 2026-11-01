// Ide kell importálni a Computers komponenst!
import Computers from './Computers';
import '../css/Szamitogepek.css';

function Szamitogepek({ gepek }) {
  return (
    <div className='szamitogepek-lista'>
      {gepek.map((gep) => (
        <Computers key={gep.id} data={gep} />
      ))}
    </div>
  );
}

export default Szamitogepek;
