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
        let {  menuOptions } = this.props;

        //Can't change something? We call that immutable. "readonly"
        // menuOptions = [{
        //     key: "string",
        //     name: "string"
        // }];


        return (
            <React.Fragment>
                <Menu items={menuOptions} />
            </React.Fragment>
        );
    }
}
