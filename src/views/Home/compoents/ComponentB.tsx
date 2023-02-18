import { AutoRenewIcon, Button, Flex, useMatchBreakpoints } from '@pancakeswap/uikit';
import ConnectWalletButton from 'components/ConnectWalletButton';
import { useStake } from '../hook/useStake';

interface Props {
    account:string
}

const ComponentB: React.FC<Props> = ({account}) => {
    
    const { handleStake, pendingStake } = useStake()
    const { isMobile } = useMatchBreakpoints();

    return (
        <Flex width={isMobile ? "100%" : "50%"} height="200px" alignItems="center" justifyContent="center" style={{gap:"10px"}}>
            { account ?
                <Button
                    width="250px"
                    disabled={pendingStake}
                    endIcon={ pendingStake ? <AutoRenewIcon spin color='textDisable' /> : null}
                    onClick={handleStake}
                >
                    Stake
                </Button>
            :
                <ConnectWalletButton  width="250px"/>
            }
        </Flex>
    )
};

export default ComponentB;
