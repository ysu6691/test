import React from "react";
import styled from "styled-components";
import CardVote from "../cards/CardVote";

import { MdClose } from "react-icons/md";

interface Iprops {
  feeds: { id: number; feedName: string; imgSrc: string }[];
}

const VoteModal = function (props: Iprops) {
  const Cards = props.feeds.map((feed) => {
    return <CardVote key={feed.id} title={feed.feedName} imgSrc={feed.imgSrc} />;
  });

  return (
    <StyledModal>
      <StyledMdClose>
        <MdClose size={32} />
      </StyledMdClose>
      <StyledHeader>먹이를 투표해주세요.</StyledHeader>
      <StyledContainer>{Cards}</StyledContainer>
      <button>투표</button>
    </StyledModal>
  );
};

export default VoteModal;

const StyledModal = styled.div`
  width: 646px;
  height: 620px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  border-radius: 32px;
  color: ${(props) => props.theme.colors.primaryText};
  padding: 24px 0;
  box-shadow: 2px 2px 8px rgba(67, 67, 67, 0.2);
`;

const StyledMdClose = styled.div`
  margin-left: 85%;
  width: 32px;
  height: 32px;
`;

const StyledHeader = styled.span`
  font: ${(props) => props.theme.fonts.header2};
`;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;
