import styled from 'styled-components';

export const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #242424;
  border-radius: 20px;
  padding: 30px 60px;
  
  @media (min-width: 320px) and (max-width: 480px) {
    padding: 10px;
  }
    
  @media (min-width: 481px) {
      width: 600px;
  }
  
  form {
    width: 100%;
  }
  
  .form-check-input:checked {
    background-color: #3dba6b;
    border-color: #3dba6b;
  }
  
  .form-check-input {
    border: 2px solid #3dba6b;
  }
  
  .form-check-input:focus {
    border-color: #3dba6b;
    box-shadow: unset;
  }
  
  .terms-condition{
    color: #3dba6b;
    cursor: pointer;
  }
  
  .btn-primary {
    background-color: #3dba6b;
    border-color: #3dba6b;
  }
  
  .btn-check:focus+.btn-primary, .btn-primary:focus {
   box-shadow: unset;
  }
`;