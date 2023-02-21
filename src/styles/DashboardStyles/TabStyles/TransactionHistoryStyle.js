import styled from "styled-components";

export const TransactionWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 3%;
  padding: 3%;
  justify-content: space-between;
  box-sizing: border-box;
  /* width: 100%; */
  height: 99px;
  background: #ffffff;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.08);
`;

export const WrapperLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 8px;

  /* width: 115px; */
  height: 67px;
  /* identical to box height */

  color: #21334f;
`;

export const AmountStyle = styled.div`
  width: 56px;
  height: 17px;

  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  /* identical to box height */

  color: #03435f;
`;
export const WrapperRight = styled.div`
  /* Auto layout */

  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 0px;
  gap: 8px;

  width: 88px;
  height: 53px;
`;

export const ReceivedStyle = styled.div`
  /* Auto layout */

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px;
  gap: 10px;

  width: 88px;
  height: 28px;

  background: rgba(52, 168, 83, 0.1);
  border-radius: 100px;
  /* Auto layout */

  width: 61px;
  height: 17px;

  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  /* identical to box height */

  color: #34a853;
`;

export const DayStyle = styled.div`
  width: 47px;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  /* identical to box height */

  color: #21334f;
`;

export const TimeStyle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;
