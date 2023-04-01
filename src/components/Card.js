/**
 * Настраиваемый компонент обертки карточки
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */

const Card = (props) => (
    <div className={props.className} style={props.style}>{props.children}</div>
);

export default Card;
