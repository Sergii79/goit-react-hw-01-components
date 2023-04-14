import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

export const Layout = ({ children }) => {
    return (
        <Container>
            <header></header>;
            <main>{children}</main>;
            <footer></footer>;            
        </Container>);
};