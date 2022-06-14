import { Field } from 'react-final-form';
import styled from 'styled-components';

export const CreatorWrapper = styled.section`
  width: 50vw;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: space-evenly;
  color: #e7e7e7;
`;

export const Option = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
`;

export const InputText = styled(Field)`
  height: 36px;
  padding: 4px 8px;
  font-size: 18px;
  background-color: #e7e7e7;
  border: none;
`;

export const OptionContainer = styled.div`
  display: flex;
  align-items: center;

  label {
    margin: 0 12px;
  }
`;

export const OptionName = styled.span`
  margin-bottom: 12px;
`;

export const AddButton = styled.button`
  width: 36px;
  height: 36px;
  font-size: 24px;
  margin-left: 10px;
  border: none;
  cursor: pointer;
  background-color: #f49f1c;
`;

export const Divider = styled.span`
  border-left: 1px solid #f49f1c;
  height: 300px;
`;

export const ListTeamsWrapper = styled.section``;

export const ListTeams = styled.ul`
  li {
    list-style-type: none;
  }
`;
