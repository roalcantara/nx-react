#!/usr/bin/env bash
SHELL := /bin/bash

.PHONY: default
default: menu

.PHONY: install
install: ## Installs all dependencies
	npm install

.PHONY: build
build: ## Builds the project
	npm run build

.PHONY: start
start: ## Starts the project
	npm run start

.PHONY: test
test: ## Runs the tests
	npm run test

.PHONY: help
help: ## Show all available tasks
	@awk 'BEGIN {FS = ":.*?## "} /^[a-zA-Z\-_0-9%:\/]+:.*?## / {printf "\033[36m%-20s→\033[0m %s\n", $$1, $$2}' $(MAKEFILE_LIST) | sed s/://

.PHONY: menu
menu:
	@awk 'BEGIN {FS = ":.*?## "} /^[a-zA-Z\-_0-9%:\/]+:.*?## / {printf "\033[36m%-20s→\033[0m %s\n", $$1, $$2}' $(MAKEFILE_LIST) | sed s/:// | fzf --cycle | cut -d ' ' -f1 | xargs -r make
