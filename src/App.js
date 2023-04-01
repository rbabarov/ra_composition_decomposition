import './App.css';
import TopNews from "./components/TopNews";
import Currency from "./components/Currency";
import Widget from "./components/Widget";
import Service from "./components/Service";
import Search from "./components/Search";
import AdsBanner from "./components/AdsBanner";
import WidgetsContainer from "./components/WidgetsContainer";

function App() {
    return (
        <div className="wrapper">
            <div className="top-section ml150">
                <div className="top-section-news">
                    <TopNews/>
                    <Currency/>
                </div>
                <Widget
                        imgUrl="https://images.unsplash.com/photo-1635832636644-7bfbc2c61592?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=875&q=80"
                        title="Работа над ошибками"
                >
                    Смотрите на Яндексе и запоминайте
                </Widget>
            </div>
            <Service/>
            <Search/>
            <AdsBanner
                href="/"
                imageURL="https://images.unsplash.com/photo-1635832636644-7bfbc2c61592?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=875&q=80"
                linkClasses="link"
                imageClasses="image"
                bannerClasses="banner-container ml150"/>
            <WidgetsContainer/>
        </div>
    );
}

export default App;
