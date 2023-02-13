import "bootstrap/dist/css/bootstrap.min.css"
import {ClientNav} from "../../../core/utils/Types";
import {Container, Nav, Navbar} from "react-bootstrap";
import logo from '../../../assets/img/admin/logo_bird.png'
import {Link} from "react-router-dom";
import '../../../core/components/css/ClientFont.css'
import "../../../core/components/css/ClientLayout.css"
const ClientLayout = (props)=>{

    return (
        <div className="w-100">
            <Container fluid className={"px-0"}>
                {props.children}
            </Container>
        </div>
    )
}
export const ClientNavigate = (props)=>{
    const {links} = props
    return (
        <Navbar expand="md" className={"px-0"}>
                <Navbar.Brand href="#home">
                    <img src={logo} alt={'logo'} width={'100%'} height={'100%'}/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        {links.map(link=>{
                            return (
                                <>
                                    {link.title === "login" ?
                                        <Link className={'text-white px-lg-4 px-3 bg-black'} style={{borderRadius:"10px",textDecoration:"none",fontFamily: 'Inter',fontSize:"14px"}} key={link?.id.toString()} to={link?.to}>{link?.title.toUpperCase()}</Link>
                                        :
                                        <Link className={'text-black px-lg-4 px-3'} style={{textDecoration:"none",fontFamily: 'Inter',fontSize:"14px"}} key={link?.id.toString()} to={link?.to}>{link?.title.toUpperCase()}</Link>
                                    }

                                </>
                            )
                        })}
                    </Nav>
                </Navbar.Collapse>
        </Navbar>
    )
}
export default ClientLayout;