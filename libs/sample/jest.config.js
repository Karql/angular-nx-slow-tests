module.exports = {
  name: 'sample',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/sample',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
