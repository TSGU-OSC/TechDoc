# Docker常用命令

### 设置镜像加速

```shell
sudo mkdir -p /etc/docker
sudo tee /etc/docker/daemon.json << 'EOF'
{
  "registry-mirrors": [
    "https://hub-mirror.c.163.com",
    "https://docker.mirrors.ustc.edu.cn",
    "https://docker.1ms.run"
  ]
}
EOF

sudo systemctl daemon-reload
sudo systemctl restart docker
```

### 从 Docker 镜像仓库获取镜像

```
docker pull [选项] [Docker Registry 地址[:端口号]/]仓库名[:标签]
```

<!-- * Docker 镜像仓库地址:地址的格式一般是 <域名/IP>[:端口号] 。默认地址 是 Docker Hub。 -->
* 仓库名:如之前所说，这里的仓库名是两段式名称，即 。 对于 Docker Hub，如果不给出用户名，则默认为 library  ，也就是官方镜像。

### 运行

```
docker run -it --rm \
    ubuntu:18.04 \
    bash
```

* `-it` :这是两个参数，一个是 -i :交互式操作，一个是 -t 终端。我们 这里打算进入 bash 执行一些命令并查看返回结果，因此我们需要交互式终 端。
* `--rm` :这个参数是说容器退出后随之将其删除。默认情况下，为了排障需 求，退出的容器并不会立即删除，除非手动 * `docker rm` 。我们这里只是随便 执行个命令，看看结果，不需要排障和保留结果，因此使用 --rm 可以避免 浪费空间。
* `ubuntu:18.04`:这是指用 ubuntu:18.04 镜像为基础来启动容器。 
* `bash`:放在镜像名后的是 命令，这里我们希望有个交互式 Shell，因此用的
  是。

### 列出镜像

```
docker image ls
```

### 查看docker所占磁盘空间

```
docker system df
```

### 删除镜像

```
docker image rm <image>
```

* `<image>`可以是长ID，短ID（取前三位），镜像名

### 提交镜像

```
docker commit <container_name> <new_image_name>
```

* `<container_name>` 替换为实际的容器名称或ID
* `<new_image_name>` 替换为新镜像的命名

### 通过Dockerfile构建镜像

在Dockerfile文件所在目录下执行以下命令

```
docker build -t <new_image_name> .
```

* `<new_image_name>` 替换为新镜像的命名

### 标记镜像

为镜像添加新的标签

```
docker tag <source_image>:<tag> <target_image>:<tag>
```

示例：为本地镜像添加远程仓库标签

```
docker tag myapp:latest username/myapp:latest
docker tag myapp:latest username/myapp:v1.0.0
```

### Docker登录

登录到Docker Hub或其他镜像仓库

```
docker login -u <username>
```

使用密码从标准输入登录（更安全，适用于CI/CD）

```
echo "<password>" | docker login -u <username> --password-stdin
```

登录到指定的镜像仓库

```
docker login <registry_url> -u <username>
```

### 推送镜像

推送镜像到Docker Hub或其他镜像仓库

```
docker push <username>/<image_name>:<tag>
```

推送多个标签

```
docker push <username>/<image_name>:latest
docker push <username>/<image_name>:v1.0.0
```



### 操作容器

创建容器

```
docker run -d --name <container_name> <image_name>
```

使用卷挂载运行容器

挂载主机目录到容器（-v 或 --volume）

```
docker run -d -p 8080:80 -v /host/path:/container/path --name <container_name> <image_name>
```

挂载当前目录

```
docker run -d -v $(pwd):/app --name <container_name> <image_name>
```

只读挂载

```
docker run -d -v /host/path:/container/path:ro --name <container_name> <image_name>
```

使用命名卷（推荐用于持久化数据）

```
docker volume create mydata
docker run -d -v mydata:/app/data --name <container_name> <image_name>
```

多个卷挂载

```
docker run -d \
  -v /host/config:/app/config \
  -v /host/data:/app/data \
  -v /host/logs:/app/logs \
  --name <container_name> <image_name>
```

运行容器

```
docker start <container_name>
```

进入容器

```
docker exec -it <container_name> sh
```

停止容器

```
docker stop <container_name>
```

删除容器

```
docker rm <container_name>
```

查看运行的容器

```
docker ps
```

查看所有容器

```
docker ps -a
```

保存镜像

```
docker save -o ubuntu.tar ubuntu
```

加载镜像

```
docker load -i ubuntu.tar
```

### 完整的CI/CD示例

构建、标记、推送镜像的完整流程

```bash
# 1. 构建镜像
docker build -t myapp:latest .

# 2. 标记镜像
docker tag myapp:latest username/myapp:latest
docker tag myapp:latest username/myapp:v1.0.0

# 3. 登录Docker Hub
echo "$DOCKER_PASSWORD" | docker login -u username --password-stdin

# 4. 推送镜像
docker push username/myapp:latest
docker push username/myapp:v1.0.0

# 5. 运行容器（带卷挂载）
docker run -d \
  -p 3000:3000 \
  -v $(pwd)/data:/app/data \
  --name myapp-container \
  username/myapp:latest
```