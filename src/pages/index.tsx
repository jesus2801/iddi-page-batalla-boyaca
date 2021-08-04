import Layout from '@components/template/layout';
import Banner from '@components/organisms/banner/Banner';
import Animation from '@components/organisms/animation/Animation';
import HomeGrid from '@components/organisms/home-grid/HomeGrid';
import Footer from '@components/molecules/footer/Footer';
import Game from '@components/organisms/game/Game';
import Cards from '@components/organisms/game/Cards';

const IndexPage = () => (
  <Layout title="Inicio">
    <Animation />
    <Banner />
    <HomeGrid />

    <Game />
    <Cards />

    <Footer />
  </Layout>
);

export default IndexPage;
