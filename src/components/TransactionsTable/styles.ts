import styled from "styled-components"; 

export const Container = styled.div`
    margin-top: 4rem;
    max-width: 1120px;

    table {
        width: 100%;
        border-spacing: 0 0.5rem;

        th {
            color: var(--text-body);
            text-align: left;
            font-weight: 400;
            padding: 1rem 2rem;
            line-height: 1.5rem;
        }

        td {
            padding: 1rem 2rem;
            border: 0;
            background-color: var(--shape);
            color: var(--text-body);
            font-weight: 400;
            border-radius: 0.25rem;

            &:first-child {
                color: var(--text-title);
            }

            &.withdraw {
                color: var(--red);
            }

            &.deposit {
                color: var(--green);
            }
        }
    }
`