# escape=`
# FROM <image> [AS <name>]
# FROM <image>[:<tag>] [AS <name>]
# FROM <image>[@<digest>] [AS <name>]
# FROM golang:alpine
FROM base:${CODE_VERSION}
FROM base:$CODE_VERSION

# ENV <key> <value>
# ENV <key>=<value>

RUN apk add --update \
    tzdata bash wget curl git;

# Create binary directory, install glide and fresh
RUN mkdir -p $$GOPATH/bin && \
    curl https://raw.githubusercontent.com/golang/dep/master/install.sh | sh &&
    # go get github.com/pilu/fresh

# define work directory
ADD . /go/src/$PROJECT_FOLDER
WORKDIR /go/src/${PROJECT_FOLDER}  # Still a comment


# serve the app
CMD dep ensure update && fresh -c runner.conf main.go

# LABEL <key>=<value> <key>=<value> <key>=<value> ...
LABEL "com.example.vendor"="ACME Incorporated"
LABEL com.example.label-with-value="foo"
LABEL version="1.0"
LABEL description="This text illustrates \
that label-values can span multiple lines."

# Predefined Args:
# HTTP_PROXY
# http_proxy
# HTTPS_PROXY
# https_proxy
# FTP_PROXY
# ftp_proxy
# NO_PROXY
# no_proxy
