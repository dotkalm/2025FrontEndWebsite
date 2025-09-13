export type TDesignTokens = {
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: "designTokens";
  _updatedAt: string;
  colors: {
    black: string;
    gray: string;
    red: string;
    white: string;
  };
  typography: {
    large: TypographySet;
    small: TypographySet;
  };
};

export type TypographySet = {
  anchoredAnnouncement: TypographyStyle;
  body: TypographyStyle;
  bodyItalic: TypographyStyle;
  captions: TypographyStyle;
  headline: TypographyStyle;
  headlineItalic: TypographyStyle;
  navigation: TypographyStyle;
};

export type TypographyStyle = {
  fontFamily: string;
  fontSize: string;
  fontStyle: string;
  fontWeight?: string;
  lineHeight: string;
};
