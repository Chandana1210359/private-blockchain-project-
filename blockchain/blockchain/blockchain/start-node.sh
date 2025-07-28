#!/bin/bash
geth --datadir ./data init genesis.json
geth --datadir ./data --networkid 1234 --http --http.port 8545 --http.addr 127.0.0.1 --http.api personal,eth,net,web3 --nodiscover console
