import Header from '../components/Header'
import Banner from '../components/Banner';
import HomeMain from '../components/HomeMain';
const Home = () => {

    const text = 'paris 2024 data la plateforme d\'information';
    return (
        <div>
            <Header />
            <Banner text={text} />
            <HomeMain />
        </div>
    )
}

export default Home;
