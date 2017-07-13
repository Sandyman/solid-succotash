# Solid Succotash

An example repository for showing how to invoke lambdas locally using the serverless-plugin-simulation package.

## Prerequisites

You must have installed Docker. Use Google to find out how, or follow this URL if you're using Ubuntu 16.04:

`https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-on-ubuntu-16-04`

Download the right Docker image(s) using `docker pull`, like so:

`docker pull lambci/lambda:nodejs6.10`

You may want to substitute nodejs6.10 with nodejs4.3, depending on your preferences.

## Installation

Inside both directories `primo` and `secondo`, install the dependencies:

`npm i`

## Running the example

Inside the directory `secondo`, execute the following command:

`sls simulate lambda -p 4000`

The output will look like this:

```$xslt
Serverless: Starting registry with db at /home/sander/github/solid-succotash/secondo/.sls-simulate-registry
Serverless: Starting registry at: http://192.168.1.102:4000
```

Inside the directory `primo`, execute the following command:

`npm run dry-run`

If everything was installed correctly, the output will look something like this: 

```$xslt
> primo@0.0.1 dry-run /home/sander/github/solid-succotash/primo
> node-lambda run

You said: 'Hello, world!'.
Success:
{"message":"Your function executed successfully!"}
```

Please note that the secondary lambda returns the payload message from the invoking lambda.

## More information

For more information, please see my post on medium: https://medium.com/@ahuijsen/invoking-a-lambda-locally-ea03a6f9ac84
