import { ReactNode, useMemo } from 'react'
import { useWeb3React } from '@pancakeswap/wagmi'
import { BLOCKED_ADDRESSES } from './config/constants'
import MulticallUpdater from './state/multicall/updater'
import { chains } from './utils/wagmi'

export function Updaters() {
  return (
    <>
      <MulticallUpdater />
    </>
  )
}

export function Blocklist({ children }: { children: ReactNode }) {
  const { account } = useWeb3React()
  const blocked: boolean = useMemo(() => Boolean(account && BLOCKED_ADDRESSES.indexOf(account) !== -1), [account])
  if (blocked) {
    return <div>Blocked address</div>
  }
  return <>{children}</>
}
