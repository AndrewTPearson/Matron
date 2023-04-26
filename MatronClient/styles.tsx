import { Text } from "react-native";
import { styled } from "nativewind";

const StyledText = styled(Text);

export function BoldText (props) {
  return <StyledText className='text-bold' {...props} />
}