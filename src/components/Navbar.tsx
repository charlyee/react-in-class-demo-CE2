import * as React from 'react';
import { IMenuItem } from '../models/menuItem';
import { Menu } from 'semantic-ui-react';

export interface INavBarProps {
    appName: string;
    isUserLoggedIn: boolean;
    menuOptions: IMenuItem[];
}

export default class NavBar extends React.Component<INavBarProps> {
    public render() {
        return (
            <Menu items={this.props.menuOptions} />
        );
    }
}
