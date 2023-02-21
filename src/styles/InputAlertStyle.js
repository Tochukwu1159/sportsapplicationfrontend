import styled from "styled-components"

export const InputAlertWrapper = styled.div`
    height: 100vh;
    width: 100vw;
    position: absolute;
    z-index: 100;
    top: 0;
    background-size: cover;
    right: 0;
    left: 0;
    margin:0;
    /* border:2px solid red; */
    background-color: rgba(0, 0, 0, 0.2);
    display: flex;
    justify-content: center;
    align-items: center;
    & .input-alert{
        /* border:2px solid red; */
        margin:5%;
        background-color: #fff; 
        width: 35rem;
        & h3{
            font-size: 20px;
            font-weight: 500;
            color: #012A4A;
            text-align: center;
            padding:0.5rem 0 1rem 0;
            border-bottom: 1px solid #D9D9D9;
        }

        & .inputs{
            padding:2rem 3rem;
        }

        & .inputWrapper{
           margin-bottom: 2rem;
        }

        & .buttonWrapper{
            width:100%;
            text-align: center;
        }

        & .closeIcon{
            position: relative;
            left: 92%;
            top: 1rem;
            cursor: pointer;
        }
    }
`