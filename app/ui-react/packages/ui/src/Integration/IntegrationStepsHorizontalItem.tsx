import * as H from '@syndesis/history';
import { Icon } from 'patternfly-react';
import * as React from 'react';
import { Link } from 'react-router-dom';

import './IntegrationStepsHorizontalItem.css';

export interface IIntegrationStepsHorizontalItemProps {
  /**
   * The name of the connector used for the step.
   */
  name?: H.LocationDescriptor;
  /**
   * The icon of the step.
   */
  icon?: string;
  title?: string;
  href?: string;
  /**
   * The boolean value that determines if the step
   * is the first in the steps array.
   */
  isFirst?: boolean;
}

export class IntegrationStepsHorizontalItem extends React.Component<
  IIntegrationStepsHorizontalItemProps
> {
  public render() {
    return (
      <div className="integration-steps-horizontal-item">
        {this.props.isFirst === false ? (
          <Icon name={'angle-right'} className="step-arrow" />
        ) : null}
        {!this.props.href && (
          <div>
            <div className={'step-icon'} title={this.props.title}>
              <img src={this.props.icon} />
            </div>
            <p>{this.props.name}</p>
          </div>
        )}
        {this.props.href && (
          <Link to={this.props.href}>
            <div>
              <div className={'step-icon'} title={this.props.title}>
                <img src={this.props.icon} />
              </div>
              <p>{this.props.name}</p>
            </div>
          </Link>
        )}
      </div>
    );
  }
}
