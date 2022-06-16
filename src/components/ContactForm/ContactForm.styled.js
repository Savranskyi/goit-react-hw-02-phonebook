import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 400px;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #3d3d3d;
  border-radius: 5px;
  margin: 0, auto;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  font-size: 20px;
  text-align: center;
`;

export const Input = styled.input`
  font-size: 14px;
  //   width: 200px;
  height: 30px;
  padding-left: 10px;
  margin-bottom: 20px;
  border: 1px solid #cccccc;
  border-radius: 0.25rem;

  &:hover,
  &:focus {
    outline: none;
    box-shadow: 1px 1px 1px #2e2e2e;
  }
`;

export const Button = styled.button`
  display: inline-block;
  font-weight: 400;
  text-align: center;
  color: #fff;
  background-color: #28a745;

  white-space: nowrap;
  vertical-align: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  &:hover,
  &focus {
    box-shadow: 1px 1px 1px #2e2e2e;
  }
`;
