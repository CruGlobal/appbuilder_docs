---
parent: Develop
title: Creating a New Plugin
description: Adding a new AB plugin
category: develop
---

## Overview

! This is wip and a draft, how this works may change !

- Create files for new plugin
- npm install and compile plugin (TODO is this for sure needed?)
- Ensure directory is in docker (TODO this should not be nessicary long term)
- Add plugin in `site administration`

## Creating plugin
get the latest cli tool
```
npm install -g CruGlobal/ab-cli
```

Ensure you have the CLI tool installed (see...)
```
appbuilder plugin view
```
If you execute `appbuilder plugin` it will detail your options... For example `appbuilder plugin new` will create an empty plugin, while `view` sets up boilerplate. 

![cli_init](../cli_init.webp "cli_init")

This will create a new directory in your project: 
`ab/develop/plugins`
![file_list](../file_list.webp "file_list")

# Migrate 
```$ 
appbuilder plugin migrate view [] [ABView] command
# like 
appbuilder plugin migrate view [someTempName] ABViewList
```
Make sure you setup any submodules in that directory 
```
npm i
npm run watch
```

If there are errors, check the `webpack` files!

If there are no errors it should look similar to this:
![alt_text](../compile_plugin.webp "compile_plugin")

## Possible sources of errors
You will find a `manifest.json` in your new plugin. Make sure it references files that actually exist!
![alt_text](../manifest_json.webp "manifest_json")


## Adding To Docker

The files exist on your local machine, but not within docker! Make sure your `docker-compose.dev.yml` contains this:
```
services:
   web:
      image: docker.io/digiserve/ab-web:$AB_WEB_VERSION
      hostname: web
      volumes:
         - type: bind
           source: ./nginx/html
           target: /usr/share/nginx/html
         - files:/data
         - type: bind
           source: ./developer/web/assets
           target: /app/assets
         # This is where we load the plugins directory!!!
         - type: bind
           source: ./developer/plugins
           target: /app/assets/ab_plugins
      depends_on:
         - api_sails
```

## Loading the Plugin 

The plugin code is in docker, but it isn't getting loaded yet! We need to go to `site administration`/`Plugins` and `+ Add` it. 
![alt_text](../site_administration.webp "Location of plugin administration")

###### Note that you can edit the widgets in `Site Administration and 

console_logs
![alt_text](../adding_plugin.webp "adding_plugin")

After refreshing the page, the plugin will be active. I had a simple console log:

![alt_text](../console_logs.webp "console_logs")

# Merging 
remove from here 
https://github.com/CruGlobal/plugin_ABDesigner/

edit functionality goes here 
https://github.com/CruGlobal/plugin_ABDesigner/tree/master/src/plugins

remove from here
https://github.com/CruGlobal/appbuilder_class_core

remove from here and 
https://github.com/CruGlobal/ab_platform_web/
add here
https://github.com/CruGlobal/ab_platform_web/tree/master/AppBuilder/platform/plugins 


the tricky thing about making updates to ab_platform_web when what you currently have also depends on changes to the core code, is that you also have to make ab_platform_web's core point to the branch you updated on core.
so you need to update this PR to also include core#new/plugin_x and that should stop the core from trying to reference these files you just removed.
make sure to migrate from ABViewXCore

# Advanced 
If your appbuilder breaks, you can open the database and remove broken references to plugin files. These are screenshots from a working system. Note how `ABMinimode_web.mjs` is a file in `/dev/`. If the file name was, say, `ABMinimode_web.js` your appbuilder would fail to load! 

![alt_text](../database_plugin_links.webp "database_plugin_links")
![alt_text](../plugin_links_object.webp "plugin_links_object")
