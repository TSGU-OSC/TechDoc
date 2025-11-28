# tmux 新手指南：会话管理的简单用法

如果你想提升终端的工作效率，tmux 是一款必备工具。tmux 是一个终端复用器，它允许你在一个窗口中管理多个终端会话。本指南将介绍基本功能，例如创建、删除、切换 tmux 会话，以及如何启用滚动来查看终端历史内容。

## 什么是 tmux？

tmux 的全称是 terminal multiplexer（终端复用器）。它允许你在单个终端窗口内运行并管理多个终端会话。对于长期运行的进程、多任务处理或在多个项目之间切换时保持工作整洁特别有用。使用 tmux，你可以从一个会话中分离（detach），之后再重新连接（reattach），而不会中断正在运行的进程。

## 安装 tmux

在开始之前，你需要安装 tmux。在大多数 Linux 发行版和 macOS 上，你可以通过包管理器安装。

Ubuntu/Debian：

```shell
sudo apt-get update
sudo apt-get install tmux
```

Fedora：

```shell
sudo dnf install tmux
```


macOS（使用 Homebrew）：

```shell
brew install tmux
```


安装完成后，可以通过以下命令查看版本：

```shell
tmux -V
```



## 创建 tmux 会话

要启动一个新的 tmux 会话，只需输入：

```shell
tmux new -s mysession
```


这里的 mysession 是你的新会话名。为会话命名，可以让你更容易管理多个会话。



## 在会话之间切换

创建多个会话后，你可以在它们之间切换，而不必关闭任何一个。

首先，列出所有活动会话：

```shell
tmux ls
```


然后连接到指定会话：

```shell
tmux attach -t mysession
```


如果你已经在一个 tmux 会话内，并想创建或切换会话，可以使用 tmux 的命令模式。

按 Ctrl+b（默认前缀），然后按 : 进入命令行模式。例如：

```shell
switch-client -t mysession
```


会切换到名为 mysession 的会话。



## 删除（杀死）一个 tmux 会话

当你不再需要某个会话时，可以将其关闭释放资源。

列出会话：

```shell
tmux ls
```


然后使用 kill-session 命令：

```shell
tmux kill-session -t mysession
```


或者，如果你当前就在要关闭的会话中，只需输入：

```shell
exit
```


即可终止该会话。



## 在 tmux 中启用滚动

tmux 的优势之一是它允许你滚动查看之前的终端输出。

`进入复制模式（Copy Mode）`：按 Ctrl+b 然后按 [ （左方括号）。

`滚动`：现在你可以使用方向键或 Page Up / Page Down 查看历史内容。

`退出复制模式`：按 q。

你还可以通过编辑配置文件（~/.tmux.conf）来自定义滚动缓冲区大小，例如：

```shell
set-option -g history-limit 10000
```


此示例将历史记录限制增加到 10,000 行。



## 其他技巧

### 分割窗口：

1. 垂直分割：按 Ctrl+b 然后 %

2. 水平分割：按 Ctrl+b 然后 "

这样你可以在一个会话中拥有多个面板。

### 调整面板大小：
按住 Ctrl+b，然后长按方向键即可调整当前面板大小。

### 自定义 tmux：
tmux 支持高度自定义。你可以编辑 ~/.tmux.conf 来个性化键绑定、颜色和其他设置。