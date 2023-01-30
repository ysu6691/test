import React, { useState } from "react";
import styled from "styled-components";
import { FaRegThumbsUp, FaThumbsUp, FaUserAlt, FaUsers } from "react-icons/fa";

import { GreenBtn, LikeBtn } from "../common/button/index";
import VoteModal from "./VoteModal";
import VoteResultModal from "./VoteResultModal";

const BroadcastContent = function () {
  const [isOpened, setIsOpened] = useState<boolean>(false);

  const tmpFeedList = [
    { id: 1, feedName: "귀뚜라미", imgSrc: "https://picsum.photos/200/300" },
    { id: 2, feedName: "지렁이", imgSrc: "https://picsum.photos/200/300" },
    { id: 3, feedName: "쥐", imgSrc: "https://picsum.photos/200/300" },
    { id: 4, feedName: "곤충젤리", imgSrc: "https://picsum.photos/200/300" },
  ];

  return (
    <StyledContainer>
      {isOpened && <VoteModal feedList={tmpFeedList} />}
      {/* <VoteResultModal feedName="귀뚜라미" imgSrc="https://picsum.photos/200/300" /> */}
      <StyledTitle>우파루파의 사료먹방 쑈쑈쑈~</StyledTitle>
      <StyledSubTitleContainer>
        <StyledCountInfoContainer>
          <FaUserAlt size={20} />
          {/* <FaUsers size={20} /> */}
          <StyledSpan>00 명</StyledSpan>
          <FaThumbsUp size={20} />
          {/* <FaRegThumbsUp size={20} /> */}
          <StyledSpan>000 회</StyledSpan>
        </StyledCountInfoContainer>
        <StyledButtonContainer>
          <GreenBtn label="투표하기" type={0} isDisable={false} onClick={() => setIsOpened(true)} />
          <LikeBtn />
        </StyledButtonContainer>
      </StyledSubTitleContainer>
      <StyledHr />
      <StyledDetail>우리 우파루파 사료 얼마나 맛있게 먹는지 보러 올 사람?</StyledDetail>
    </StyledContainer>
  );
};

export default BroadcastContent;

const StyledContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const StyledTitle = styled.div`
  font: ${(props) => props.theme.fonts.header2};
  color: ${(props) => props.theme.colors.primaryText};
`;

const StyledSubTitleContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledCountInfoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${(props) => props.theme.colors.primaryText};
`;

const StyledSpan = styled.span`
  font: ${(props) => props.theme.fonts.paragraph};
  color: ${(props) => props.theme.colors.primaryText};
`;

const StyledButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const StyledDetail = styled.div`
  font: ${(props) => props.theme.fonts.paragraph};
  color: ${(props) => props.theme.colors.primaryText};
`;

const StyledHr = styled.hr`
  width: 100%;
  margin-left: 0;
  color: ${(props) => props.theme.colors.brandColors.basaltGray["100"]};
`;
