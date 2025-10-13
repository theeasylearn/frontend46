import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";

function Team(props) {
  return (
    <div className="col-lg-3">
      <div className="card mb-3">
        <div className="card-body">
          <div className='row'>
            <div className='col'>
              <img src={props.flagUrl} className="img-fluid" alt={props.name} />
            </div>
            <div className='col'>
              <p className='fs-6 fw-semibold'>{props.name}</p>
              <p>{props.captain}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function AsiaCup(props) {
  let team=props.Teams;
  return (
    <div className='container mt-5'>
      <div className="row">
        {team.map((item,index)=>{
          return <Team key={index} name={item.name} captain={item.captain} flagUrl={item.flagUrl}/>
        })}
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
let list=[
  {
    name:"Afghanistan",
    captain:"Not Declared",
    flagUrl:"https://flagcdn.com/af.svg"
  },
  {
    name:"Bangladesh",
    captain:"Not Declared",
    flagUrl:"https://flagcdn.com/bd.svg"
  },
  {
    name:"Hong Kong",
    captain:"Yasim Murtaza",
    flagUrl:"https://flagcdn.com/hk.svg"
  },
  {
    name:"India",
    captain:"Suryakumar Yadav",
    flagUrl:"https://flagcdn.com/in.svg"
  },
  {
    name:"Oman",
    captain:"Not Declared",
    flagUrl:"https://flagcdn.com/om.svg"
  },
  {
    name:"Pakistan",
    captain:"Not Declared",
    flagUrl:"https://flagcdn.com/pk.svg"
  },
  {
    name:"Sri Lanka",
    captain:"Not Declared",
    flagUrl:"https://flagcdn.com/lk.svg"
  },
  {
    name:"United Arab",
    captain:"Not Declared",
    flagUrl:"https://flagcdn.com/ae.svg"
  }
]
root.render(<AsiaCup Teams={list} />);
