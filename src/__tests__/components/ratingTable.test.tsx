import {screen, render, fireEvent, within} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import RatingTable from '../../components/ratingTable';

const mockPush = jest.fn();
jest.mock('react-router-dom',()=>({
  useHistory: ()=>({
    push: mockPush
  })
}));

const props = {
  isMobile: false,
  ratings: [
    {name: 'joe', score: 5, id: '123456'},
    {name: 'bob', score: 2, id: '654321'},
    {name: 'john', score: 7, id: 'testId'},
  ],
  title: 'Ratings',
  movie: false,
};

describe('RatingTable component', () => {
  it('renders correctly', () => {
    render(<RatingTable {...props} />);
    expect(screen.getByText('Ratings')).toBeTruthy();
  });
  it('shows the mobile layout', () => {
    const newProps = {...props, isMobile: true};
    const {container} = render(<RatingTable {...newProps} />);
    const svg = container.querySelector('[class ="widget-svg"]');
    expect(svg).toHaveStyle(
      'width: 30px; height: 30px; transition: transform .2s ease-in-out;'
    );
  });
  it('show the desktop layout', () => {
    const {container} = render(<RatingTable {...props} />);
    const svg = container.querySelector('[class ="widget-svg"]');
    expect(svg).toHaveStyle(
      'width: 35px; height: 35px; transition: transform .2s ease-in-out;'
    );
  });
  it('sorts by the name alphabetically descending', () => {
    render(<RatingTable {...props} />);
    const name = screen.getByText('Name');
    fireEvent.click(name);
    const ratings = screen.getAllByTestId('ratingName');
    expect(within(ratings[0]).getByText('bob')).toBeTruthy();
    expect(within(ratings[1]).getByText('joe')).toBeTruthy();
    expect(within(ratings[2]).getByText('john')).toBeTruthy();
  });
  it('sorts by the name alphabetcally ascending', () => {
    render(<RatingTable {...props} />);
    const name = screen.getByText('Name');
    fireEvent.click(name);
    fireEvent.click(name);
    const ratings = screen.getAllByTestId('ratingName');
    expect(within(ratings[0]).getByText('john')).toBeTruthy();
    expect(within(ratings[1]).getByText('joe')).toBeTruthy();
    expect(within(ratings[2]).getByText('bob')).toBeTruthy();
  });
  it('sorts by the rating ascending (default sort)', () => {
    render(<RatingTable {...props} />);
    const score = screen.getByText('Score');
    const ratings = screen.getAllByTestId('ratingName');
    expect(within(ratings[0]).getByText('john')).toBeTruthy();
    expect(within(ratings[1]).getByText('joe')).toBeTruthy();
    expect(within(ratings[2]).getByText('bob')).toBeTruthy();
  });
  it('sorts by the rating descending', () => {
    render(<RatingTable {...props} />);
    const score = screen.getByText('Score');
    fireEvent.click(score);
    const ratings = screen.getAllByTestId('ratingName');
    expect(within(ratings[0]).getByText('bob')).toBeTruthy();
    expect(within(ratings[1]).getByText('joe')).toBeTruthy();
    expect(within(ratings[2]).getByText('john')).toBeTruthy();
  });
  it('should go to the viewer page if it shows viewers', () => {
    render(<RatingTable {...props} />);
    const button = screen.getByText('joe');
    fireEvent.click(button);
    expect(mockPush).toHaveBeenLastCalledWith('/viewers/123456')
  })
  it('should go to the movie page if the table shows movies', () => {
    const newProps = {...props, movie: true};
    render(<RatingTable {...newProps} />);
    const button = screen.getByText('bob');
    fireEvent.click(button);
    expect(mockPush).toHaveBeenCalledWith('/movies/654321')
  })
  
});
