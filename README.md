# Homepage

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.1.7.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Git流程：

1. 基于远程develop创建本地分支：git checkout -b feature/CAA-<JiraID> origin/develop (ex. git checkout -b feature/CAA-36 origin/develop) 
2. 将本地分支推送到远程： git push -u origin feature/CAA-<JiraID> (ex. git push -u origin feature/CAA-36)
3. 每日开发结束后 add, commit, push 代码到远程分支
4. 一周的开发结束后，在网页上发起pull request。打好备注和reviewer。
   1. 备注格式：CAA-28, Feature, [What you have done]
5. 代码被reviewer merge成功后，删除远程分支（网页上直接删除或者本地终端删除都可）。
6. 最后删除本地分支以及远程分支的记录（如果直接用网页删除远程分支的话，会有记录在本地可以手动删除）：
   1. 删除本地分支：git branch -d feature/CAA-<JiraID> (ex. git branch -d feature/CAA-36 )
   2. 删除记录: git branch -r -d origin/feature/CAA-<JiraID> (ex. git branch -r -d origin/feature/CAA-36)