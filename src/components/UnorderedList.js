/**
 * Настраиваемый компонент списка
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */

const UnorderedList = (props) => {
    return (
        <ul className={props.className}>{props.children(props.items)}</ul>
    );
};

export default UnorderedList;