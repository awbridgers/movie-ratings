import React, {useContext, useState} from 'react';
import ViewerCard from '../components/viewerCard';
import Select, {OptionTypeBase} from 'react-select';
import { sortViewers } from '../util/sortMovies';
import { FirebaseContext } from '../firebase/provider';


const options = [
  {value: 'rateA', label: 'Rating (Ascending)'},
  {value: 'rateD', label: 'Rating (Descending)'},
  {value: 'titleA', label: 'Name (Ascending)'},
  {value: 'titleD', label: 'Name (Descending)'},
];

const ViewerHome = () => {
  const viewers = useContext(FirebaseContext).viewer;
  const [sortType, setSortType] = useState<OptionTypeBase>(options[2]);
  return (
    <div className="viewerHomePage">
      <div className="viewerSort">
      <label style = {{display:'none'}} htmlFor = 'sort'>Sort</label>
        <Select
          isSearchable={false}
          className="select"
          options={options}
          value={sortType}
          onChange={setSortType}
          inputId = 'sort'
        />
      </div>
      <div className="viewerHome">
        {viewers.slice().sort((a,b)=>sortViewers(a,b,sortType)).map((viewer) => (
          <ViewerCard key={viewer.id} ratings={viewer.ratings} name={viewer.name} id={viewer.id}/>
        ))}
      </div>
    </div>
  );
};

export default ViewerHome;
