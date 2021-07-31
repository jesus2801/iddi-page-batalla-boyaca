import Layout from '@components/template/layout';
import Banner from '@components/organisms/banner/Banner';
import Animation from '@components/organisms/animation/Animation';
import HomeGrid from '@components/organisms/home-grid/HomeGrid';

const IndexPage = () => (
  <Layout title="Inicio">
    <Animation />
    <Banner />
    <HomeGrid />
  </Layout>
);

export default IndexPage;
