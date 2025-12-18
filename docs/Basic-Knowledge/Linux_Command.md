# Linux/Macos 常用命令

本文介绍了一些常用的 Linux 命令，可用于在终端中执行各种操作和管理任务。

## 目录操作

pwd ：显示当前工作目录的路径。

```
pwd
```

ls：列出当前目录的内容。

```
ls
```

cd ：切换到指定目录。

```
cd
```

mkdir ：创建一个新目录。

```
mkdir
```

rm ：删除指定的文件。

```
rm <file>
```

rm -r ：递归删除指定的目录及其内容。

```
rm -r <directory>
```

cp ：将文件或目录从源位置复制到目标位置。

```
cp <source> <destination>
```

mv ：将文件或目录从源位置移动到目标位置。

```
mv <source> <destination>
```

计算当前目录（包括子目录）下cpp，h，py代码行总数

```
grep -r '' --include=*.{cpp,h,py} . | wc -l
```

or (on macos)

```
find . -maxdepth 2 \( -name '*.cpp' -o -name '*.h' -o -name '*.py' \) -print0 | xargs -0 cat | wc -l
```

递归查询命名包含`_hmp`的文件

```
find /root/miniconda3/envs/deoldify_py39/ -type f -name '*_hmp*'

```

## 文件操作

cat ：显示文件的内容。

```
cat <file>
```

head ：显示文件的前几行。

```
head <file>
```

tail ：显示文件的最后几行。

```
tail <file>
```

touch ：创建一个新文件。

```
touch <file>
```

nano ：使用文本编辑器 Nano 打开文件进行编辑。

```
nano <file>
```

grep ：在文件中搜索匹配指定模式的行。

```
grep <pattern> <file>
```

du : 查看文件或文件夹大小

```
du -h --max-depth=0 directory
```

## 互传文件

#### 本地向Linux传文件

* scp命令

```
scp /path/to/local/file username@remote_host:/path/to/destination
```

* sftp

```
sftp username@remote_host
put /path/to/local/file /path/to/destination
```

#### Linux向本地传文件

* scp命令

```
scp username@remote_host:/path/to/file /path/to/destination
```

* sftp

```
sftp username@remote_host
get /path/to/file /path/to/destination
```

#### 如果需要传输文件夹 就在scp命令后加一个参数-r

下例是Linux向本地传输文件夹

```
scp -r username@remote_host:/path/to/folder /path/to/destination
```

## 系统管理

top：显示系统中正在运行的进程和资源使用情况。

```
top
```

ps：显示当前用户的进程状态。

```
ps
```

df：显示磁盘使用情况。
```
df
```

iostat：显示磁盘的相关信息。
```
iostat
```

kill ：终止指定进程。

```
kill <pid>
```

which ：查找命令的位置。
```
which <command>
```

shutdown：关闭系统。

```
shutdown
```

reboot：重启系统。

```
reboot
```

## 网络管理

<!-- ping <host>：测试与指定主机的连通性。

```
ping <host>
``` -->

ifconfig：显示网络接口的配置信息。

```
ifconfig
```

ip addr：显示网络接口的 IP 地址信息。

```
ip addr
```

netstat：显示网络连接和统计信息。

```
netstat
```

查看端口占用情况

```
netstat -apn | grep LISTEN
```

lsof命令查看具体端口占用情况

```
sudo lsof -i :端口号
```

<!-- ssh <user>@<host>：通过 SSH 连接到远程主机。 -->

<!-- ```
ssh <user>@<host>
``` -->

<!-- 删除ssh host

```
ssh-keygen -R <host>
``` -->

查看防火墙已开放的端口

```
firewall-cmd --zone=public --list-ports
```

添加开放的端口80

```
firewall-cmd --zone=public --add-port=80/tcp --permanent 
```

重载防火墙策略

```
firewall-cmd --reload
```

查看指定的端口（比如）

```
firewall-cmd --zone=public --query-port=80/tcp 
```

删除开放的端口80

```
firewall-cmd --zone=public --remove-port=80/tcp --permanent
```

curl：发送网络请求。
```
curl url
```

#### 终端代理加速proxychains4

```
sudo apt install proxychains4
sudo vim /etc/proxychains4.conf 
```

注释掉socks4 改为以下示例
`socks5 127.0.0.1 7890`

### 网络扫描

nmap

```
nmap -sn 192.168.137.0/24
nmap -sn 192.168.0.0/16
```

bettercap

```
sudo bettercap 
net.probe on 
net.show
```


## 压缩和解压缩

tar -czvf ：将指定目录压缩为 .tar.gz 归档文件。

```
tar -czvf <archive.tar.gz> <directory>
```

tar -xzvf ：解压缩 .tar.gz 归档文件。

```
tar -xzvf <archive.tar.gz>
```

zip ：将指定文件打包为 .zip 压缩文件。

```
zip <archive.zip> <file1> <file2>
```

unzip ：解压缩 .zip 压缩文件。

```
unzip <archive.zip>
```

## 用户及权限管理

添加新用户

```
sudo adduser <username>
```

给用户设置密码

```
passwd <username>
```

给用户设置root权限

```
sudo usermod -aG sudo <username>
```

进入超级用户模式

```
sudo su
```

或者

```
sudo -s
```

退出超级用户模式

```
exit
```

### 文件权限管理

#### chown - 修改文件所有者

修改单个文件的所有者

```
sudo chown <username> <file>
```

修改文件的所有者和组

```
sudo chown <username>:<groupname> <file>
```

递归修改目录及其所有内容的所有者（-R 参数）

```
sudo chown -R <username>:<groupname> <directory>
```

将当前目录及所有子目录/文件的所有者改为当前用户

```
sudo chown -R "$USER:$USER" .
```

* `$USER` 是环境变量，代表当前登录的用户名
* `-R` 递归处理所有子目录和文件
* `.` 表示当前目录

#### chmod - 修改文件权限

Linux文件权限说明：
* `r` (read) = 4：读权限
* `w` (write) = 2：写权限
* `x` (execute) = 1：执行权限

权限分为三组：所有者(owner)、组(group)、其他用户(others)

常用权限数字：
* `755` = rwxr-xr-x（所有者可读写执行，组和其他用户可读执行）
* `644` = rw-r--r--（所有者可读写，组和其他用户只读）
* `777` = rwxrwxrwx（所有人可读写执行，不推荐）

修改单个文件权限

```
chmod 755 <file>
```

递归修改目录及其所有内容的权限

```
chmod -R 755 <directory>
```

将当前目录及所有子目录/文件权限设为755

```
sudo chmod -R 755 .
```

只给所有者添加执行权限

```
chmod u+x <file>
```

给所有人添加读权限

```
chmod a+r <file>
```

移除组用户的写权限

```
chmod g-w <file>
```

#### 常见使用场景

修复项目文件权限问题（常用于克隆仓库后）

```bash
# 将所有文件所有者改为当前用户
sudo chown -R "$USER:$USER" .

# 设置合适的权限：目录755，文件644
sudo find . -type d -exec chmod 755 {} \;
sudo find . -type f -exec chmod 644 {} \;

# 给脚本添加执行权限
chmod +x *.sh
```

修复Web服务器文件权限

```bash
# 将文件所有者改为web服务器用户（如nginx或www-data）
sudo chown -R www-data:www-data /var/www/html

# 设置目录755，文件644
sudo find /var/www/html -type d -exec chmod 755 {} \;
sudo find /var/www/html -type f -exec chmod 644 {} \;
```

## 查看硬件信息

查看cpu信息

```
cat /proc/cpuinfo
```

或者

```
lscpu
```

查询内存信息

```
cat /proc/meminfo
```

查询硬盘信息

```
df -h
```

查询gpu信息

```
lspci | grep -i vga
```

如果安装了nvdia驱动 则可以执行

```
nvidia-smi
```

## 分区操作

检查分区组可用空间

```
vgdisplay
```

初始化硬盘

```
pvcreate /dev/sdb1
```

添加至分区组

```
vgextend cs_win10pe /dev/sdb1
```

若有可用空间，添加分区组容量

```
lvextend -L +10G /dev/mapper/cs_win10pe-root
```

调整文件系统大小
ext4

```
resize2fs /dev/mapper/cs_win10pe-root
```

xfs

```
xfs_growfs /dev/mapper/cs_win10pe-root
```
## 动态库链接查询
ldd(List Dynamic Dependencies)
```
ldd <software_path>
```
otool(on macos)
```
otool -L <software_path>
```