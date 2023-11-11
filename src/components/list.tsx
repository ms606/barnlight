import styled from "styled-components";

export const List = styled.div`
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
    margin-bottom: 40px;
    // flex-wrap:wrap;
`;

export const ListItem = styled.div<{ selected?: boolean }>`
     display: flex;
     flex-direction: column;
     //width: calc(22% - 18px);
     justify-content: flex-start;
     align-items: center;
     padding: 8px 1px 1px 1px;
     background: #fff;
     box-shadow: 0 4px 16px rgba(0,0,0,0.1);;
     border-radius: 16px;
     margin-bottom: 12px;
     margin-right: 8px;
    // border: 1px solid transparent;
     cursor: pointer;
     border: ${props => props.selected ? '1px solid var(--template-primary--900)' : ''};
    
`;

    export const ListItemImage = styled.img`
        height: 68px;
        width: 67px;
        //width: 100%;
        // padding-top: 100%;
        background-size: contain;
        background-position: 50%;
        background-repeat: no-repeat;
        position: relative;

        @media screen and (max-width: 568px) {
            width: 53px;
            height: 57px;
            margin: 0px 4px;

    `
