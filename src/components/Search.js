import SearchContainer from "./SearchContainer";
import Logo from "./Logo";
import Form from "./Form";
import Input from "./Input";
import Button from "./Button";

const Search = (props) => {
    return (
        <SearchContainer className="search-container">
            <Logo className="logo-container main-logo" href="/"/>
            <Form className="form">
                <Input type="search" className="search-input"/>
                <Button className="btn">Поиск</Button>
            </Form>
        </SearchContainer>
    );
};

export default Search;