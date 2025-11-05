import React from "react";
import { Menu, Dropdown } from "antd";
import { useNavigate } from "react-router-dom";
import { UserOutlined } from "@ant-design/icons";

import "../resources/default-layout.css";
function DefaultLayout(props) {
  const user = JSON.parse(localStorage.getItem("expense-tracker-user"));
  const navigate = useNavigate();
  const menu = (
    <Menu
      items={[
        {
          label: (
            <div
              style={{
                cursor: 'pointer',
                padding: '8px 0',
                color: 'rgba(255, 255, 255, 0.9)',
                transition: 'all 0.3s ease'
              }}
              onClick={() => {
                localStorage.removeItem("expense-tracker-user");
                navigate("/login");
              }}
              onMouseEnter={(e) => {
                e.target.style.color = '#ffffff';
                e.target.style.transform = 'translateX(4px)';
              }}
              onMouseLeave={(e) => {
                e.target.style.color = 'rgba(255, 255, 255, 0.9)';
                e.target.style.transform = 'translateX(0)';
              }}
            >
              Logout
            </div>
          ),
        },
      ]}
    />
  );
  return (
    <div className="layout">
      <div className="header d-flex justify-content-between align-items-center">
        <div>
          <h1 className="logo">Budgetify - Expense Tracker</h1>
        </div>
        <div>
          <Dropdown overlay={menu} placement="bottomLeft">
            <button className="primary profile-button">
              <UserOutlined />
              <div className="profile-name">{user.name}</div>
            </button>
          </Dropdown>
        </div>
      </div>

      <div className="content">{props.children}</div>
    </div>
  );
}

export default DefaultLayout;
