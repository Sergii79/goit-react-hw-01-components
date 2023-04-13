import styled from "styled-components";

export const Layout = ({ children }) => {
    return (
        <div>
            <header></header>;
            <main>{children}</main>;
            <footer></footer>;            
        </div>);
};