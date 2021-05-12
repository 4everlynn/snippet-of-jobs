#!/bin/bash

# shellcheck disable=SC2010
extends=$(ls | grep \.extend )

apt-get update

# install all .extend files
# shellcheck disable=SC2068
for extend in ${extends[@]}
do
 ./"$extend"
done
