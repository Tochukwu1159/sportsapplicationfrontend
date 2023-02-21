import styled from 'styled-components';

export const StyledContainer = styled.div`
background: #E5E5E5;
justify-content: center;
display: flex;
min-height: 100vh;
align-items: center;
width: 100vw;

`;

export const StyledFormArea = styled.div`
background-color: white;
min-width: 50%;
max-width: 100%;
margin:0; 
display: flex;
flex-direction: column;
align-items: center;
padding: 6% 2%;
`;



export const Logo = styled.div`
width: 100%;
text-align: center;
& img{
    width: 10rem;
}
`

export const StyledTitle = styled.h2` 
 
font-weight: 700;
font-size: 18px;
margin: 12% 0 14% 0;
color: #21334F;
`;

export const RestForm = styled.form`
 margin: 16px ;
`


export const FormLabel = styled.label`
    font-size: 12px;
    color: #21334F;
    /* font-weight: lighter; */
`

export const FormInput = styled.input`
height: 48px;
border:1px solid #D9D9D9;
padding: 0 5%;
margin : 10px 0 23px 0;
& ::placeholder {
    color: #C4C4C4;
    font-size: 12px;
    font-weight: lighter;
}
`

export const ResetPassword = styled.span`
font-size: 12px;
font-weight: lighter;
`



