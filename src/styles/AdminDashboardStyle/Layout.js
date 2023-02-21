import styled from 'styled-components';

export const SideBarStyle = styled.div`
& .container{
    display:flex;

    height: 100vh;

}
& main{
    width: 100%;
    padding: 20px;
    padding-top: 7rem;
    /* border:2px solid red;
    min-height: 100vh; */


}
& .sidebar{
    min-height: 100vh;
    width: 302px;
    z-index: 50;
    /* min-width: 302px; */
    transition: all 0.5s;
    padding-top: 7rem;
    position:fixed;
    background-color: #fff;
    box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.1);
    @media (max-width:768px) {
    width:50px;
}
@media (min-width:769px) {
    width: 302px; 
    
}
}
& .top_section{
    display: flex;
    align-items:center;
    justify-content: center;
    padding:20px 0; 
    width: 50px;
    
}
& .logo{
    font-size: 30px;
}
& .bars{
    display: flex;
    font-size: 25px; 
    color: #000; 
    transition: all 0.5s;
    @media (min-width:769px) {
        display: none;
    }

}
& .link{
    display: flex;
    padding: 10px 15px;
    margin:0 5%; 
    gap: 15px;
    transition: all 0.5s;
    font-size: 14px;
    color:#012A4A;
}
& .link:hover{ 
    transition: all 0.5s;
}
& .active{
    background-color: #DE3D6D;
    color: #fff; 
}
& .icon, & .link_text{
    font-size: 20px;
}

& .mainPage{
    /* margin-left:  310px;
    @media (max-width:768px) {
    margin-left:  20px;
    
} */
}

& .mainPage{
    /* margin:0; */
    width:100%;
    padding-right: 5%;
    box-sizing: border-box;
    margin-left:  310px;
    @media (max-width:768px) {
    margin-left:  2%;   
}
 }
`
