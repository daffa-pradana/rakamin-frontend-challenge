import styled from "styled-components";

export const GroupWrapper = styled.div`
  width: 306px;
  padding: 12px;
  border: ${({ enum_clr }) => "1px solid var(--clr-" + enum_clr + ")"};
  background-color: ${({ enum_clr }) => "var(--clr-bg-" + enum_clr + ")"};
  border-radius: 4px;
`;

export const GroupTitleWrapper = styled.div`
  width: 86px;
  height: 22px;
  background-color: ${({ enum_clr }) => "var(--clr-bg2-" + enum_clr + ")"};
  border: ${({ enum_clr }) => "1px solid var(--clr-" + enum_clr + ")"};
  border-radius: 2px;
`;

export const GroupTitle = styled.p`
  color: ${({ enum_clr }) => "var(--clr-" + enum_clr + ")"};
  font-size: 12px;
  line-height: 20px;
  text-align: center;
  font-family: "font-regular";
`;

export const GroupInterval = styled.p`
  font-family: "font-medium";
  font-size: 12px;
  line-height: 20px;
  color: var(--clr-black);
  margin-top: 4px;
`;

export const GroupBtn = styled.div`
  width: 91px;
  margin-top: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* border: 1px solid red; */
  cursor: pointer;
`;

export const BtnIcon = styled.img`
  width: 22px;
`;

export const BtnText = styled.span`
  font-family: "font-regular";
  font-size: 14px;
  line-height: 20px;
  color: var(--clr-black);
`;
