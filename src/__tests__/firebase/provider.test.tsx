import React, {useContext} from 'react';
import FirebaseProvider, {FirebaseContext} from '../../firebase/provider';
import {render, screen, waitFor} from '@testing-library/react';
import firebase from 'firebase/app';
import App from '../../App';
import {MovieContext} from '../../types';
import {stringify} from 'node:querystring';
import ViewerHome from '../../pages/viewerHome';
import {BrowserRouter} from 'react-router-dom';
import {AuthContext} from '../../firebase/authProvider';

//mocks
window.scrollTo = jest.fn();
const mockOnceMovie = jest.fn();
const mockOnceUser = jest.fn();
const mockOn = jest.fn();
jest.mock('../../firebase/config', () => ({
  db: {
    ref: (type: string) => ({
      once: type.includes('movie') ? mockOnceMovie : mockOnceUser,
      on: mockOn,
      off: jest.fn()
    }),
  },
}));

const movieData = [
  {
    key: 'Test Movie',
    val: () => ({
      date: '12/12/12',
      id: '1234',
      cage: true,
    }),
    child: () => [
      {
        key: '123456',
        val: () => ({displayName: 'Adam', score: 6, id: '123456'}),
      },
      {
        key: '654321',
        val: () => ({displayName: 'Sam', score: 3, id: '654321'}),
      },
    ],
  },
  {
    key: 'Test Movie 2',
    val: () => ({
      date: '11/11/11',
      id: '4321',
      cage: false,
    }),
    child: () => [
      {
        key: '123456',
        val: () => ({displayName: 'Adam', score: 8, id: '123456'}),
      },
      {
        key: '654321',
        val: () => ({displayName: 'Sam', score: 1, id: '654321'}),
      },
    ],
  },
];
const viewerData = [
  {
    val: () => ({
      ratings: [],
      displayName: 'Adam',
    }),
    key: '123456',
    child: () => [
      {
        val: () => 6,
        key: 'Test Movie',
      },
    ],
  },
  {
    val: () => ({
      ratings: [],
      displayName: 'Sam',
    }),
    key: '654321',
    child: () => [
      {
        val: () => 3,
        key: 'Test Movie',
      },
    ],
  },
];
const results: MovieContext = {
  movie: [
    {
      title: 'Test Movie',
      date: new Date('12/12/12'),
      ratings: [
        {name: 'Adam', score: 6, id: '123456'},
        {name: 'Sam', score: 3, id: '654321'},
      ],
      id: '1234',
      cage: true,
    },
    {
      title: 'Test Movie 2',
      date: new Date('11/11/11'),
      ratings: [
        {name: 'Adam', score: 8, id: '123456'},
        {name: 'Sam', score: 1, id: '654321'},
      ],
      id: '4321',
      cage: false,
    },
  ],
  viewer: [
    {
      name: 'Adam',
      ratings: [{name: 'Test Movie', score: 6, id: 'Test-Movie'}],
      id: '123456',
    },
    {
      name: 'Sam',
      ratings: [{name: 'Test Movie', score: 3, id: 'Test-Movie'}],
      id: '654321',
    },
  ],
  userMovie: [],
  displayName: '',
};

const val: MovieContext = {
  movie: [],
  userMovie: [],
  viewer: [],
  displayName: 'Adam',
};
const user = {} as unknown as firebase.User;
const TestApp = () => {
  const data = useContext(FirebaseContext);
  return <div>{JSON.stringify(data)}</div>;
};
const renderComp = () => {
  //just return the data as a string

  render(
    <FirebaseProvider>
      <TestApp />
    </FirebaseProvider>
  );
};

describe('Firebase provider', () => {
  describe('firebase Context', () => {
    it('should make the context', () => {
      const Test = () => {
        const name = useContext(FirebaseContext).displayName;
        return <h1>{name}</h1>;
      };
      render(
        <FirebaseContext.Provider value={val}>
          <Test />
        </FirebaseContext.Provider>
      );
      expect(screen.getByText('Adam')).toBeInTheDocument();
    });
  });
  describe('Firebase provider', () => {
    beforeEach(() => {
      mockOnceMovie.mockResolvedValue(movieData);
      mockOnceUser.mockResolvedValue(viewerData);
      mockOn.mockImplementation(
        (t: string, cb: (snap: firebase.database.DataSnapshot) => void) =>
          cb({val: () => null} as firebase.database.DataSnapshot)
      );
    });
    it('should load the movie data', async () => {
      await waitFor(() => renderComp());
      expect(
        expect(screen.getByText(JSON.stringify(results))).toBeInTheDocument()
      );
    });
    it('should throw error on movie fetch', async () => {
      mockOnceMovie.mockRejectedValueOnce({message: 'error'});
      const spy = jest.spyOn(console, 'log');
      await waitFor(() => renderComp());
      await waitFor(() => expect(spy).toHaveBeenCalledWith('error'));
    });
    it('should catch error on viewer fetch', async () => {
      mockOnceUser.mockRejectedValueOnce({message: 'error viewer'});
      const spy = jest.spyOn(console, 'log');
      await waitFor(() => renderComp());
      await waitFor(() => expect(spy).toHaveBeenCalledWith('error viewer'));
    });
    it('should change display name to logged in user', async () => {
      mockOn.mockImplementationOnce((t: string, cb: (snap: firebase.database.DataSnapshot) => void) =>
      cb({child:()=>[],val: () => ({displayName: 'adam',})} as unknown as firebase.database.DataSnapshot)
  );
      await waitFor(() =>
        render(
          <AuthContext.Provider value={{uid: '5'} as firebase.User}>
            <FirebaseProvider>
              <TestApp />
            </FirebaseProvider>
          </AuthContext.Provider>
        )
      );
      const display = {...results, displayName: 'adam'};
      await screen.findByText(JSON.stringify(display));
      expect(screen.getByText(JSON.stringify(display))).toBeInTheDocument();
    });
    it('should set display name to empty string', async() => {
      mockOn.mockImplementationOnce((t: string, cb: (snap: firebase.database.DataSnapshot) => void) =>
      cb({child:()=>[],val: () => (null)} as unknown as firebase.database.DataSnapshot)
  );
      await waitFor(() =>
        render(
          <AuthContext.Provider value={{uid: '5'} as firebase.User}>
            <FirebaseProvider>
              <TestApp />
            </FirebaseProvider>
          </AuthContext.Provider>
        )
      );
      const display = {...results, displayName: ''};
      await screen.findByText(JSON.stringify(display));
      expect(screen.getByText(JSON.stringify(display))).toBeInTheDocument();
    })
    it('should not add the viewer if they have no ratings',async () => {
      const noMovie = [{
        val: () => ({
          ratings: null,
          displayName: 'Adam',
        }),
        key: '123456',
        child: () => [
          {
            val: () => 6,
            key: 'Test Movie',
          },
        ],
      }]
      mockOnceUser.mockResolvedValueOnce(noMovie);
      renderComp();
      const newResults = {...results, viewer:[]}
      await waitFor(()=>expect(screen.getByText(JSON.stringify(newResults))).toBeInTheDocument())
    })
  });
});
