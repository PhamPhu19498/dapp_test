import { ContextApi } from '@pancakeswap/localization'
import { ChainId } from '@pancakeswap/sdk'
import { MarketplaceFillIcon, MarketplaceIcon, MenuItemsType } from '@pancakeswap/uikit'
import { DropdownMenuItems } from '@pancakeswap/uikit/src/components/DropdownMenu/types'

export type ConfigMenuDropDownItemsType = DropdownMenuItems & { hideSubNav?: boolean }
export type ConfigMenuItemsType = Omit<MenuItemsType, 'items'> & { hideSubNav?: boolean; image?: string } & {
  items?: ConfigMenuDropDownItemsType[]
}

const addMenuItemSupported = (item, chainId) => {
  if (!chainId || !item.supportChainIds) {
    return item
  }
  if (item.supportChainIds?.includes(chainId)) {
    return item
  }
  return {
    ...item,
    disabled: true,
  }
}

const config: (
  t: ContextApi['t'],
  isDark: boolean,
  languageCode?: string,
  chainId?: number,
) => ConfigMenuItemsType[] = (t, isDark, languageCode, chainId) =>
  // [
  //   {
  //     label: t('Giới thiệu'),
  //     icon: MarketplaceIcon,
  //     fillIcon: MarketplaceFillIcon,
  //     href: '/gioithieu',
  //     showItemsOnMobile: false,
  //     items:
  //      [
  //       {
  //         label: t('Giới thiệu'),
  //         href: '/gioithieu',
  //         supportChainIds:[]
  //       }
  //     ].map((item) => addMenuItemSupported(item, chainId))
  //   },
  //   {
  //     label: t('Thành tựu'),
  //     icon: MarketplaceIcon,
  //     fillIcon: MarketplaceFillIcon,
  //     href: '/thanhtuu',
  //     showItemsOnMobile: false,
  //     items:
  //      [
  //       {
  //         label: t('Thành tựu'),
  //         href: '/thanhtuu',
  //         supportChainIds:[]
  //       }
  //     ].map((item) => addMenuItemSupported(item, chainId))
  //   },
  //   {
  //     label: t('Đối tác'),
  //     icon: MarketplaceIcon,
  //     fillIcon: MarketplaceFillIcon,
  //     href: '/doitac',
  //     showItemsOnMobile: false,
  //     items:
  //      [
  //       {
  //         label: t('Đối tác'),
  //         href: '/doitac',
  //         supportChainIds:[]
  //       }
  //     ].map((item) => addMenuItemSupported(item, chainId))
  //   },
  //   {
  //     label: t('Tin tức'),
  //     icon: MarketplaceIcon,
  //     fillIcon: MarketplaceFillIcon,
  //     href: '/tintuc',
  //     showItemsOnMobile: false,
  //     items:
  //      [
  //       {
  //         label: t('Tin tức'),
  //         href: '/tintuc',
  //         supportChainIds:[]
  //       }
  //     ].map((item) => addMenuItemSupported(item, chainId))
  //   },
  //   {
  //     label: t('Liên hệ'),
  //     icon: MarketplaceIcon,
  //     fillIcon: MarketplaceFillIcon,
  //     href: '/lienhe',
  //     showItemsOnMobile: false,
  //     items:
  //      [
  //       {
  //         label: t('Liên hệ'),
  //         href: '/lienhe',
  //         supportChainIds:[]
  //       }
  //     ].map((item) => addMenuItemSupported(item, chainId))
  //   },
  // ].map((item) => addMenuItemSupported(item, chainId))
  []

export default config
