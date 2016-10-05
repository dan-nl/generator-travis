# generator-travis
[![Dependency Status][david-dm-image]][david-dm-url] [![Dev Dependency Status][david-dm-dev-image]][david-dm-dev-url] [![NSP Status][nsp-image]][nsp-url]

[yeoman generator][yeoman-getting-started-url] that creates a `.travis.yml` file in the target project.

the `.travis.yml` file contains the following settings:

```yml
language: node_js
node_js:
  - "6"
  - "5"
  - "4"
notifications:
  email: false
after_success: 'npm run cover:travis && npm run coveralls'
```

## installation
```bash
npm install -g dan-nl/generator-travis
```

## use
```bash
yo travis
```

## license
[MIT License][mit-license]

[david-dm-image]: https://david-dm.org/dan-nl/generator-travis.svg
[david-dm-url]: https://david-dm.org/dan-nl/generator-travis
[david-dm-dev-image]: https://david-dm.org/dan-nl/generator-travis/dev-status.svg
[david-dm-dev-url]: https://david-dm.org/dan-nl/generator-travis?type=dev
[mit-license]: https://raw.githubusercontent.com/dan-nl/generator-travis/master/license.txt
[nsp-image]: https://nodesecurity.io/orgs/githubdan-nl/projects/910ce1c7-dd61-42fd-a5f7-c7382d84a110/badge
[nsp-url]: https://nodesecurity.io/orgs/githubdan-nl/projects/910ce1c7-dd61-42fd-a5f7-c7382d84a110
[yeoman-getting-started-url]: http://yeoman.io/authoring/index.html
