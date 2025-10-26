import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faBars } from '@fortawesome/free-solid-svg-icons';
import "../css/CustomersStatus.css";

const CustomersStatus = () => {
  return (
    <div className="customers-status">
        <div className="container">
        <div className="customer-table-head">
          <div className="customer-table-head-texts">
            <h1>All Customers</h1>
            <p className="positive">Active Members</p>
          </div>
          <div className="search_filter">
            <input type="text" placeholder="Search..." />
            <div className="filter-dropdown">
              <p>Sort by: Newest </p>
              <FontAwesomeIcon icon={faChevronDown} />
            </div>
          </div>
        </div>

        <div className="customers-grid">
          <div className="customers-grid-header">
            <div className="table-name">Customer's Name</div>
            <div className="table-company">Company</div>
            <div className="table-number">Phone Number</div>
            <div className="table-email">Email</div>
            <div className="table-country">Country</div>
            <div className="table-status">Status</div>
          </div>

          <div className="customers-grid-body">
            <div className="customers-grid-row">
                <span className="table-name">Taiwo Dominion</span>
                <span>Microsoft</span>
                <span>(255)-555-0119</span>
                <span>dom@microsoft.com</span>
                <span>United States</span>
                <span className="table-status-positive">Active</span>
            </div>
            <div className="customers-grid-row">
                <span className="table-name">Jane Cooper</span>
                <span>Microsoft</span>
                <span>(255)-555-0119</span>
                <span>jane@microsoft.com</span>
                <span>Israel</span>
                <span className="table-status-negative">Inactive</span>
            </div>
            <div className="customers-grid-row">
                <span className="table-name">Floyd Miles</span>
                <span>Yahoo</span>
                <span>(255)-555-0119</span>
                <span>floyd@yahoo.com</span>
                <span>Spain</span>
                <span className="table-status-negative">Inactive</span>
            </div>
            <div className="customers-grid-row">
                <span className="table-name">Roland Gideon</span>
                <span>Microsoft</span>
                <span>(255)-555-0119</span>
                <span>roland@microsoft.com</span>
                <span>United States</span>
                <span className="table-status-positive">Active</span>
            </div>
            <div className="customers-grid-row">
                <span className="table-name">Jane Cooper</span>
                <span>Microsoft</span>
                <span>(255)-555-0119</span>
                <span>jane@microsoft.com</span>
                <span>United States</span>
                <span className="table-status-positive">Active</span>
            </div>
            <div className="customers-grid-row">
                <span className="table-name">Jane Cooper</span>
                <span>Microsoft</span>
                <span>(255)-555-0119</span>
                <span>jane@microsoft.com</span>
                <span>United States</span>
                <span className="table-status-positive">Active</span>
            </div>
            <div className="customers-grid-row">
                <span className="table-name">Taiwo Dominion</span>
                <span>Microsoft</span>
                <span>(255)-555-0119</span>
                <span>dom@microsoft.com</span>
                <span>United States</span>
                <span className="table-status-positive">Active</span>
            </div>
            <div className="customers-grid-row">
                <span className="table-name">Jane Cooper</span>
                <span>Microsoft</span>
                <span>(255)-555-0119</span>
                <span>jane@microsoft.com</span>
                <span>Israel</span>
                <span className="table-status-negative">Inactive</span>
            </div>
            <div className="customers-grid-row">
                <span className="table-name">Floyd Miles</span>
                <span>Yahoo</span>
                <span>(255)-555-0119</span>
                <span>floyd@yahoo.com</span>
                <span>Spain</span>
                <span className="table-status-negative">Inactive</span>
            </div>
            <div className="customers-grid-row">
                <span className="table-name">Roland Gideon</span>
                <span>Microsoft</span>
                <span>(255)-555-0119</span>
                <span>roland@microsoft.com</span>
                <span>United States</span>
                <span className="table-status-positive">Active</span>
            </div>
            <div className="customers-grid-row">
                <span className="table-name">Jane Cooper</span>
                <span>Microsoft</span>
                <span>(255)-555-0119</span>
                <span>jane@microsoft.com</span>
                <span>United States</span>
                <span className="table-status-positive">Active</span>
            </div>
            <div className="customers-grid-row">
                <span className="table-name">Jane Cooper</span>
                <span>Microsoft</span>
                <span>(255)-555-0119</span>
                <span>jane@microsoft.com</span>
                <span>United States</span>
                <span className="table-status-positive">Active</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomersStatus;
