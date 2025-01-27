"use client";
import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import React from "react";
import { CustomDialog } from "../CustomDialog";
import { FavoriteTable } from "./FavoriteTable";
import { Favorite } from "@mui/icons-material";
import { dialogOpenSubject$ } from "../CustomDialog/CustomDialog";
import { Notification, ButtonFav } from "@/styled-components";
import { useSelector } from "react-redux";
import { AppStore } from "@/redux/store";

const Navbar: React.FC = () => {
  const favoritePersons = useSelector((store: AppStore) => store.favorites);

  const handleClick = () => {
    dialogOpenSubject$.setSubject = true;
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <CustomDialog>
        <FavoriteTable />
      </CustomDialog>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Adminify
          </Typography>
          <ButtonFav>
            <IconButton
              color="secondary"
              aria-label="favorites"
              component="label"
              onClick={handleClick}
            >
              <Favorite />
            </IconButton>
            {favoritePersons.length > 0 ? (
              <Notification>
                <div>{favoritePersons.length}</div>
              </Notification>
            ) : (
              ""
            )}
          </ButtonFav>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
