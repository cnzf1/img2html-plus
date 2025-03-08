@echo off
setlocal

echo Obsidian插件发布助手

set /p VERSION="请输入新版本号 (例如 1.0.1): "

echo.
echo 正在更新版本号到 %VERSION%...
call npm version %VERSION% --no-git-tag-version

echo.
echo 正在运行版本更新脚本...
node version-bump.mjs %VERSION%

echo.
echo 正在提交更改...
git add .
git commit -m "版本 %VERSION%"

echo.
echo 正在创建标签...
git tag -a "%VERSION%" -m "版本 %VERSION%"

echo.
echo 正在推送更改和标签到GitHub...
git push
git push --tags

echo.
echo 完成！GitHub Actions将自动构建并发布版本 %VERSION%
echo 请访问GitHub仓库查看发布状态。

pause 