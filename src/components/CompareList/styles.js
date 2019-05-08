import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 50px;
`;

export const Repository = styled.div`
  width: 250px;
  background: #fff;
  border-radius: 3px;
  margin: 0 10px;
  display: flex;
  flex-direction: column;

  header {
    padding: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  strong {
    font-size: 24px;
    margin-top: 10px;
  }

  small {
    font-size: 14px;
    color: #666;
  }

  img {
    width: 64px;
  }

  ul {
    list-style: none;
    li {
      font-weight: bold;
      padding: 12px 20px;
      small {
        font-weight: normal;
        font-size: 12px;
        color: #999;
        font-style: italic;
      }

      &:nth-child(2n-1) {
        background: #f5f5f5;
      }
    }
  }

  footer {
    display: flex;
    flex-direction: row;
    button {
      width: 50px;
      height: 50px;
      padding: 3px 7px;
      margin: 8px;
      background: #fff;
      border: 0;
      font-size: 20px;
      color: #fff;
      font-weight: bold;
      border-radius: 3px;
      cursor: pointer;

      &.remove {
        color: #f99;
        border: 1px solid #f99;
        &:hover {
          background-color: #f99;
          color: #fff;
        }
      }
      &.update {
        color: #ffd151;
        border: 1px solid #ffd151;
        &:hover {
          background-color: #ffd151;
          color: #fff;
        }
      }
    }
  }
`;
