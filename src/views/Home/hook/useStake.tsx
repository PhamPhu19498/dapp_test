import { useTranslation } from '@pancakeswap/localization'
import { useToast } from '@pancakeswap/uikit'
import BigNumber from 'bignumber.js'
import { ToastDescriptionWithTx } from 'components/Toast'
import { useCallWithMarketGasPrice } from 'hooks/useCallWithMarketGasPrice'
import { usePoolRun } from 'hooks/useContract'
import { useCallback, useState } from 'react'


export const useStake = () => {
    const { toastSuccess, toastError } = useToast()
    const { callWithMarketGasPrice } = useCallWithMarketGasPrice()
    const { t } = useTranslation()
    const contractAddress = usePoolRun("0x2cb575f98cf1900061df48666b46aa1341aa6db4")
    const [ pendingStake, setPending ] = useState(false)
    const convertAmountDeposit = new BigNumber("1000").multipliedBy(1E18).toString()
    
    const handleStake = useCallback(async () => {
        setPending(true)
        try {
            const tx = await callWithMarketGasPrice(contractAddress, 'deposit', [convertAmountDeposit])
            const receipt = await tx.wait()
            if (receipt?.status) {
                toastSuccess(
                    t('Staking successfully!'),
                    <ToastDescriptionWithTx txHash={receipt.transactionHash}/>
                  )
            }
        } catch (error) {
            toastError(t('Error'), t('Please try again. Confirm the transaction and make sure you are paying enough gas!'))
            console.log(error)
        } finally {
            setPending(false)
        }
    }, [callWithMarketGasPrice, contractAddress, convertAmountDeposit, toastSuccess, t, toastError])
    
    return { handleStake, pendingStake }
  }
