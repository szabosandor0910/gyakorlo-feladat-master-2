import '../css/Computers.css';

function Computers({ data }) {
  return (
    <div className='pc-kartya'>
      <img src={data.image} alt={data.computerName} className="pc-image" />

      <div className="pc-tartalom">
        <span className="pc-id">Rendszer ID: {data.id}</span>

        <h2 className='pc-nev'>{data.computerName}</h2>
        <p className='pc-leiras'>{data.description}</p>

        <div className="pc-footer">
          <span className="pc-link">RÉSZLETEK ↗</span>
          <span className="pc-datum">{data.date}</span>
        </div>
      </div>
    </div>
  );
}

export default Computers;
