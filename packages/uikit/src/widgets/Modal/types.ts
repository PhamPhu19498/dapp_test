import { BoxProps } from "../../components/Box";

export interface ModalTheme {
  background: string;
}

export type Handler = () => void;

export interface InjectedProps {
  onDismiss?: Handler;
  mode?: string;
}

export interface ModalWrapperProps extends InjectedProps, Omit<BoxProps, "title"> {}

export interface ModalProps extends ModalWrapperProps {
  title: React.ReactNode;
  hideCloseButton?: boolean;
  onBack?: () => void;
  bodyPadding?: string;
  headerBackground?: string;
}

export interface ModalPropsV2 extends InjectedProps, BoxProps {
  title?: string;
  text?: string;
  toModal?: any;
  hideCloseButton?: boolean;
  onBack?: () => void;
  bodyPadding?: string;
  headerBackground?: string;
  minWidth?: string;
}
