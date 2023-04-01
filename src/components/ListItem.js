/**
 * Настраиваемый компонент одного пункта списка
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */

const ListItem = (props) => {
    return (
        <li className={props.className}>{props.children}</li>
    );
};

export default ListItem;