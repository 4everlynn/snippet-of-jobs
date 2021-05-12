#!/bin/bash

# shellcheck disable=SC2046
export $(cat .env)

echo "current user is ${CODER_USER}"

data_dir="data"

if [ ! -d "$data_dir" ]; then
        echo "create data dir"
        mkdir $data_dir
        chmod -R 774 $data_dir
else
        echo "dir already exists"
fi

docker build -t easy-coder-server  --build-arg C_USER="${CODER_USER}" .

docker-compose up -d
