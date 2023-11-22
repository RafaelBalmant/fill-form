import styled from "styled-components";

interface IContainer {
    visible: boolean;
}
export const Container = styled.div<IContainer>`
  display: ${({ visible }: any) => (visible ? "initial" : "none")};
`;
