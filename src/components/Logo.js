import Link from "./Link";

/**
 * Настраиваемый компонент логотипа
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */

const Logo = (props) => {
    return (
        <div>
            <Link className={props.className} href={props.href}>{props.children}</Link>
        </div>
    );
};

export default Logo;