/*
 * Wazuh app - React component for registering agents.
 * Copyright (C) 2015-2019 Wazuh, Inc.
 *
 * This program is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation; either version 2 of the License, or
 * (at your option) any later version.
 *
 * Find more information about this on the LICENSE file.
 */
import React, { Component, Fragment } from 'react';

import {
    EuiPopover,
    EuiButton,

    EuiPage,
    EuiPageBody,
    EuiPageContent,
    EuiButtonEmpty,
    EuiPageContentBody,
    EuiPageContentHeader,
    EuiPageContentHeaderSection,
    EuiPageHeader,
    EuiPageHeaderSection,
    EuiPageSideBar,
    EuiTitle,
    EuiFieldText,
    EuiFlexGrid,
    EuiFlexItem,
    EuiIcon,
    EuiListGroup,
    EuiListGroupItem,
    EuiSideNav,
    EuiFilterGroup,
    EuiFilterButton,
    EuiFlexGroup
} from '@elastic/eui';

import PropTypes from 'prop-types';

export class NavigationPopover extends Component {
  constructor(props) {
    super(props);

    this.state = {
        isPopoverOpen: false,
        searchFieldValue: ''
    };
  }

  onSearchFieldChange = e => {
    this.setState({
        searchFieldValue: e.target.value,
    });
  };

  async componentDidMount() {
  }


  onButtonClick() {
    this.setState({
      isPopoverOpen: !this.state.isPopoverOpen,
    });
  }

  closePopover() {
    this.setState({
      isPopoverOpen: false,
    });
  }


  handleOnClick = () => {
    alert('Item was clicked');
  };

  createItem = (name, data = {}) => {
    // NOTE: Duplicate `name` values will cause `id` collisions.
    return {
      ...data,
      id: name,
      name,
      isSelected: false,
      onClick: () => this.handleOnClick(),
    };
  };



  getPopoverContent() {
    const handleOnClick = () => {
        alert('Item was clicked');
      };


      const securitySection = [
        this.createItem('Security Information Management', {
          icon: <EuiIcon type="dashboardApp" />,
          items: [
            this.createItem('Security Events'),
            this.createItem('Integrity Monitoring'),
            this.createItem('GCP'),
            this.createItem('AWS')
          ],
        })
      ];


      const auditingSection = [
        this.createItem('Auditing and Policy Monitoring', {
          icon: <EuiIcon type="sqlApp" />,
          items: [
            this.createItem('Policy monitoring', {onClick: () => {alert(jaja)}}),
            this.createItem('Systems auditing'),
            this.createItem('OpenSCAP'),
            this.createItem('CIS-CAT')
          ],
        })
      ];

      const threatSection = [
        this.createItem('Threat Detection and Response', {
          icon: <EuiIcon type="searchProfilerApp" />,
          items: [
            this.createItem('Vulnerabilities'),
            this.createItem('VirusTotal'),
            this.createItem('Osquery'),
            this.createItem('Docker listener'),
            this.createItem('MITRE ATT&CK')
          ],
        })
      ];

      const regulatorySection = [
        this.createItem('Regulatory Compliance', {
          icon: <EuiIcon type="securityApp" />,
          items: [
            this.createItem('PCI DSS'),
            this.createItem('GDPR'),
            this.createItem('HIPAA'),
            this.createItem('NIST 800-53')
          ],
        })
      ];

      return (
        <EuiPage style={ {width: "1000px"} }>
            <EuiPageSideBar>
                <EuiTitle><h2>History</h2></EuiTitle>
                <EuiListGroup showToolTips>
                    <EuiListGroupItem size="xs" onClick={handleOnClick} label="Osquery" />
                    <EuiListGroupItem size="s" onClick={handleOnClick} label="Security Events" />
                    <EuiListGroupItem size="l" onClick={handleOnClick} label="GCP" />
                    <EuiListGroupItem size="xl" onClick={handleOnClick} label="MITRE ATT&CK" />
                    <EuiListGroupItem size="s" onClick={handleOnClick} label="NIST 800-53" />
                    />
                </EuiListGroup>
            </EuiPageSideBar>
            <EuiPageBody>
                <EuiPageHeader>
                    <EuiPageHeaderSection
                    style={{width: "100%"}}>
                        <EuiFlexGroup>
                            <EuiFlexItem>
                                <EuiFieldText
                                    placeholder="Find a dashboard by name or feature (for example, GCP, PCI DSS, FIM or Osquery"
                                    value={this.state.searchFieldValue}
                                    onChange={this.onSearchFieldChange}
                                    fullWidth={true}
                                    aria-label="Find a dashboard by name or feature (for example, GCP, PCI DSS, FIM or Osquery"
                                    />
                            </EuiFlexItem>
                            <EuiFlexItem style={{ maxWidth: 120 }}>
                                <EuiFilterGroup>
                                    <EuiFilterButton
                                    withNext
                                    hasActiveFilters={true}
                                    onClick={handleOnClick}>
                                    Groups
                                    </EuiFilterButton>
                                    <EuiFilterButton
                                    hasActiveFilters={false}
                                    onClick={handleOnClick}>
                                    A-Z
                                    </EuiFilterButton>
                                </EuiFilterGroup>
                            </EuiFlexItem>
                        </EuiFlexGroup>
                    </EuiPageHeaderSection>
                </EuiPageHeader>
                <EuiFlexGrid className="navigation-popover-content">
                    <EuiFlexGrid columns={2}>
                        <EuiFlexItem>
                            <EuiSideNav
                                items={securitySection}
                                style={{ width: 250 }}
                            />
                        </EuiFlexItem>
                        <EuiFlexItem>
                            <EuiSideNav
                                items={auditingSection}
                                style={{ width: 250 }}
                            />
                        </EuiFlexItem>
                        <EuiFlexItem>
                            <EuiSideNav
                                items={threatSection}
                                style={{ width: 250 }}
                            />
                        </EuiFlexItem>
                        <EuiFlexItem>
                            <EuiSideNav
                                items={regulatorySection}
                                style={{ width: 250 }}
                            />
                        </EuiFlexItem>
                        


                    </EuiFlexGrid>
                </EuiFlexGrid>
            </EuiPageBody>
        </EuiPage>
      )
  }

  render() {
      const button = <EuiButtonEmpty
            iconType="arrowDown"
            iconSide="right"
            color="text"
            onClick={this.onButtonClick.bind(this)}>
            Visualize
      </EuiButtonEmpty>

        const popoverContent = this.getPopoverContent();
    return (
      <EuiPopover
        id="popover"
        button={button}
        isOpen={this.state.isPopoverOpen}
        closePopover={this.closePopover.bind(this)}
        hasArrow={false}
        anchorPosition="downLeft">
        
        {popoverContent}
          
      </EuiPopover>
    );
  }
}

NavigationPopover.propTypes = {
};
