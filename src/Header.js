import {NavLink} from 'react-router-dom';

function Header(){
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <NavLink className="navbar-brand" exact to="/customer">Customer APP</NavLink>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <NavLink className="nav-link" exact to="/customer" activeClassName="active">Customer</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" exact to="/classEx1" activeClassName="active">Class-Example-1</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" exact to="/classEx2" activeClassName="active">Class-Example-2</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" exact to="/propsExample" activeClassName="active">Props-Example</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" exact to="/propValidation" activeClassName="active">Prop-Validation</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" exact to="/componentLifeCycleExample" activeClassName="active">Component-Life-Cycle</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" exact to="/propsExample1" activeClassName="active">Props-Example-1</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" exact to="/commonExamples" activeClassName="active">Common-Examples</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" exact to="/myHoc" activeClassName="active">HOC</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" exact to="/hoc2" activeClassName="active">HOC-2</NavLink>
                </li>
            </ul>
        </div>
        </nav>
    );
}

export default Header;