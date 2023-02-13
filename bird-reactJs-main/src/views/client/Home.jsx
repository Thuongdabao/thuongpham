import "bootstrap/dist/css/bootstrap.min.css"
import ClientLayout, {ClientNavigate} from "../layout/client/ClientLayout";
import  "../../core/components/css/ClientLayout.css"
import  "../../core/components/css/ClientFont.css"
import birdImage from '../../assets/img/client/bird-image.png'
import  img5655 from '../../assets/img/client/Rectangle5656.png'
import {ClientNav} from "../../core/utils/Types";
import  hotTournament1 from  '../../assets/img/client/hot-tournament.png'
import  hotTournament2 from  '../../assets/img/client/hot-tournament-2.png'
import  hotTournament3 from  '../../assets/img/client/hot-tournament-3.png'
import cup from '../../assets/img/client/cup.png'
import  image6 from '../../assets/img/client/image 6.png'
import  image7 from '../../assets/img/client/image 7.png'
import  image8 from '../../assets/img/client/image 8.png'
import  image23 from '../../assets/img/client/image 23.png'
import footerImg from '../../assets/img/client/footer.png'
import googleImg from '../../assets/img/client/google.png'
import facebookImg from '../../assets/img/client/facebook.png'
import insImg from '../../assets/img/client/instagram.png'

import copyRight from '../../assets/img/client/copy-right.png'

import {Image} from "react-bootstrap";
const Home = (props)=>{
    const links = [
        new ClientNav(1,"match","/Client/Match"),
        new ClientNav(2,"tournament","/Client/Tournament"),
        new ClientNav(3,"rule","/Client/Rule"),
        new ClientNav(4,"BXH","/Client/BXH"),
        new ClientNav(5,"about","/Client/About"),
        new ClientNav(6,"login","/Client/Login")
    ]
    return (
        <ClientLayout>
            <div className={'w-100'}>
                <HomeHeader>
                    <ClientNavigate links={links}/>
                </HomeHeader>
                <WayOfBirdTournament/>
                <HotTournament/>
                <BenefitOfBirdTournament/>
                <Footer/>
            </div>
        </ClientLayout>

    )
}
const Footer = (props)=>{
    return (
        <div className="w-100 row my-5 px-lg-5 px-1 footer m-0">
            <div className="my-5"></div>
            <hr/>
            <div className="col-12 col-sm-6 col-md-3 col-lg-3 p-2 text-md-start text-center">
                <p className="fw-bold fs-5 font-inter">Phần mềm quản lý giải đấu</p>
                <ul className="list-unstyled pe -md-3 px-1">
                    <li className="font-inter">Điều khoản sử dụng</li>
                    <li className="font-inter">Chính sách thanh toán</li>
                    <li className="font-inter">Chính sách bảo mật thông tin cá nhân</li>
                    
                </ul>
                <div className="py-2 d-md-flex justify-content-center my-2 align-item-center">
                        <img  src={googleImg} width={40} height={40} alt={"image"}/>
                        <img  src={facebookImg} width={40} height={40} className={"mx-4"} alt={"image"}/>
                        <img  src={insImg} width={40} height={40} alt={"image"}/>
                    </div>
            </div>
            <div className="col-12 col-sm-6 col-md-2 col-lg-2 p-2 text-md-start text-center">
                <p className="fw-bold fs-5 font-inter my-md-5"></p>
                <ul className="list-unstyled pe-md-3 px-1">
                    <li className="font-inter">Chính sách bảo mật</li>
                    <li className="font-inter">Liên hệ</li>
                    <li className="font-inter">Bảng giá</li>
                </ul>
                
            </div>
            <div className="col-12 col-sm-6 col-md-3 col-lg-3 p-2 text-md-start text-center">
                <p className="fw-bold font-inter fs-5">Công ty cổ phần Tournament Bird</p>
                <ul className="list-unstyled pe-md-3 px-1">
                    <li className="font-inter">Địa chỉ : Đường abc , quận abc m TP HCM</li>
                    <li className="font-inter">SDT : 037664839</li>
                    <li className="font-inter">Email : Abc@gmail.com</li>
                    <li className="font-inter">@Copy-right - 2023 : Bản quền thuộc về công ty Tournament Bird.</li>
                    <li className="font-inter">Đã đăng ký bản quyền</li>
                </ul>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-4 p-2 d-flex justify-content-center align-items-center">
                <img src={footerImg} width={"100%"} style={{objectFit:"cover",margin:"auto"}} height={"100%"}/>
            </div>
            <div className="my-5"></div>
        </div>
    )
}
const WayOfBirdTournament = (props)=>{
    return (
        <div className={'row w-100 my-5 bg way-of-bird-bg mx-0'}>
            <div className={'py-5'}></div>
            <div className={'py-5'}>

                <div className={'col-12 my-5'}>
                    <p className={'fw-bold fs-5 text-center font-inter'}>Cuộc hành trình của Bird Tournament</p>
                </div>

                <div className={'col-12 col-md-6 mx-auto'}>
                    <div className={'row'}>
                        <div className={'col-4'}>
                            <p className={'fs-5 fw-bold text-center my-0 font-inter'}>1000+</p>
                            <p className={'fs-6 fw-light text-center font-inter'}>Số trận đã tổ chức</p>
                        </div>
                        <div className={'col-4'}>
                            <p className={'fs-5 fw-bold text-center my-0'}>200+</p>
                            <p className={'fs-6 fw-light text-center font-inter'}>Số chim đã tham gia</p>
                        </div>
                        <div className={'col-4'}>
                            <p className={'fs-5 fw-bold text-center my-0'}>2000+</p>
                            <p className={'fs-6 fw-light text-center font-inter'}>Số đã phiếu bầu cử</p>
                        </div>
                    </div>
                </div>
                <div className={'my-5'}></div>
                <div className={'col-10 mx-auto py-5'}>
                    <div className={'row'}>
                        <div className={'col-12 col-md-6 position-relative'}>
                            <div className={'w-md-50 right--100 bottom-100 mx-auto position-md-absolute bg-white rounded p-3 d-flex flex-column align-items-center justify-content-center'}>
                                <img src={img5655} className={'img-fluid'} alt={'image'}/>
                                <div className={'pb-0 mt-3'}>
                                    <p style={{fontSize:"10px",lineHeight:1.3}}>
                                        “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.”
                                    </p>
                                </div>
                                <div className={'w-100'}>
                                    <p className={'text-info text-end my-0'} style={{fontSize:'10px',lineHeight:.6}}>John Doe</p>
                                    <p className={'text-black text-end my-0'} style={{fontSize:'10px'}}>Staff Engineer, Algolia</p>
                                </div>
                            </div>
                        </div>
                        <div className={'col-12 col-md-6 d-none d-md-block'}>
                            <img src={birdImage} className={'img-fluid'}/>
                        </div>
                    </div>
                </div>
            </div>
            {/*<div className={'my-5'}></div>*/}
        </div>
    )
}
const BenefitOfBirdTournament = ()=>{
    return (
        <div className={'row w-100 m-0 bg benefit-of-tournament py-5 position-relative'}>
            <p className={'fs-3 fw-bold text-center w-100 position-absolute'} style={{top:"80px",zIndex:100}}>Benefits of Bird Tournament</p>
            {/*    layer*/}
            <div className={'w-100 d-none d-md-block position-absolute h-100 benefit-layer-resp-bottom'}>
                <div className={'row  mx-auto'} style={{width:"90%"}}>
                    <div className={'col-6 d-flex flex-column justify-content-center align-items-center'}>
                        <img src={image6} alt={'image'} width={80} height={80}/>
                        <p className={'fw-light font-inter w-25 text-center'}>Tiết kiếm 90% thời gian tìm giải đấu</p>
                    </div>
                    <div className={'col-6 d-flex flex-column justify-content-center align-items-center'}>
                        <img src={image8} alt={'image'} width={100} height={100}/>
                        <p className={'fw-light font-inter w-25 text-center'}>Giúp chim cưng phát triển toàn diện hơn</p>
                    </div>
                </div>
                <div className={'row mx-auto'} style={{width:"70%"}}>
                    <div className={'col-0 col-md-2'}></div>
                    <div className={'col-12 col-md-8 d-flex flex-column justify-content-center align-items-center'}>
                        <div className={'row w-100 justify-content-between'}>
                            <div className={'col-6 d-flex justify-content-center align-items-center flex-column'}>
                                <img src={image7} alt={'image'} width={50} height={50}/>
                                <p className={'fw-light font-inter  w-50 text-center mt-3'}>Kết nối bạn bè bốn phương</p>
                            </div>
                            <div className={'col-6 d-flex justify-content-center align-items-center flex-column'}>
                                <img src={image8} alt={'image'} width={80} height={80}/>
                                <p className={'fw-light  font-inter w-50 text-center'}>Giúp tăng giá trị sở hữu của chim</p>
                            </div>
                        </div>
                    </div>
                    <div className={'col-0 col-md-2'}></div>
                </div>
            </div>
            <div className={'w-100 h-100 d-flex justify-content-center align-items-center'}>
                <div className={'border circle-resp d-flex border-2 justify-content-center align-items-center rounded-circle'}>
                    <div style={{width:"80%",height:"80%"}} className={'border border-2 d-flex justify-content-center align-items-center rounded-circle'}>
                        <div style={{width:"70%",height:"70%"}} className={'border border-2 d-flex justify-content-center align-items-center rounded-circle'}>
                            <img src={cup} width={'60%'} className={'rounded-circle'} height={'60%'} alt={'image'}/>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
const HotTournament = (props)=>{
    return (
        <div className={'row w-100 py-5 m-0 px-1 bg hot-tournament-bg'}>
            <div className={'col-10 mx-auto rounded py-5 bg-black d-flex justify-content-center align-items-center'}>
                <p className={'text-white fs-5 fw-bold m-0'}>Hot Tournament</p>
            </div>
            <div className={'col-10 d-flex justify-content-center align-items-center mx-auto my-5'}>
                <div className={'row w-100'}>
                    <div className={'col-12 col-sm-6 d-flex flex-column justify-content-center align-items-center col-md-4 text-center px-5 px-md-3 px-lg-5'}>
                        <img src={hotTournament1} className={'rounded'} width={230} height={320} alt={'image'}/>
                        <p className={'fw-bold font-inter'}>Giai dau cau nhung chu chim chao mao DNA</p>
                    </div>
                    <div className={'col-12 col-sm-6 col-md-4 d-flex flex-column justify-content-center align-items-center text-center px-5 px-md-3 px-lg-5'}>
                        <img src={hotTournament2} className={'rounded'} width={230} height={320} alt={'image'}/>
                        <p className={'fw-bold font-inter'}>Giai dau cau nhung chu chim chao mao HUE</p>
                    </div>
                    <div className={'col-12 col-sm-6 col-md-4 d-flex flex-column justify-content-center align-items-center text-center px-5 px-md-3 px-lg-5'}>
                        <img src={hotTournament3} className={'rounded'} width={230} height={320} alt={'image'}/>
                        <p className={'fw-bold font-inter'}>Giai dau cau nhung chu chim chao mao CM</p>
                    </div>
                </div>
            </div>
            <div className={'my-5'}></div>
        </div>
    )
}
const HomeHeaderSearch = (props)=>{
    return (
        <div className={'row align-self-center'} style={{width:'50%'}}>
            <div className={'col-8 mx-auto col-md-4 px-1 text-center mb-4 mb-md-0'}>
                <button className={'btn w-100 bg-black text-white py-2'} style={{fontSize:"14px"}}>Research Now</button>
            </div>
            <div className={'col-12 col-md-8 px-1'}>
                <div className={'border px-2 py-1 rounded bg-white d-flex justify-content-start align-items-center'}>
                    <div style={{width:"20px",paddingRight:"30px",textAlign:'center', height:"26px"}}>
                        <span className={'fa fa-search text-muted'}></span>
                    </div>
                    <input className={"text-muted border-0 w-100"} style={{fontSize:"12px"}} placeholder={'Tìm kiếm'}/>
                </div>
            </div>
        </div>
    )
}
const HomeHeader = (props)=>{
    return (
        <div className={'row mx-0 w-100 home-header bg client-header-bg px-lg-5'}>
            <div className={'col-12'}>
                {props.children}
            </div>
            <div className={'col-12 d-flex flex-column justify-content-center align-items-center'}>
                <p className={'fw-bold text-center font-inter'} style={{fontSize:'3rem',lineHeight:1}}>The Bird Tournament</p>
                <p className={'text-center mt-2 mb-5 font-inter'}>Giải đấu đỉnh cao cho những chú chim chào mào</p>
                <HomeHeaderSearch/>
            </div>
        </div>
    )
}
export default Home;