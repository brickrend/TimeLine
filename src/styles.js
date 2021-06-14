import styled, {
  createGlobalStyle,
  GlobalStyleComponent,
} from "styled-components";

export const MainImage = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 30%;
`;

export const ItemWrap = styled.div`
  margin-up: 1px;
  padding-bottom: 5px;
`;

export const Title = styled.h1`
  text-align: center;
  color: gray;
  border-radius: left 20px right 20px;
  border-style: solid;
  border-color: #282c34;
  background-color: #282c34;
`;

export const ListWrapper = styled.div`
  text-align: center;
  img {
    object-fit: cover;
    max-height: 250px;
    min-width: 100px;
    padding-bottom: 20px;
    padding-top: 15px;
    align: 50%;
  }
  p {
    text-align: center;
    margin: auto;
    background-color: #282c34;
    color: gray;
  }
`;

export const BackGround = styled.div`
  background-color: gray;
`;
