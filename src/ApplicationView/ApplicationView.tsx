
import * as React from 'react';
import {
    IApplicationConfig,
    IVersion
} from '@nbsolutions/interfaces';
import {Application} from '../Application';
import {ViewComponent, IViewComponentProps, IViewComponentState, IUsable} from '@nbsolutions/view-component';
import styles from './ApplicationView.scss';

export interface IApplicationProps<TApplicationConfig extends IApplicationConfig = IApplicationConfig> extends IViewComponentProps {
    controller: Application<TApplicationConfig>;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IApplicationState extends IViewComponentState {}

export class ApplicationView<
    TApplicationConfig extends IApplicationConfig = IApplicationConfig,
    TApplicationProps extends IApplicationProps<TApplicationConfig> = IApplicationProps<TApplicationConfig>
> extends ViewComponent<TApplicationProps, IApplicationState> {
    
    public constructor(props: TApplicationProps) {
        super(props);
    }

    protected _getInitialState(props: IApplicationState): IApplicationState {
        return {};
    }

    protected _getUsableStyles(): IUsable {
        return styles;
    }

    public getName(): string {
        return this.props.controller.getName();
    }

    public getConfig(): TApplicationConfig {
        return this.props.controller.getConfig();
    }

    public getVersion(): IVersion {
        return this.props.controller.getVersion();
    }

    public render(): React.ReactNode {
        return (
            <div className={this.getClassName()}>
                {this.props.children}
            </div>
        );
    }
}
