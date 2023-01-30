import React from "react";
import styled from "styled-components";
import { FaRegHandPaper, FaRegHeart, FaFireAlt, FaExpand } from "react-icons/fa";

import { ReactionBtn } from "../common/button";

const BroadcastScreen = function () {
  return (
    <StyledContainer>
      <StyledReactionContainer>
        <ReactionBtn label="쓰다듬기" icon={FaRegHandPaper} color="#F1A604" />
        <ReactionBtn label="예뻐하기" icon={FaRegHeart} color="#ff38a4" />
        <ReactionBtn label="응원하기" icon={FaFireAlt} color="#f33041" />
      </StyledReactionContainer>
      <MaximizeIconContainer>
        <FaExpand size={30} />
      </MaximizeIconContainer>
    </StyledContainer>
  );
};

export default BroadcastScreen;

const StyledContainer = styled.div`
  width: 100%;
  aspect-ratio: 1654 / 1000;
  border-radius: 32px;
  filter: drop-shadow(2px 2px 8px rgba(67, 67, 67, 0.2));
  background: #999999;
`;

const StyledReactionContainer = styled.div`
  position: absolute;
  bottom: 40px;
  left: 20px;
  height: 190px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const MaximizeIconContainer = styled.div`
  position: absolute;
  bottom: 40px;
  right: 28px;
  width: 56px;
  height: 56px;
  border-radius: 32px;
  color: ${(props) => props.theme.colors.brandColors.basaltGray["50"]};
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.3);
`;
