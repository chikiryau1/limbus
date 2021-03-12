#!/usr/bin/env bash

mongoimport --jsonArray --db $1 --collection $2 --file $3