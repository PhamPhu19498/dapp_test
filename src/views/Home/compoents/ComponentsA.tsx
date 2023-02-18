import { Flex, Text, useMatchBreakpoints } from '@pancakeswap/uikit';
import { useState } from 'react';
import { fetchBalance } from '../hook/FetchData';

interface Props {
    account:string
    chainId:number
}

const ComponentA: React.FC<Props> = ({account, chainId}) => {
    const [ balance, setBalance ] = useState("0")
    fetchBalance(account, chainId).then((value) => {
        setBalance(value?.balance)
    }).catch((err) =>{
        console.log('err', err)
        setBalance("0")
    })
    const { isMobile } = useMatchBreakpoints();

    return (
        <Flex width={isMobile ? "100%" : "50%"} height="200px" alignItems="center" justifyContent="center" style={{gap:"10px"}}>
            <Text fontSize="24px">Balance:</Text>
            <Text fontSize="24px">{Number(balance).toLocaleString('en', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} RUN</Text>
        </Flex>
    )
    
}

export default ComponentA;
