import styled from 'styled-components' 

import { FcEmptyTrash, FcCheckmark } from 'react-icons/fc';


 export const Container = styled.div`
    background: linear-gradient(90deg, #383838 0%, #000000 81.25%);
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
 `

export const ToDoList = styled.div`
  background: white;
  padding: 30px 20px;
  border-radius: 5px;
  ul {
    padding: 0;
    margin-top: 60px;
  }
`


export const Input = styled.input`
 border: 2px solid rgba(209,211,212, 04);
 border-radius: 5px;
 height: 40px;
 width: 340px;
 padding: 10px 15px;
 margin-right: 40px;
 box-sizing: border-box;
 

`
export const Button = styled.button`
 background: #8052ec;
 border-radius: 10px;
 font-weight: 900;
 font-size: 17px ;
 line-height: 2px;
 height: 40px;
 border: none;
 color: #ffffff;
 width: 130px;
 cursor: pointer;

 &:hover {
    opacity: 0.8;

 }

 &:active {
    opacity: 0.6;
 }

`

export const ListItem = styled.div`
   background: ${(props) => (props.isFinished ? '#e8ff8b':'#e4e4e4')};
   box-shadow: 1px 4px 10px rgba(0, 0, 0, 0.2);
   border-radius: 5px;
   height: 60px;
   display: flex;
   align-items: center;
   justify-content: space-between;
   margin-bottom: 30px;
   padding: 0 10px;
   width: 500px;

   li {
    list-style: none;

   }

`

export const Trash = styled(FcEmptyTrash)`
 cursor: pointer;
`
export const Check = styled(FcCheckmark)`
 cursor: pointer;
`

export const NoItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  animation: fadeIn 0.5s ease-in-out;
  
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const NoItemsIcon = styled.div`
  font-size: 50px;
  margin-bottom: 10px;
`;

export const NoItemsMessage = styled.h3`
  color: #555;
  font-size: 18px;
`;