import styled from '@emotion/styled';

export const List = styled.ul``;

export const Item = styled.li`
  margin-bottom: 10px;
  &:last-child {
    margin-bottom: 0px;
  }
`;

export const Data = styled.span`
  margin-right: 10px;
`;

export const DeleteButton = styled.button`
    display: inline-block;
    font-weight: 400;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    border: 1px solid transparent;
    padding: .375rem .75rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: .25rem;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
        color: #fff;
    background-color: #dc3545;
    border-color: #dc3545;
}

`;
