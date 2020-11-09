[< Develop](../Develop.md)

# Development Environment Setup

**NOTE 1:**
node.js and Docker run in very “Unix” flavored environments. All three major platforms (Windows, Mac, and Linux) can be used for both development and production environments. For Windows, it’s highly advisable to use the Windows Subsystem for Linux 2 feature to enable the Unix flavoring.

**NOTE 2:**
These instructions have been tested with Elementary OS 5.04, Ubuntu 20.04, and Mac OS X 10.14.6.

**NOTE 3:**
Avoid using `sudo` and `root` whenever possible

## Installing Docker

1. Create a docker account at https://www.docker.com/
1. Install docker client for your OS
   - [Linux (Ubuntu-based distributions) use docker’s repository](https://docs.docker.com/engine/install/ubuntu/)
   - [Windows (using WSL2)](https://docs.docker.com/docker-for-windows/wsl/)
   - [Mac](https://docs.docker.com/docker-for-mac/install/)
1. Create a docker swarm:
   ```bash
   docker swarm init --advertise-addr {my.ip.addr.ess}
   ```

**NOTE:** Some useful docker commands:

```bash
docker stack deploy -C {file} {stack}
docker stack remove {stack}
docker ps
docker stats
docker stack ls
docker container ls
docker network ls
docker volume ls
docker images
docker image pull
docker system prune
```

## Installing node.js and NPM

It is recommended to use a node version manager to install node.js & npm. Two well- known version managers are [nvm](https://github.com/nvm-sh/nvm#node-version-manager---) and [n](https://github.com/tj/n#n--interactively-manage-your-nodejs-versions). These managers allow you to install multiple versions of node/npm, to switch between them easily, and to avoid “global installs” (which would necessitate sudo/root access).

### Linux, Mac:

First, run the nvm install script from the link above (curl or wget). Afterward, you may have to configure your current shell environment:

```bash
bash source ~/.bashrc
```

Execute the following command, to install both node and npm:

```bash
nvm install node
```

Alternatives (nodesource) to using a node version manager:

[Downloading and installing Node.js and npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

### Windows:

[Set up your Node.js development environment with WSL 2](https://docs.microsoft.com/en-us/windows/nodejs/setup-on-wsl2)

Verify correct installation using the following commands:

```bash
node --version
npm --version
```

## Install the AppBuilder Installer (ab-cli)

The ab-cli tool is the primary tool that creates either a production instance, or a developer install of the AppBuilder. Install the installer using the following command:

```bash
npm install -g Hiro-Nakamura/ab-cli
```

Then, run the installer. Specify your own target directory in place of `{install_dir}`, for example:

```bash
appbuilder install {install_dir} --develop --V1
```

**Option Definitions**

- `--develop`: executes git clone commands to bring down the source code
- `--V1`: ???

**Recommended Settings**

```plaintext
port for AppBuilder to listen on: 1337
expose the DB:                    y
DB listening port:                3306
DB root password:                 r00t
Arango root password:             r00t
expose Arango DB:                 y
Arango port:                      8529
encrypt DB tables:                n
use nginx as proxy server:        n
SSL encryption:                   No SSL encryption
SMTP enable:                      n
SMTP authorization:               plain
```

On successful completion of the installer, it should end with the following message:

```bash
To start the system:
   $ cd {install_dir}
   $ npm run up
```

In the working directory, be sure to install npm modules

```bash
cd {install_dir}
npm install
```

After this, you can start the AppBuilder stack..

## Starting AppBuilder

To start the AppBuilder stack:

```bash
cd {install_dir}
./UP.sh
```

When you see the following screen, it means that the AppBuilder stack has successfully loaded.
![](images/appbuilderUp.png)
Open Google Chrome and go to the following URL:

[`http://127.0.0.1:1337`](http://127.0.0.1:1337)

## Additional Information

If using `--develop flag`, the various code repositories will be located at: `{install_dir}/developer/`

To monitor and publish code changes automatically:

```bash
cd {install_dir}/developer/app_builder
npm run watch
```

## Files That You Should Know About

Docker production environment configuration file: `{install_dir}/docker-compose.yml`

Docker development environment configuration file: `{install_dir}/docker-compose.dev.yml`

Convenient helper - bring up all AppBuilder Docker services: `{install_dir}/UP.sh`

Convenient helper - shut down all AppBuilder Docker services: `{install_dir}/Down.sh`

Convenient helper - restart a single AppBuilder Docker service: `{install_dir}/restart.sh {docker_service_name}`

Convenient helper - enter a docker shell session: `{install_dir}/cli.sh`

## Other References

> Do we still need these?

[Ops Portal Develop](https://github.com/appdevdesigns/opsportal_docs/blob/master/develop/Develop.md)\
[Old AppBuilder Setup Instructions](oldSetup/Setup.md)\
[AppBuilder Docs (Google Doc)](https://docs.google.com/document/d/1iUrzwCRnTxKRDgTySO6nwvlAa_f3re1hDpNpEeo9500/edit)
