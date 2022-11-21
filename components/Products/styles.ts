import { Fab, Modal } from "@mui/material";
import { Field, Form } from 'formik';
import styled from 'styled-components';

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 20px;
    margin-top: 20px;
`;

export const Item = styled.div`
    border-radius: 4px;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
    .row{
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        margin-bottom: 10px;
        text-align: center;
        h2 {
        font-size: 1.5rem;
        width: 100%;
        margin: 0;
        }
        p {
        font-size: 1.2rem;
        width: 100%;
        margin: 0;
        }
        img {
            border-radius: 10%;
        }
    }
    p {
        font-size: 1rem;
        width: 100%;
        margin: 0;
    }   
`

export const ModalComponent = styled(Modal)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .modal {
        background-color: #fff;
        border-radius: 4px;
        padding: 1rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
        h1 {
            font-size: 1.5rem;
            width: 100%;
            margin: 0;
            text-align: center;
            margin-bottom: 1.5rem;
        }
    }
`

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-width: 40vw;
  button {
    font-size: 1rem;
    font-weight: 600;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    border: 1px solid #000;
    background-color: #000;
    color: #fff;
    margin-top: 1rem;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    &:hover {
      background-color: #fff;
      color: #000;
      border: 1px solid #000;
    }
  }
`;

export const StyledField = styled(Field)`
    width: 100%;
    margin-bottom: 1rem;
    padding: 0.5rem;
    border-radius: 4px;
    border: 1px solid #ccc;
    font-size: 1rem;
`

export const StyledFab = styled(Fab)`
    position: fixed;
    bottom: 0;
    right: 0; 
`