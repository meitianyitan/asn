const libDir = process.env.LIB_DIR;

const transformIgnorePatterns = [
  '/dist/',
  'node_modules/[^/]+?/(?!(es|node_modules)/)', // Ignore modules without es dir
];

module.exports = {
  // 指示是否应在运行期间报告每个单独的测试。执行后，所有错误仍将显示在底部。
  verbose: true,
  setupFiles: [
    './tests/setup.js'
  ],

}
