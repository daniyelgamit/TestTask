import styled from 'styled-components';

export const TextFieldContainer = styled.div`
  margin: 15px 0;
  label {
    margin-left: 10px;
  }
  
  .form-control {
    border: 2px solid #3dba6b;
    border-radius: 20px;
    color: #ffffff;
    background-color: transparent;
  }
  
  .form-control:focus {
    border:2px solid #3dba6b;
    box-shadow: unset;
  }
  
  .form-control.is-invalid {
    border:2px solid #dc3545;
  }
`;
