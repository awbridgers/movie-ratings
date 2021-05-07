import {IMovie, IViewer} from '../types';
import {OptionTypeBase} from 'react-select';
import {averageRating} from './averageRating';

export const sortMovies = (
  a: IMovie,
  b: IMovie,
  sort: OptionTypeBase
): number => {
  switch (sort.value) {
    case 'dateA':
      return a.date.getTime() - b.date.getTime();
    case 'dateD':
      return b.date.getTime() - a.date.getTime();
    case 'rateA':
      return averageRating(a.ratings) - averageRating(b.ratings);
    case 'rateD':
      return averageRating(b.ratings) - averageRating(a.ratings);
    case 'titleA':
      if (a.title > b.title) {
        return 1;
      } else if (a.title < b.title) {
        return -1;
      }
      return 0;
    case 'titleD':
      if (a.title > b.title) {
        return -1;
      } else if (a.title < b.title) {
        return 1;
      }
      return 0;
    default:
      return b.date.getTime() - a.date.getTime();
  }
  return -1;
};
// exact same thing but with Viewers
export const sortViewers = (
  a: IViewer,
  b: IViewer,
  sort: OptionTypeBase
): number => {
  switch (sort.value) {
    case 'rateA':
      return averageRating(a.ratings) - averageRating(b.ratings);
    case 'rateD':
      return averageRating(b.ratings) - averageRating(a.ratings);
    case 'titleA':
      if (a.name > b.name) {
        return 1;
      } else if (a.name < b.name) {
        return -1;
      }
      return 0;
    case 'titleD':
      if (a.name > b.name) {
        return -1;
      } else if (a.name < b.name) {
        return 1;
      }
      return 0;
    default:
      if (a.name > b.name) {
        return 1;
      } else if (a.name < b.name) {
        return -1;
      }
      return 0;
  }
};
