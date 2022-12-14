import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import Banner from '../../components/banner/banner';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { AppRoute } from '../../constants';
import { Link } from 'react-router-dom';

function NotFoundScreen(): JSX.Element {
  return(
    <HelmetProvider>
      <div className="wrapper">
        <Helmet>
          <title>Not Found - Фотошоп</title>
          <meta name="description" content="Фотошоп — Интернет-магазин фото- и видеотехники" />
        </Helmet>

        <Header />

        <main>

          <Banner />

          <div className="page-content" data-testid='not-found-screen'>

            <p >404 Страница не найдена</p>
            <Link style={{fontSize: 40}} to={`${AppRoute.Catalog}/1`}> Вернуться в каталог</Link>
          </div>
        </main>

        <Footer />

      </div>
    </HelmetProvider>
  );
}

export default NotFoundScreen;
