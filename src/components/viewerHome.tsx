import React, {useState} from 'react';
import {IViewer} from '../types';
import ViewerCard from './viewerCard';
import Select, {OptionTypeBase} from 'react-select';
import { sortViewers } from '../util/sortMovies';

interface IProps {
  viewerData: IViewer[];
}
const options = [
  {value: 'rateA', label: 'Rating (Ascending)'},
  {value: 'rateD', label: 'Rating (Descending)'},
  {value: 'titleA', label: 'Name (Ascending)'},
  {value: 'titleD', label: 'Name (Descending)'},
];

const ViewerHome = ({viewerData}: IProps) => {
  const [sortType, setSortType] = useState<OptionTypeBase>(options[2]);

  return (
    <div className="viewerHomePage">
      <div className="viewerSort">
        <Select
          isSearchable={false}
          className="select"
          options={options}
          value={sortType}
          onChange={setSortType}
        />
      </div>
      <div className="viewerHome">
        {viewerData.sort((a,b)=>sortViewers(a,b,sortType)).map((viewer, i) => (
          <ViewerCard key={viewer.name} ratings={viewer.ratings} name={viewer.name} />
        ))}
      </div>
    </div>
  );
};

export default ViewerHome;
