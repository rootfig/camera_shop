import { useEffect } from 'react';
import { AppRoute } from '../../constants';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchPromoAction } from '../../store/api-actions';
import { selectPromo } from '../../store/promo-slice/selectors';

function Banner(): JSX.Element {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchPromoAction());
  }, [dispatch]);


  const promo = useAppSelector(selectPromo);

  const { id, name, previewImg, previewImg2x, previewImgWebp, previewImgWebp2x } = promo;
  return (
    <div className="banner" data-testid='banner'>
      <picture>
        <source type="image/webp" srcSet={ `../${ previewImgWebp }, ../${ previewImgWebp2x }`} />
        <img
          src={ `../${previewImg}` }
          srcSet={ `../${previewImg2x}` }
          width="1280"
          height="280"
          alt="баннер"
        />
      </picture>
      <p className="banner__info">
        <span className="banner__message">Новинка!</span>
        <span className="title title--h1">{ name }</span>
        <span className="banner__text">Профессиональная камера от&nbsp;известного производителя</span>
        <a
          className="btn"
          href={`${AppRoute.Product}/${id}`}
        >
          Подробнее
        </a>
      </p>
    </div>
  );
}

export default Banner;
