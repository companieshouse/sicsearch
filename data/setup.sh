#!/usr/bin/env bash
printf "Deleting index...\n"
curl -XDELETE http://$ES_HOST/sic-search

printf "\nCreating index...\n"
curl -XPUT http://$ES_HOST/sic-search --data-binary "@create_index.json"

printf "\nBulk inserting documents..."
curl -XPUT http://$ES_HOST/_bulk --data-binary "@sample_data.txt"
