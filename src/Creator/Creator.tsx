import { useRef, useState } from 'react';
import { Form, Field } from 'react-final-form';
import * as P from './parts';

const Creator = () => {
  const [teams, setTeams] = useState<string[]>([]);
  const teamInput = useRef<HTMLInputElement>();

  const addTeam = () => {
    if (teamInput.current) {
      setTeams([...teams, teamInput.current.defaultValue]);
    }
  };

  return (
    <P.CreatorWrapper>
      <Form
        onSubmit={(formObj) => {
          console.log(formObj);
        }}
      >
        {({ handleSubmit }) => (
          <form>
            <P.Option>
              <P.OptionName>TOORNEY NAME</P.OptionName>
              <P.InputText
                component="input"
                name="toorneyName"
                placeholder="type name..."
              ></P.InputText>
            </P.Option>

            <P.Option>
              <P.OptionName>TOORNEY SYSTEM</P.OptionName>
              <P.OptionContainer>
                <label>
                  <Field name="system" component="input" type="radio" value="league" /> League
                </label>
                <label>
                  <Field name="system" component="input" type="radio" value="play-off" /> Play-off
                </label>
              </P.OptionContainer>
            </P.Option>

            <P.Option>
              <P.OptionName>ADD TEAM</P.OptionName>
              <P.OptionContainer>
                <P.InputText
                  ref={teamInput}
                  component="input"
                  name="team"
                  placeholder="add team..."
                />
                <P.AddButton type="button" onClick={addTeam}>
                  +
                </P.AddButton>
              </P.OptionContainer>
            </P.Option>

            {/* <button type="submit">NEXT</button> */}
          </form>
        )}
      </Form>
      <P.Divider />
      <P.ListTeamsWrapper>
        <h2>TEAMS</h2>
        <P.ListTeams>
          {teams.map((team) => (
            <li>{team}</li>
          ))}
        </P.ListTeams>
      </P.ListTeamsWrapper>
    </P.CreatorWrapper>
  );
};

export default Creator;
