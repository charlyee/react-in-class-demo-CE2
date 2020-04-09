import * as React from 'react';
import { Card, Image, Icon } from 'semantic-ui-react';

export interface IProfileCardProps {
    userName: string;
}

export default class ProfileCard extends React.Component<IProfileCardProps> {
    public render() {
        const { userName } = this.props;
        return (
            <React.Fragment>
                <Card>
                    <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false} />
                    <Card.Content>
                        <Card.Header>{userName}</Card.Header>
                        <Card.Meta>
                            <span className='date'>Joined in 2015</span>
                        </Card.Meta>
                        <Card.Description>
                            Matthew is a musician living in Nashville.
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <Icon name='user' />
                        22 Friends
                    </Card.Content>
                </Card>
            </React.Fragment>
        );
    }
}
