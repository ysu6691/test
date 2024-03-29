import React, { useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import { useAppDispatch } from "../../../store";
import { closeModal } from "../../../store/modalSlice";
import BroadcastFinish from "./BroadcastFinish";
import DefaultContent from "./DefaultContent";

interface IProps {
  content: string;
}

const Modal = ({ content }: IProps): JSX.Element => {
  const dispatch = useAppDispatch();
  const [state, setState] = useState("");

  useEffect(() => {
    if (state === "close") setTimeout(() => dispatch(closeModal()), 500);
  }, [state]);

  const onClose = () => {
    setState("close");
  };

  const modalContent = useMemo(() => {
    switch (content) {
      case "BroadcastFinish":
        return <BroadcastFinish onClose={onClose} />;

      default:
        return <DefaultContent onClose={onClose} />;
    }
  }, [content]);

  return (
    <StyledDiv className={state}>
      <div className="background" onClick={onClose} />
      <div className="modal">{modalContent}</div>
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  z-index: 999999;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  & > .background {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.2);
    display: flex;
    justify-content: center;
    align-items: center;
    -webkit-animation: fade-in 1s cubic-bezier(0.39, 0.575, 0.565, 1) both;
    animation: fade-in 1s cubic-bezier(0.39, 0.575, 0.565, 1) both;
  }

  & > .modal {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.primaryBg};
    color: ${({ theme }) => theme.colors.primaryText};
    ${({ theme }) => theme.shadow};
    border-radius: 32px;
    -webkit-animation: slide-in-blurred-bottom 0.4s cubic-bezier(0.23, 1, 0.32, 1) both; // 수정불가
    animation: slide-in-blurred-bottom 0.4s cubic-bezier(0.23, 1, 0.32, 1) both; // 수정불가
  }

  &.close {
    pointer-events: none;
    & > .background {
      -webkit-animation: fade-out 0.5s ease-out both;
      animation: fade-out 0.5s ease-out both;
    }

    & > .modal {
      -webkit-animation: slide-out-bck-bottom 0.25s cubic-bezier(0.55, 0.085, 0.68, 0.53) both;
      animation: slide-out-bck-bottom 0.25s cubic-bezier(0.55, 0.085, 0.68, 0.53) both;
    }
  }
  /* ----------------------------------------------
* Generated by Animista on 2023-2-5 21:14:33
* Licensed under FreeBSD License.
* See http://animista.net/license for more info. 
* w: http://animista.net, t: @cssanimista
* ---------------------------------------------- */
  @-webkit-keyframes slide-in-blurred-bottom {
    0% {
      -webkit-transform: translateY(1000px) scaleY(2.5) scaleX(0.2);
      transform: translateY(1000px) scaleY(2.5) scaleX(0.2);
      -webkit-transform-origin: 50% 100%;
      transform-origin: 50% 100%;
      -webkit-filter: blur(40px);
      filter: blur(40px);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateY(0) scaleY(1) scaleX(1);
      transform: translateY(0) scaleY(1) scaleX(1);
      -webkit-transform-origin: 50% 50%;
      transform-origin: 50% 50%;
      -webkit-filter: blur(0);
      filter: blur(0);
      opacity: 1;
    }
  }
  @keyframes slide-in-blurred-bottom {
    0% {
      -webkit-transform: translateY(1000px) scaleY(2.5) scaleX(0.2);
      transform: translateY(1000px) scaleY(2.5) scaleX(0.2);
      -webkit-transform-origin: 50% 100%;
      transform-origin: 50% 100%;
      -webkit-filter: blur(40px);
      filter: blur(40px);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateY(0) scaleY(1) scaleX(1);
      transform: translateY(0) scaleY(1) scaleX(1);
      -webkit-transform-origin: 50% 50%;
      transform-origin: 50% 50%;
      -webkit-filter: blur(0);
      filter: blur(0);
      opacity: 1;
    }
  }
  @-webkit-keyframes fade-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @keyframes fade-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @-webkit-keyframes fade-out {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
  @keyframes fade-out {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
  @-webkit-keyframes slide-out-bck-bottom {
    0% {
      -webkit-transform: translateZ(0) translateY(0);
      transform: translateZ(0) translateY(0);
      opacity: 1;
    }
    100% {
      -webkit-transform: translateZ(-1100px) translateY(1000px);
      transform: translateZ(-1100px) translateY(1000px);
      opacity: 0;
    }
  }
  @keyframes slide-out-bck-bottom {
    0% {
      -webkit-transform: translateZ(0) translateY(0);
      transform: translateZ(0) translateY(0);
      opacity: 1;
    }
    100% {
      -webkit-transform: translateZ(-1100px) translateY(1000px);
      transform: translateZ(-1100px) translateY(1000px);
      opacity: 0;
    }
  }
`;

export default Modal;
