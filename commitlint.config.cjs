module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'build',
        'chore',
        'ci',
        'conflict',
        'delete',
        'docs',
        'downgrade',
        'feat',
        'fix',
        'font',
        'lint',
        'perf',
        'refactor',
        'release',
        'revert',
        'stash',
        'style',
        'test',
        'upgrade',
        'wip'
      ]
    ]
  }
};
