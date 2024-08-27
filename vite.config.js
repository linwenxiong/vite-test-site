import { defineConfig, loadEnv } from 'vite';
const buildMode = process.env.WEBMODE;
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  console.log( '当前的mode是'+ mode, '我去加载.env.'+ mode,'这个文件')
  const baseUrl = buildMode === 'deploy' && env.CDN_BASE_URL; // 部署时，使用的cdn地址
  // const baseUrl = mode === 'production' && env.CDN_BASE_URL; // 部署时，使用的cdn地址
  console.log(baseUrl, 'baseUrl');
  return {
    base: baseUrl || '/', // 脚本的链接地址
  }
})