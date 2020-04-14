import * as React from 'react';
import { Button } from 'semantic-ui-react';

export interface ISpecialButtonTwoProps {
    callBack: () => void;
}

interface ISpecialButtonTwoState {
    buttonToggle: boolean;
}

export default class SpecialButtonTwo extends React.Component<ISpecialButtonTwoProps, ISpecialButtonTwoState> {
    constructor(props: ISpecialButtonTwoProps) {
        super(props);

        this.state = {
            buttonToggle: true
        }
    }

    private togglePinkOff() {
        let { buttonToggle } = this.state;

        if (buttonToggle) {
            this.setState({ buttonToggle: false });
        } else {
            this.setState({ buttonToggle: true });
        }
    }

    public render() {
        let { buttonToggle } = this.state;
        let { callBack } = this.props;

        let shownButton: JSX.Element;

        if (buttonToggle) {
            shownButton =
                <Button
                    color="pink"
                    content="toggle on"
                    // onClick={() => this.togglePinkOff()}
                    onClick={() => callBack()}
                />
        } else {
            shownButton =
                <Button
                    color="blue"
                    content="toggle off"
                    onClick={() => this.togglePinkOff()}
                />
        }


        return (
            <React.Fragment>
                {shownButton}
            </React.Fragment>
        );
    }
}
