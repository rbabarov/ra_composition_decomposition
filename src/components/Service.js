import UnorderedList from "./UnorderedList";
import ListItem from "./ListItem";
import Logo from "./Logo";
import Link from "./Link";
import {serviceList, logoURL} from "../fakeData";

const Service = (props) => {
    return (
        <UnorderedList items={serviceList} className="service-list service-list__horizontal ml150">
            {(items) =>
                items.map((item) => (
                    <ListItem key={Math.random()} className="service-item">
                        <Logo logoURL={logoURL}/>
                        <Link className="service-link" href="/">
                            {item}
                        </Link>
                    </ListItem>
                ))
            }
        </UnorderedList>
    );
};

export default Service;