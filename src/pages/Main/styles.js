import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 68px;
`;

export const Form = styled.form`
  margin-top: 20px;
  width: 100%;
  max-width: 400px;
  display: flex;
  input {
    flex: 1;
    height: 55px;
    padding: 0px 20px;
    background: #fff;
    border: 0;
    font-size: 18px;
    color: #444;
    border-radius: 3px;
  }
  button {
    height: 55px;
    padding: 0px 20px;
    margin-left: 10px;
    background: #63f5b8;
    border: 0;
    font-size: 20px;
    color: #fff;
    font-weight: bold;
    border-radius: 3px;
    &:hover {
      background: #52d89f;
      cursor: pointer;
    }
  }
`;
