import { useTranslation } from '@pancakeswap/localization'
import styled from 'styled-components'
import {
  Box,
  Flex,
  LogoutIcon,
  UserMenu as UIKitUserMenu,
  UserMenuItem,
  UserMenuVariant
} from '@pancakeswap/uikit'
import ConnectWalletButton from 'components/ConnectWalletButton'
import Trans from 'components/Trans'
import { useActiveChainId } from 'hooks/useActiveChainId'
import useAuth from 'hooks/useAuth'
import { useEffect, useState } from 'react'
import { useAccount } from 'wagmi'

const UserMenu = () => {
  const { t } = useTranslation()
  const { address: account } = useAccount()
  const { isWrongNetwork } = useActiveChainId()
  const { logout } = useAuth()
  const [userMenuText, setUserMenuText] = useState<string>('')
  const [userMenuVariable, setUserMenuVariable] = useState<UserMenuVariant>('default')
  const avatarSrc =  undefined
  const UserMenuItems = () => {
    return (
      <>
        <UserMenuItem as="button" onClick={logout}>
          <Flex alignItems="center" justifyContent="space-between" width="100%">
            {t('Disconnect')}
            <LogoutIcon />
          </Flex>
        </UserMenuItem>
      </>
    )
  }

  if (account) {
    return (
      <UIKitUserMenu account={account} avatarSrc={avatarSrc} text={userMenuText} variant={userMenuVariable} isShowIcon={false}>
        {({ isOpen }) => (isOpen ? <UserMenuItems /> : null)}
      </UIKitUserMenu>
    )
  }

  if (isWrongNetwork) {
    return (
      <UIKitUserMenu text={t('Network')} variant="danger">
        {({ isOpen }) => (isOpen ? <UserMenuItems /> : null)}
      </UIKitUserMenu>
    )
  }

  return (
    <CsConnectWalletButton scale="sm">
      <Box display={['none', , , 'block']}>
        <Trans>Connect Wallet</Trans>
      </Box>
      <Box display={['block', , , 'none']}>
        <Trans>Connect</Trans>
      </Box>
    </CsConnectWalletButton>
  )
}

export default UserMenu

const CsConnectWalletButton = styled(ConnectWalletButton)`
  height: 46px;
  background: transparent;
  color:${({ theme }) => theme.colors.text};
  border:2px solid ${({ theme }) => theme.colors.cardBorder};
`
