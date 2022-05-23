import styled from "styled-components";

export const Container = styled.header`
  background-color: var(--blue);
`

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;

  display: flex;
  padding: 2rem 1rem 12rem;
  justify-content: space-between;
  align-items: center;

  button { 
    color: #fff;
    background-color: var(--blue-light);
    padding: 0 2rem;
    font-size: 1rem;
    height: 3rem;
    border: none;
    transition: filter 0.2s;
    border-radius: 0.25rem;

    &:hover {
      filter: brightness(0.9);
    }
  }

`