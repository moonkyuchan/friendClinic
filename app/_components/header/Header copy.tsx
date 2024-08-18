"use client";
import { useState } from "react";
import { styled, Theme } from "@mui/material/styles";
import {
  Stack,
  Typography,
  Grid,
  Container,
  Box,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
} from "@mui/material";

import { menuList } from "./lib/data";
import { height } from "@mui/system";

export default function Header() {
  return (
    <ExpandableBox>
      <Container sx={{ height: "inherit" }}>
        <Grid container sx={{ backgroundColor: "red", height: "inherit" }}>
          <Grid
            item
            flex={1}
            sx={{ backgroundColor: "blue" }}
            alignContent={"center"}
          >
            <Box>하하하</Box>
          </Grid>
          <Grid item flex={1}>
            <Box>하하하</Box>
          </Grid>
          <Grid item flex={1}>
            <Box>하하하</Box>
          </Grid>
          <Grid item flex={1}>
            <Box>하하하</Box>
          </Grid>
          <Grid item flex={1}>
            <Box>하하하</Box>
          </Grid>
        </Grid>
      </Container>
      {/* <Grid
        container
        alignItems="center"
        justifyContent={"center"}
        columnGap={15}
        sx={{ height: "100px" }}
      >
        {menuList.map((ele) => {
          return (
            <Grid item key={ele.id}>
              <HoverTypography>{ele.name}</HoverTypography>
            </Grid>
          );
        })}
      </Grid> */}
    </ExpandableBox>
  );
}

const ExpandableBox = styled(Box)(({ theme }: { theme: Theme }) => ({
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100px", // 기본 높이 100px
  // backgroundColor: theme.palette.primary.main
  backgroundColor: "#ffffff",
  overflow: "hidden",
  transition: "height 0.3s ease", // 높이가 부드럽게 변하도록 설정
  "&:hover": {
    height: "500px", // 마우스를 올리면 높이가 500px로 확장
  },
}));

const HoverTypography = styled(Box)(({ theme }: { theme: Theme }) => ({
  alignItems: "center",
  color: "black",
  position: "relative",
  cursor: "pointer",
  fontWeight: 700,
  "&:hover": {
    color: theme.palette.primary.main,
    "&::after": {
      content: '""',
      position: "absolute",
      bottom: -2,
      left: 0,
      width: "100%",
      height: "2px",
      backgroundColor: theme.palette.primary.main,
      transform: "scaleX(1)", // 밑줄 보이게 하기
      transformOrigin: "bottom left",
    },
  },
}));
