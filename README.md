# Multi-Tenant Sales Dashboard

A frontend application demonstrating multi-tenancy and role-based access control.

## Live Link



## Features

- Multi-tenant architecture (Organization A & B)
- Role-based access control (Admin & Agent)
- Leads management module
- Call logs tracking module
- Settings module (admin only)

## Architecture

- **Context API**: Global state management for authentication
- **Custom Hooks**: Reusable logic (useTenantData, useAuth)
- **Module-based structure**: Each feature is a separate module
- **Permission system**: Centralized role-based permissions

## Testing

- Switch between tenants to see data isolation
- Switch between roles to test access control
- Filter leads by status
- Edit lead status (admin only)