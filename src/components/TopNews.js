import UnorderedList from "./UnorderedList";
import {newsLists, newsArray, logoURL} from "../fakeData";
import ListItem from "./ListItem";
import Link from "./Link";
import Logo from "./Logo";

const TopNews = () => {
    return (
        <div className="top-news">
            <div className="top-news-navbar ml25">
                <UnorderedList items={newsLists} className="top-news-list top-news-list__horizontal">
                    {(items) =>
                        items.map((item) => (
                            <ListItem key={Math.random()} className="top-news-item">
                                <Link  className="news-link" href="/">
                                    {item}
                                </Link>
                            </ListItem>
                        ))
                    }
                </UnorderedList>
            </div>
            <div className="top-news-list">
                <UnorderedList items={newsArray} className="top-news-list">
                    {(items) =>
                        items.map((item, index) => (
                            <ListItem key={Math.random()} className="top-news-item d-flex">
                                <Logo className="top-news-logo">
                                    <img src={logoURL[index]} alt="" style={{width: '15px', marginRight: '10px'}}/>
                                </Logo>
                                <Link className="top-news-link" href="/">
                                    {item}
                                </Link>
                            </ListItem>
                        ))
                    }
                </UnorderedList>
            </div>
        </div>
    );
};

export default TopNews;
