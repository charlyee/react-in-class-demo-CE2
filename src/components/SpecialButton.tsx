import * as React from 'react';
import { Button } from 'semantic-ui-react';
import { Fragment } from 'react';

export interface IAppProps {
    callbackMethod: () => void;
    callbackMethodToGoBack: () => void;
    isButtonPressed: boolean;
}

export default class App extends React.Component<IAppProps> {

    public render() {
        const { callbackMethod, isButtonPressed, callbackMethodToGoBack } = this.props;

        return (
            <Fragment>
                {!isButtonPressed ?
                    <Button content="Super Special Button!" color='blue' onClick={callbackMethod} />
                    :
                    <Button content="Go Back?" color='red' onClick={callbackMethodToGoBack} />
                }
            </Fragment>
        );
    }
}
