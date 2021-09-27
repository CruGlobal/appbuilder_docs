---
title: Plugins
category: dev-concepts
---

An AppBuilder plugin is a standalone javascript package. Plugins are added to a Tenant, and then individual user within the tenant will be able to use the plugin depending on their roles and permissions.

Plugins can be added to `/assets/`. Plugins common to all tenants (like the App Designer) should go into `/assets/default`. Plugins for a given tenant should be added to a folder with the tenant's id (`assets/tenants/${tenant_id}`).

## Developing a Plugins

Plugins need to export a function that accepts the ABFactory as a variable.
