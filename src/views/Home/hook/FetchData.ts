/* eslint-disable no-return-await */
import multicall from "utils/multicall"
import { ERC20_ABI } from "config/abi/erc20";
import BigNumber from "bignumber.js";

export async function fetchBalance (account:string, chainId:number): Promise<{balance:string}> {
    try {
        const calls = [
            {
                address: "0x242a227B38f704983FF101DC7De573ED8111601e",
                name: 'balanceOf',
                params: [account]
            }
            ]
            const [resultBalance] = await multicall(ERC20_ABI, calls, chainId)
            return {
                balance: new BigNumber(resultBalance.toString()).dividedBy(1e18).toString()
            } 
    } catch (e) {
        console.log(e)
        return {
            balance: "0"
        } 
    } 
}
