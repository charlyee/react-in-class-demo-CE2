import * as React from 'react';
import { Grid, Input, Button } from 'semantic-ui-react';

export interface ISpecialInputSectionProps {
    onClickUserNameSetButton: (input: string) => void;
}

interface IState {
    userName: string;
}

export default class SpecialInputSection extends React.Component<ISpecialInputSectionProps, IState> {
    constructor(props: ISpecialInputSectionProps) {
        super(props);
        
        this.state = {
            userName: ""
        }
    }

    private onInputFieldChange = (e: React.FormEvent<HTMLInputElement>) => {
        console.log(e.currentTarget.value);
        this.setState({ userName: e.currentTarget.value })
    }

    public render() {
        const { onClickUserNameSetButton } = this.props;
        const { userName } = this.state;

        let userNameExampleTwo = "Bob";

        let changedUserList = [
            {
                id: 1,
                username: "BobChangedName",
                favoritePizza: "ChangedPizza",
                faveColor: "ChangedFaveColor"
            },
            {
                id: 2,
                username: "BobChangedName",
                favoritePizza: "ChangedPizza",
                faveColor: "ChangedFaveColor"
            },
            {
                id: 3,
                username: "BobChangedName",
                favoritePizza: "ChangedPizza",
                faveColor: "ChangedFaveColor"
            },
            {
                id: 4,
                username: "BobChangedName",
                favoritePizza: "ChangedPizza",
                faveColor: "ChangedFaveColor"
            },
        ]

        //4diff users, 4 diff properties.
        //change name of person BoB. 4 properties change rather than 1.
        /*


        {
            id: 1,
            username: "BobChangedName",
            favoritePizza: "ChangedPizza",
            faveColor: "ChangedFaveColor"
        }




        */
        return (
            <Grid>
                <Grid.Row centered>
                    <h1>Input Section</h1>
                </Grid.Row>
                <Grid.Row centered>
                    <Input placeholder='Enter Text Here...' onChange={this.onInputFieldChange} />
                </Grid.Row>
                <Grid.Row centered>
                    <Button
                        content="Submit New Username"
                        color="green"
                        onClick={() => onClickUserNameSetButton(userName)} />
                </Grid.Row>
            </Grid>
        );
    }
}
