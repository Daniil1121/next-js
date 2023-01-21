import { Dispatch, SetStateAction } from "react";

export interface IStep {
  title: string;
  step?: number;
  descr: string;
}

export interface IFormValues {
  name: string;
  phone: string;
  email: string;
}

export interface IFooterRefProps {
  aboutRef: React.RefObject<null | HTMLElement>;
  stepsRef: React.RefObject<null | HTMLElement>;
  faqRef: React.RefObject<null | HTMLElement>;
  galleryRef: React.RefObject<null | HTMLElement>;
  reviewRef: React.RefObject<null | HTMLElement>;
}

export interface IReviewControls {
  opacity: number;
  feedbackNumber: number;
  setOpacity: Dispatch<SetStateAction<number>>;
  setFeedbackNumber: Dispatch<SetStateAction<number>>;
}

export interface IReviewFeedback {
  opacity: number;
  feedbackNumber: number;
}
