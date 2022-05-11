---
title: Adding Tenant
category: admin
---

## To create a new Tenant: 

### on running system:

```$ appbuilder tenant add --authType=login```
key: unique "key" for the new Tenant.  This is what would be in the url:  [key].cars.org

name: Actual long text for the Tenant name. 

Tenant Admin Username: the new Tenant's admin usernam

Tenant Admin Password: the new Tenant's admin password

Tenant Admin Email: the new Tenant's admin email

port: the port our current stack is listening on

LoginTenant key: The key for our Admin Tenant (usually admin)

LoginUserEmail: The email of our Admin Tenant email

LoginPassword: The password of our Admin Tenant

Answer the questions about the new tenant admin  and the existing Tenant Admin login info.

open browser & log out of the existing AB portal

Refresh browser

login as the new tenant (be sure to choose the new tenant key in the droplist)

Add System Admin to Role(Builders)

To add an application:

Open ABDesigner and Upload the app_CARS.json definitions.

-- For Officially tested versions: get the definitions from https://github.com/digi-serve/cars_app/blob/master/test_import/module.json
