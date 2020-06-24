### 添加文件

用命令`git add`告诉Git，把文件添加到 仓库中的暂存区 ：

git add  2.md

### 提交文件

用命令git commit告诉Git，把文件提交到仓库：

```
$ git commit readme.txt -m "在readme.txt中增加了内容"

[master da19241] 在readme.txt中增加了内容  // da19241是这次提交的 commit ID,而且是在master分支上提交的

1 file changed, 1 insertions(+)  //增加了个文件，插入2行
```

git status

git commit -m "所要备注的内容"

git startus -s 采用精简的标记 红色M意味着当前是工作区的修改还没添加到暂存区中 绿色代表现在所在暂存区

### 比较版本的差别

工作区和暂存区文件的差别

git diff

### 查看历史

git log 

git log --online //**查看历史记录**

git reset --hard **HEAD^** 可以换成id// head 是上一个版本上一个版本就是HEAD^，上上一个版本就是HEAD^^，当然往上100个版本写100个^比较容易数不过来，所以写成HEAD~100。

![image-20200618091803829](C:\Users\Fengjinlong\AppData\Roaming\Typora\typora-user-images\image-20200618091803829.png)

![image-20200618092446454](C:\Users\Fengjinlong\AppData\Roaming\Typora\typora-user-images\image-20200618092446454.png)

### 过滤日志

```
git log --oneline -2  //显示多少行
git log --oneline -2 --grep='readme.txt' //过滤指定文件
git log --oneline -2 --author='root'     //指定提交作者
git log --oneline -2 --author='root' --before='2015-6-6'
git log --oneline -2 --author='root' --before='one week'
git log --oneline -2 --author='root' --before='three days' //日期之前
git log --oneline -2 --author='root' --graph  //图形化显示
```

### 删除文件

在Git中，删除也是一个修改操作，我们实战一下，先把前面添加和index.js删除,可以在资源管理器中删除也可以用 rm

```
$ rm index.js
```

这个时候，Git知道你删除了文件，因此，工作区和版本库就不一致了，git status命令会立刻告诉你哪些文件被删除了：

```
$ git status
On branch master
Changes not staged for commit:
  (use "git add/rm <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

        deleted:    index.js

no changes added to commit (use "git add" and/or "git commit -a")
```

现在你有两个选择

****

但暂存区里还有呢，所以可以很轻松地把误删的文件从暂存区恢复到工作区：

```
$ git checkout -- index.js
```

无论工作区是修改还是删除，**git checkout都可以“一键还原”。**

**确实要删除**

确实要从版本库中删除该文件，那就用命令git rm删掉，并且git commit：

```
$ git rm index.js
rm 'index.js'
$ git commit -m "delete index.js"
[master ecb08d9] delete index.js
 1 file changed, 0 insertions(+), 0 deletions(-)
 delete mode 100644 index.js
```

现在，文件就从版本库中被删除了。

**最新的历史**

```
$ git log --oneline
ecb08d9 delete index.js
2a7c67a commit edit2
308aab5 only commit edit1
7871450 add 你好,git
17a034e testgit 添加了内容
```

**总结**

命令`git rm`用于删除一个文件。如果一个文件已经被提交到版本库，那么你永远不用担心误删，但是要小心，你只能恢复文件到最新版本，你会丢失最近一次提交后你修改的内容。

### 分支

git branch fjl  创建分支

git branch 查看分支

git checkout fjl 切换分支

git checkout -b fjl 创建一个分支并切换

git merge dev 合并分支

* 初始化 git init

* 提交到暂存区 git add 名称

* 将暂存区的内容提交到历史区 git commit -m 描述

* 对比工作区、暂存区、历史区的内容 git diff

* 版本穿梭 git reset --hard HEAD^/版本号

* 查看当前工作区状态 git status

* 查看历史版本 git log --oneline --graph

* 撤销工作区的修改 git checkout -文件名

* 分支创建 git checkout -b XXX

* 查看分支 git branch / git branch -a

* 合并分支git merge XXX   /    git merge --no-ff -m "说明"

* 分支切换 git checkout （XXX）

* 删除 issue分支$ git branch -d （issue）

* **打标签**    比方说要对fixbug这次提交打标签，它对应的commit id是2155b11，敲入命令：

  git tag v0.9 2155b11

* 查看所有标签 git tag

- `git checkout v0.8` 因为tag指向了commit,所以也可以checkout, 他会提示你从head上进行了脱离，
- `git checkout -b v0.8` 用当前的创建一个分支并切换到这个分支上面，而这个分支名还是指向我们的那个tag.



## 远程仓库

- git clone 

- git push

- 从远程拉取最新的版本库和当前本地的版本库进行合并  git pull

  - git push -u origin 分支 -u不但会把本地分支内容推送的远程新的分支中，还不把本地的关联起来（指定默认主机）

- 查看远程仓库信息 git remote -v 

- 创建分支 git checkout -b XXX  

- 推送分支 git push origin XXX 到远程仓库中

- 合并分支 git merge --no-ff -m "" 分支名

- 抓取分支 (抓取远程的其他分支 本地没有) **git fetch origin dev**（抓取远程的dev分支）然后 **git checkout -b dev origin/dev **  本地创建dev分支设置为origin的远程分支‘dev’  **git pull origin dev**就可以把某个分支上的内容都拉取到本地了

- 如果小伙伴在dev有新的提交 你正好也要提交有冲突，先用git pull把最新的提交从origin/dev抓下来，然后，在本地合并，解决冲突，再推送

  ```
  git pull origin dev  
  git add README.md
  git commit -m"merge"
  git push origin dev
  ```

* ```bash
  删除本地分支：git branch -d developbranch
  强制删除本地分支：git branch -D developbranch
  删除远程分支：git push origin --delete developbranch
  ```

* 

FjlFjh01010202.

