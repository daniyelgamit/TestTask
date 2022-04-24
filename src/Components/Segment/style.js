import styled from 'styled-components';


export const SegmentContainer = styled.div`
    display: flex;
    flex-direction: row;
    border-radius: 20px;
    padding: 5px;
    background-color: #111111;
    width: auto;

    .segment {
      padding: 5px 15px;
      border-radius: 20px;
      background-color: transparent;
      cursor: pointer;
      text-transform: uppercase;
    }
    
    .selected-segment {
      background-color: #3dba6b;
    }

`;