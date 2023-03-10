import styled from 'styled-components'
import { ChevronDownIcon, ChevronUpIcon, Text } from '@pancakeswap/uikit'
import { useTranslation } from '@pancakeswap/localization'
import { useCallback } from 'react'

export interface ExpandableSectionButtonProps {
  onClick?: () => void
  expanded?: boolean
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  svg {
    fill: ${({ theme }) => theme.colors.textDisabled};
  }
`

const ExpandableSectionButton: React.FC<React.PropsWithChildren<ExpandableSectionButtonProps>> = ({
  onClick,
  expanded = false,
}) => {
  const { t } = useTranslation()
  const handleOnClick = useCallback(() => onClick?.(), [onClick])

  return (
    <Wrapper aria-label={t('Hide or show expandable content')} role="button" onClick={handleOnClick}>
      <Text color="text" bold>
        {expanded ? t('Hide') : t('Details')}
      </Text>
      {expanded ? <ChevronUpIcon /> : <ChevronDownIcon />}
    </Wrapper>
  )
}

export default ExpandableSectionButton
