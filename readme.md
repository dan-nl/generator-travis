# generator-travis
yeoman generator that creates a `.travis.yml` file in the target project.

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

## license
[MIT License][mit-license]

[mit-license]: https://raw.githubusercontent.com/dan-nl/generator-travis/master/license.txt
