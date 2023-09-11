import "./CaptionText.css";
import styled from "styled-components";

export const Content = styled.p`
  font-weight: 100;
  text-transform: none;
  font-size: 2rem;
  @media (max-width: 599px) {
    font-size: 1.3rem;
  }
  @media (max-width: 300px) {
    font-size: 0.7rem;
  }
`;

export const CaptionText = ({ caption_title, caption_text }) => {
  return (
    <section className="caption_wrapper">
      <div className="caption_wrapper_top">{caption_title}</div>
      <div className="caption_wrapper_bottom" aria-hidden="true">
        {caption_title}
      </div>
      <Content>{caption_text}</Content>
    </section>
  );
};
