export default {
  preset: 'ts-jest',
  transform: {
      '^.+\\.tsx?$': 'ts-jest',
    },
    // 具体配置项, 默认全局扫描 *.spec.js *.test.tsx?
    
    testRegex: '(/test/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    
    
};