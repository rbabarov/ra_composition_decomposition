import UnorderedList from "./UnorderedList";
import ListItem from "./ListItem";
import Link from "./Link";
import {currency} from "../fakeData";

const Currency = (props) => {
    return (
        <UnorderedList items={currency} className="currency-list currency-list__horizontal ml25">
            {(items) =>
                items.map((item) => (
                    <ListItem key={Math.random()} className="currency-item">
                        <div>
                            <Link className="currency-link" link="/">
                                <span className="currency-desc currency-desc__currency">
                                    {item.currency}
                                </span>
                            </Link>
                            <span className="currency-desc currency-desc__price">
                                {item.price}
                            </span>
                        </div>
                    </ListItem>
                ))
            }
        </UnorderedList>
    );
};

export default Currency;
