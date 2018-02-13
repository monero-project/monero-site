# Using monerod as a systemd Service

If you are using a Linux distribution that uses `systemd`, you can use its
service units to manage `monerod`.

We will do this via the command line & assume that you have already built or
downloaded `monerod`.


## Create a User

For security purposes, we should create a new user to run the monerod service:

    useradd -r -m /var/lib/monero/ -s /usr/bin/nologin monero

This will create a `monero` system account with no login shell and a home
directory in `/var/lib/monero/`.


## Create the Configuration File

Create `/etc/monerod.conf` with the following content:

    # Configuration for monerod
    data-dir=/var/lib/monero
    log-level=0

If you are running a remote node, you may want to add the `restricted-rpc`,
`rpc-bind-ip=X.X.X.X` & `confirm-external-bind` options as well.

For a complete list of flags, run `monerod --help`.


## Create the Service File

Create `/etc/systemd/system/monerod.service` with the following content:

    [Unit]
    Description=Monero Daemon
    After=network.target

    [Service]
    User=monero
    Group=monero
    WorkingDirectory=~

    ExecStart=/your/path/to/monerod --non-interactive --config-file /etc/monerod.conf

    Restart=always
    PrivateTmp=true

    [Install]
    WantedBy=multi-user.target

Make sure you use the correct absolute path to the `monerod` executable in the
`ExecStart` option.

After saving the service file, refresh the systemd service units:

    systemctl daemon-reload


## Start / Stop the Service

You can now run our `monerod` service using `systemctl`:

    systemctl start monerod

View the current status & output:

    systemctl status monerod

Stop it:

    systemctl stop monerod

Or restart it:

    systemctl restart monerod

Enable the service to start it on boot:

    systemctl enable monerod

You can also use `journalctl` to view the output:

    journalctl -u monerod

Or to follow along:

    journalctl -u monerod -f


## Starting monerod on Boot

If you want to start the service on boot instead of on login, change the
`WantedBy` option in the `Install` section of the service file to:

    WantedBy=default.target

Then reload the service file:

    systemctl daemon-reload


## Running the Service Without Superuser Permissions

If you do not have `sudo` access, you can still manage `monerod` with `systemd`
by using a user service.

First create the directory for your user's unit files:

    mkdir -p ~/.config/systemd/user

Create the `monerod.service` file in this directory, leaving out the `User`,
`Group`, & `WorkingDirectory` service options and changing the `--config-file`
flag to a path you can write to.

You can then manage the service with `systemctl` & `journalctl`:

    systemctl --user daemon-reload
    systemctl --user start monerod
    journalctl --user-unit=monerod -f
