import { Flex } from '@pancakeswap/uikit';
import Container from 'components/Layout/Container';
import PageFullWidth from 'components/Layout/PageFullWidth';
import useActiveWeb3React from 'hooks/useActiveWeb3React';
import ComponentB from './compoents/ComponentB';
import ComponentA from './compoents/ComponentsA';

const HomePage = () => {
    const { account, chainId } = useActiveWeb3React()
    return (
        <PageFullWidth>
            <Container width="100%">
                <Flex width="100%" flexWrap="wrap">
                    <ComponentA
                        account={account}
                        chainId={chainId}
                    />
                    <ComponentB
                        account={account}
                    />
                </Flex>
            </Container>
        </PageFullWidth>
    )
};

export default HomePage;
