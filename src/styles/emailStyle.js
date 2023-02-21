import styled from 'styled-components'

export const colors = {
    theme: 'lemon',
    light1: 'antiquewhite',
    light2: '#E5E7EB',
    dark1: '#1F2937',
    dark2: '#B7C4CF',
    dark3: '#9CA3AF',
    dark4: '#6B7280',
    red: '#DC2626',
}

export const ExtraText = styled.p`
font-weight: lighter;
font-size: 16px;
color: #012A4A;
text-align: center;
`;

export const TextLink = styled.span`
font-weight: 400;
font-size: 16px;
margin: 10% 0;
& a{
    color: 
rgba(223, 62, 110, 1)
}
& button{
    color: 
rgba(223, 62, 110, 1);
border: none;
background-color: transparent;
}
`;


export const StyledContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
background: #E5E5E5;
height: 100vh;
`;

export const StyledTitle = styled.h2`
/* position: absolute; */
font-weight: 600;
font-size: 32px;
line-height: 39px;
/* identical to box height */
color: #03435F;
text-align: center;
`;



export const StyledSubTitle = styled.p`
font-weight: 200;
font-size: 16px; 
color: #03435F;
width: 50%;
max-width: 100%;
text-align: center;
`;

export const StyledFormButton = styled.button`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 16px 122px;
gap: 10px;
position: absolute;
width: 204px;
height: 54px;
margin-left: 300px;
margin-top: 75px;

background: linear-gradient(104.22deg, #DE3D6D 38.86%, #F5844C 82.71%)
`;

export const  ButtonWrapper = styled.div`
width: 204px;
max-width: 100%;
`
export const Avatar = styled.div`
width: 100px;
height: 100px;
border-radius: 50%;
background-image: url(${(props) => props.image});
background-size: cover;
background-position: center;
margin: 0 auto;
`;

export const CopyrightText = styled.p`
padding: 5px;
margin: 20px;
text-align: center;
color: ${colors.light2};
`;

export const StyledFormArea = styled.div`
/* position: absolute; */
width: 50%;
max-width: 90%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 6% 2%;
background: #FFFFFF;
@media (max-width: 550px) {
    width: 90%;
}
`;


export const StyledLabel = styled.p`
text-align: left;
font-size: 15px;
font-weight: bold;
`;

export const ButtonGroup = styled.div`
display: flex;
justify-content: space-around;
flex-direction: row;
margin-top: 25px;
`;

export const StyledTextInput = styled.input`
width: 263px;
height: 39px;
margin-left: -275px;
font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 32px;
line-height: 39px;
color: #21334F;
flex: none;
order: 0;
flex-grow: 0;
`;

export const Icon = styled.div`
`