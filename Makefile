# 使用POSIX标准的bash作为SHELL，提高跨平台兼容性
SHELL := /bin/bash
# 定义常量
COLOR_RESET ?= \033[0m
COLOR_GREEN ?= \033[32;01m
# 定义变量
NODE_VERSION := $(shell node --version | sed 's/^v//')
YARN_VERSION := $(shell yarn --version | sed 's/^v//')
# 构建项目
build: version fmt
	yarn run build
# 启动开发服务器
dev:
	yarn run dev
# 安装环境
env:
	asdf install
# 格式化代码
fmt:
	yarn run format
# 自动修复代码格式
fix:
	yarn run format:fix
# 确保依赖是最新的
install: version
ifeq ($(wildcard node_modules),)
	yarn install --frozen-lockfile
endif
# 查看提交历史记录
log:
	git log --oneline --decorate --graph --all
# 推送代码
push: build
	git push
	git push origin --tags
	@echo -e "$(COLOR_GREEN)"
	@echo "=============================="
	@echo "  Update: https://greasyfork.org/en/scripts/499942/versions/new"
	@echo "=============================="
	@echo -e "$(COLOR_RESET)"
version:
	@echo -e "$(COLOR_GREEN)"
	@echo "=============================="
	@echo "  Node.js: v $(NODE_VERSION) $(shell which node)"
	@echo "  Yarn:    v $(YARN_VERSION) $(shell which yarn)"
	@echo "=============================="
	@echo -e "$(COLOR_RESET)"
