import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import Breadcrumbs from '../../components/breadcrumbs/breadcrumbs';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import ProductCard from '../../components/product-card/product-card';
import SimilarList from '../../components/similars-list/similars-list';
import Reviews from '../../components/review/reviews';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { useParams } from 'react-router-dom';
import { fetchCameraAction, fetchReviewsAction, fetchSimilarAction } from '../../store/api-actions';
import { useEffect, useState } from 'react';
import { selectCamera } from '../../store/camera-slice/selectors';
import ReviewForm from '../../components/review/review-form/review-form';
import { selectReviews } from '../../store/reviews-slice/selectors';
import { REVIEWS_COUNT } from '../../constants';
import { Review } from '../../types/review';
import UpButton from '../../components/up-button/up-button';

function ProductScreen(): JSX.Element {
  const params = useParams();
  const dispatch = useAppDispatch();
  const cameraId = Number(params.id);
  const camera = useAppSelector(selectCamera);
  const reviewsData = useAppSelector(selectReviews);
  const reviews = [...reviewsData].sort((a, b) => (a.createAt > b.createAt ? -1 : 1));

  const [isAddReviewModalOpen, setIsAddReviewModalOpen] = useState(false);

  useEffect(() => {
    if (cameraId) {
      dispatch(fetchCameraAction(cameraId));
      dispatch(fetchReviewsAction(cameraId));
      dispatch(fetchSimilarAction(cameraId));
    }
  }, [isAddReviewModalOpen, cameraId, dispatch]);

  const handleAddReviewButtonClick = () => {
    setIsAddReviewModalOpen(true);
  };

  const [showCount, setShowCount] = useState<number>(REVIEWS_COUNT);

  const getReviewsList = (items: Review[]) => items.slice(0, showCount);

  return(
    <HelmetProvider>
      <div className="wrapper">
        <Helmet>
          <title>{ camera.name } - Фотошоп</title>
          <meta name="description" content="Фотошоп — Интернет-магазин фото- и видеотехники" />
        </Helmet>
        <Header />
        <main>
          <div className="page-content">
            <Breadcrumbs camera={camera} />
            <ProductCard camera={camera}/>
            <SimilarList />
            <Reviews
              reviews={getReviewsList(reviews)}
              handleAddReviewButtonClick={handleAddReviewButtonClick}
              onChangeShowCount={setShowCount}
              showCount={showCount}
            />
          </div>
          { isAddReviewModalOpen && <ReviewForm setActive={setIsAddReviewModalOpen} cameraId={cameraId}/>}
        </main>
        <UpButton />
        <Footer />
      </div>
    </HelmetProvider>
  );
}

export default ProductScreen;
