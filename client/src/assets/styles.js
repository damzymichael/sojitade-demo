import { Link } from "react-router-dom";
import { styled } from "@mui/system";

export const iconStyle = { display: "block", margin: "10px auto 1.4rem" };

export const MyLink = styled(Link)(({ theme }) => ({
  fontSize: 18,
  textAlign: "center",
  color: theme.palette.secondary.main,
  "&:hover": {
    textDecoration: "none",
  },
}));

export const svgSmallStyles = {
  display: "block",
  margin: "-20px auto 0",
  transform: "scale(0.5)",
};

export const gridContainer = (theme) => ({
  [theme.breakpoints.down("md_1")]: {
    width: "90%",
  },
  width: "80%",
  margin: "0 auto 0px",
  columnGap: {
    sm_1: 2,
    md: 7,
  },
  rowGap: {
    xs: 3,
    sm: 5,
  },
  justifyContent: "center",
});

export const gridItem = (theme) => ({
  "&:first-of-type": {
    border: `2px solid ${theme.palette.primary.main}`,
  },
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  width: {
    xs: 250,
    sm_1: 250,
    md: 300,
  },
  border: "2px solid #d5d5d5",
  borderRadius: 3,
  padding: "30px 30px",
});

export const modalStyle = {
  height: "auto",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: {
    xs: "90%",
    sm: "80%",
    sm_1: 700,
  },
  borderRadius: "10px",
  backgroundColor: "#fff",
  boxShadow: 24,
  padding: "0.7rem 2.5rem",
};

export const NewsLink = styled(Link)(() => ({
  color: "red",
  textDecoration: "none",
  fontStyle: "italic",
  "&:hover": {
    textDecoration: "underline",
  },
}));

export const newsGridItem = {
  borderRadius: 2,
  width: {
    xs: "90%",
    xs_1: '45%',
    sm_2: "30%",
  },
  padding: {
    xs: "20px",
    sm: "2rem 1.5rem",
  },
};

export const newsGridContainer = {
  width: "96%",
  margin: '0 auto',
  rowGap: 4,
  columnGap: {
    xs: 1,
    sm: 4,
  },
  justifyContent: {
    xs: 'center',
    xs_1: 'space-between'
  },
  paddingBlock: 4,
};
