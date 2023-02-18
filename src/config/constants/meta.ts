import memoize from 'lodash/memoize'
import { ContextApi } from '@pancakeswap/localization'
import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: `Delta Labs JSC`,
  image: 'https://deltalabsjsc.com/wp-content/uploads/2022/07/Homepage.jpg',
  description:"Delta Labs cung cấp giải pháp ứng dụng blockchain vào mọi lĩnh vực với mục tiêu trở thành công ty công nghệ hàng đầu tại Việt Nam."
}

interface PathList {
  paths: { [path: string]: { title: string; basePath?: boolean; description?: string } }
  defaultTitleSuffix: string
}

const getPathList = (t: ContextApi['t']): PathList => {
  return {
    paths: {
      '/': { title: t('Home') },
      // '/swap': { basePath: true, title: t('Exchange') },
      // '/farms': { title: t('Farms') },
      // '/add': { basePath: true, title: t('Add Liquidity') },
      // '/remove': { basePath: true, title: t('Remove Liquidity') },
      // '/liquidity': { title: t('Liquidity') },
      // '/find': { title: t('Import Pool') },
      // '/pools': { title: t('Pools') },
      // '/limit-orders': { basePath: true, title: t('Limit Orders') },
    },
    defaultTitleSuffix: t('Delta Labs JSC'),
  }
}

export const getCustomMeta = memoize(
  (path: string, t: ContextApi['t'], _: string): PageMeta => {
    const pathList = getPathList(t)
    const pathMetadata =
      pathList.paths[path] ??
      pathList.paths[Object.entries(pathList.paths).find(([url, data]) => data.basePath && path.startsWith(url))?.[0]]

    if (pathMetadata) {
      return {
        title: `${pathMetadata.title} | ${t(pathList.defaultTitleSuffix)}`,
        ...(pathMetadata.description && { description: pathMetadata.description }),
      }
    }
    return null
  },
  (path, t, locale) => `${path}#${locale}`,
)
