import * as React from 'react';
import { Grid } from 'semantic-ui-react';
import ProfileCard from './ProfileCard';
import SpecialButton from './SpecialButton';
import SpecialInputSection from './SpecialInputSection';

export interface IMainSectionProps {
    isButtonPressed: boolean;
    callbackMethod: () => void;
    callbackMethodToGoBack: () => void;
    userName: string;
    onClickUserNameSetButton: (username: string) => void;
}

export default class MainSection extends React.Component<IMainSectionProps> {
    public render() {
        const {
            isButtonPressed,
            callbackMethod,
            callbackMethodToGoBack,
            userName,
            onClickUserNameSetButton } = this.props;

        let buttonPressHeader: JSX.Element;

        if (isButtonPressed) {
            buttonPressHeader = <h1>Button has been pressed!</h1>
        } else {
            buttonPressHeader = <h1>Not Pressed Yet...</h1>
        }

        return (
            <Grid>
                <Grid.Row centered>
                    {buttonPressHeader}
                    <Grid.Column>
                        column1
                    </Grid.Column>
                    <Grid.Column>
                        column2
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row centered>


                    {isButtonPressed ?
                        <ProfileCard userName={userName} />
                        :
                        <h1>Profile Card Will Appear Here When Button Is Pressed.</h1>
                    }


                </Grid.Row>
                <Grid.Row centered>

                    <SpecialButton
                        callbackMethod={callbackMethod}
                        isButtonPressed={isButtonPressed}
                        callbackMethodToGoBack={callbackMethodToGoBack} />
                </Grid.Row>
                
                <Grid.Row centered>
                    <SpecialInputSection onClickUserNameSetButton={onClickUserNameSetButton} />
                </Grid.Row>
            </Grid>
        );
    }
}
