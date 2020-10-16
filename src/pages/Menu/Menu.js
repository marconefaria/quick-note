import { Drawer, List, ListItem, ListItemText, Typography, AppBar, Toolbar, IconButton, Avatar } from "@material-ui/core";
import React, { useState } from "react";
import { MdArchive, MdHome, MdMenu, MdNoteAdd } from "react-icons/md"
import { FaUser } from "react-icons/fa"
import { IconContext } from "react-icons";
import "./Menu.css";
import { useHistory } from "react-router-dom";

function Menu(props){
    const history = useHistory();
    const [currentPage, setCurrentPage] = useState("/home");
    const [open, setOpen] = useState(false);

    function handleClick(pathName){
        history.push(pathName);
        setCurrentPage(pathName);
    }

    function handleDrawer(isOpen){
        setOpen(isOpen);
    }

    const pages = [
        {
            pathName: "/home",
            icon: <MdHome/>,
            text: "Home",
            iconSize: "1.5em",
        },
        {
            pathName: "/newnote",
            icon: <MdNoteAdd/>,
            text: "Nova Anotação",
            iconSize: "1.5em",
        },
        {
            pathName: "/archive",
            icon: <MdArchive/>,
            text: "Arquivo",
            iconSize: "1.5em",
        },
        {
            pathName: "/profile",
            icon: <FaUser/>,
            text: "Perffil",
            iconSize: "1.3em",
        },
    ];

    return (
        <>
        <AppBar position="static">
            {props.children}
            <Toolbar className="toolBar">
                <IconButton edge="start" aria-label="menu" onClick={() => handleDrawer(!open)}>
                    <MdMenu />
                </IconButton>
                <div className="userContainer">
                    <Typography className="userName">Nome</Typography>
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                </div>
            </Toolbar>
        </AppBar>
        <Drawer open = {open} onClose = {() => handleDrawer(false)}>
            <List className="list">
                {pages.map((listItem) => {
                    return (
                        <ListItem 
                        button
                        selected={currentPage === listItem.pathName}
                        onClick={
                            () => handleClick(listItem.pathName)}>
                            <IconContext.Provider value={{size: listItem.iconSize}}>
                                {listItem.icon}
                            </IconContext.Provider>
                            <ListItemText className="listItemText">
                                <Typography className="typography">{listItem.text}</Typography>
                            </ListItemText>
                        </ListItem>
                    );
                })}
            </List>
        </Drawer>
        </>
    );
}

export default Menu;