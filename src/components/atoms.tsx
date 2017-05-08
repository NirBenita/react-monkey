import styled from 'styled-components';

export const Button = styled.button`
    background-color: #5280FF;
    border-radius: 4px;
    padding:6px 18px;
    border:none;
    outline:none;
    color:white;
    transition: background-color 0.2s ease-in;
    cursor:pointer;
    font-weight:bold;
    font-size:14px;

    &:hover{
      background-color: #4D78F0;
    }
`;

export const Bar = styled.div`
  background: #F7F7F7;
  box-shadow: 0 8px 8px 0 rgba(0,0,0,0.04);
  width: 100%;
  position: fixed;
  top:0;
  height: 60px;
  text-align: center;
  background: white;
  line-height: 60px;
  transition:top 0.2s ease-in;

  &.hide {
    top:-60px;
  }
`;
