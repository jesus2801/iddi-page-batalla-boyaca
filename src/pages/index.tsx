import Layout from '@components/template/layout';
import Banner from '@components/organisms/banner/Banner';
import Animation from '@components/organisms/animation/Animation';
import HomeGrid from '@components/organisms/home-grid/HomeGrid';
import Footer from '@components/molecules/footer/Footer';
import Game from '@components/organisms/game/Game';

const IndexPage = () => (
  <Layout title="Inicio">
    <Animation />
    <Banner />
    <HomeGrid />

    <Game />

    <Footer />
  </Layout>
);

export default IndexPage;
