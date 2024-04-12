import styled from 'styled-components'

export const TextEditorBgContainer = styled.div`
    background-color: #25262c;
    min-height:100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding:50px;
`

export const TextEditorContainer = styled.div`
    background-color: #1b1c22;
    width: 100%;
    height:450px;
    display:flex;
    padding:10px;
`

export const TextEditorImgContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
`

export const TextHeading = styled.h1`
    font-family: 'Roboto';
    font-size: 22px;
    color: #f8fafc;
    font-weight:500;
    margin-top:10px;    
`

export const Image = styled.img`
    width: 300px;
    margin-bottom:50px;
    padding-left:20px;
`

export const EditableBgContainer = styled.div`
    background-color: #25262c;
    min-height: 50vh;
    min-width: 38vw;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 30px;
    margin-top: 10px;
    margin-bottom: 10px;
    border: 1px solid #cbd5e1;
    border-radius: 10px;
`

export const ButtonsContainer = styled.ul`
    list-style-type: none;
    display: flex;
    padding-left: 0px;
    margin: 10px;
`

export const Button = styled.button`
    background-color: transparent;
    color: ${props => props.color};
    outline: none;
    border: none;
`

export const ItalicBtn = styled.button`
    background-color: transparent;
    color: ${props => props.color};
    outline: none;
    border: none;
`

export const UnderlineBtn = styled.button`
    background-color: transparent;
    color: ${props => props.color};
    outline: none;
    border: none;
`

export const HrLine = styled.hr`
    width: 100%;
    color: #cbd5e1;
    border-width: 1px;
`

export const TextAreaElement = styled.textarea`
    background-color: transparent;
    border: none;
    outline: none;
    color: #f1f5f9;
    font-family: 'Roboto';
    font-size: 15px;
    font-weight: ${props => props.fontWeight};
    font-style: ${props => props.fontStyle};
    text-decoration: ${props => props.textDecoration};
    margin: 18px;
`
