import Card from "./Card";
import CardTitle from "./CardTitle";
import CardBody from "./CardBody";
import CardFooter from "./CardFooter";
import CardImage from "./CardImage";
import Link from "./Link";

const Widget = (props) => {
    return (
        <Card className="card mb20" style={{width: '270px'}}>
            {props.imgUrl && <CardImage imgUrl={props.imgUrl}/>}
            <Link className="news-link" href="/">
                <CardTitle className="card-title">{props.title}</CardTitle>
            </Link>
            <CardBody className="card-body">
                {props.children}
            </CardBody>
            {props.footer && <CardFooter />}
        </Card>
    );
};

export default Widget;