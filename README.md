# cf-db-access-bridge
###Cloud Foundry DB Access Bridge UI for CF Service Broker

Consisting of:

* JS GUI webapp (browser-based)
* REST API server (also serving static JS gui webapp) to serve the same purpose (stateless)
* Brooklyn backend tier to store the catalog and manage active test deployments

WIP...

Private and confidential.

## Running the Server

Brooklyn, the Server (REST Server and JS GUI) must all be running concurrently in separate terminal windows.

### Configure and Run Brooklyn

Brooklyn must be running on `localhost:8081` 

To launch Brooklyn:

	cd brooklyn
	bin/booklyn launch

### Checkout and Build this Repository

Checkout this repo:

`git clone https://github.com/cloudsoft/cisco-marketplace-onboarding.git`

Build all of the components:

```
cd cf-db-access
mvn clean install
```

### Run the REST Server (includes the JS GUI) in a new terminal window

```
cd rest-server
mvn jetty:run
```

Then run:

```
cd jsgui
./webpack
```

Navigate to `http://localhost:9000/`


