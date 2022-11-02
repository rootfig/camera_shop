import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { store } from '../../../mocks/mock-store';
import HistoryRouter from '../../history-route/history-route';
import ReviewForm from './review-form';

describe('Component: ReviewForm', () => {
  it ('should render corectly', () => {
    const history = createMemoryHistory();

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <ReviewForm setActive={function (value: boolean): void {
            throw new Error('Function not implemented.');
          } } cameraId={0}
          />
        </HistoryRouter>
      </Provider>
    );

    expect(screen.getByTestId('review-form')).toBeInTheDocument();
  });
});