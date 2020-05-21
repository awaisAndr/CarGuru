import styled from 'styled-components/native';
import { BLACK, WHITE } from '../../helper/Color';
import { SCREEN } from '../../helper/Constant';

const DashBoardStyles = {
  WrapperViewVertical: styled.View`
    flex: 1;
    backgroundColor: ${WHITE.dark};
  `,
  SplashImage: styled.Image`
    height: 150px;
    width: 100px;
    alignSelf: center;
    resizeMode: contain;
  `,
  TopView: styled.View`
    height: 200px;
    width: ${SCREEN.width - 30}px;
    alignSelf: center;
    flexDirection: row;
  `,
  TopFlex1View: styled.View`
    flex: 1;
    justifyContent: center;
    alignItems: center;
  `,
  TopInnerView: styled.TouchableOpacity`
    height: 120px;
    width: ${(SCREEN.width / 2) - 50}px;
    borderWidth: 0.3px;
    borderRadius: 5px;
    justifyContent: center;
  `,
  TopInnerHeaderText: styled.Text`
    fontSize: 22px;
    fontWeight: bold;
    alignSelf: center;
  `,
  TopInnerCountText: styled.Text`
    fontSize: 18px;
    alignSelf: center;
    marginTop: 5px;
  `,
};

export default DashBoardStyles;
