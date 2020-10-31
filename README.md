## Git流程：

1. 基于远程develop创建本地分支：git checkout -b feature/CAA-JiraID origin/develop (ex. git checkout -b feature/CAA-36 origin/develop) 
2. 将本地分支推送到远程： git push -u origin feature/CAA-JiraID (ex. git push -u origin feature/CAA-36)
3. 每日开发结束后 
   1. 将远程develop的代码通过pull request，pull到自己的远程分支
   2. 将远程分支的代码pull到本地
   3. 确认文件无冲突后，add, commit, push 代码到远程分支
4. 一周的开发结束后，在网页上发起pull request。打好备注和reviewer。
   1. 备注格式：CAA-36, Feature, [What you have done]
5. 代码被reviewer merge成功后，删除远程分支（网页上直接删除或者本地终端删除都可）。
6. 最后删除本地分支以及远程分支的记录（如果直接用网页删除远程分支的话，会有记录在本地可以手动删除）：
   1. Checkout到本地develop分支
   2. 删除本地分支：git branch -d feature/CAA-JiraID (ex. git branch -d feature/CAA-36 )
   3. 删除记录: git branch -r -d origin/feature/CAA-JiraID (ex. git branch -r -d origin/feature/CAA-36)