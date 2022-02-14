import React from "react";
import Logof from "../../../../images/logo-header.jpg";
import { Link, useNavigate } from "react-router-dom";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { Fragment } from "react";
import { logout } from "../../../../actions/businessActions";
import { useDispatch, useSelector } from "react-redux";

function Header(props) {
    const dispatch = useDispatch();
    let navigate = useNavigate();

    const signedUpBusinessLogin = useSelector(
        (state) => state.signedUpBusinessLogin
    );
    const { signedUpBusinessInfo } = signedUpBusinessLogin;

    const logoutHandler = () => {
        dispatch(logout());
        navigate("/");
    };

    function classNames(...classes) {
        return classes.filter(Boolean).join(" ");
    }

    return ( <
        head className = "flex justify-between bg-medium-blue px-2 md:px-4 lg:px-5 py-2" >
        <
        div className = "flex space-x-5 lg:space-x-36 h-10" >
        <
        div className = "flex" >
        <
        div className = "text-2xl lg:hidden text-white"
        onClick = {
            () => props.handleNav() } >
        { props.button } <
        /div> <
        Link to = "/" >
        <
        img alt = ""
        src = { Logof }
        className = "w-4/5 lg:w-full" / >
        <
        /Link> <
        /div> <
        input className = "w-36 md:w-64 lg:w-96 outline-none pl-1 lg:pl-5 focus:outline-none focus:ring focus:border-blue-300" / >
        <
        /div> <
        div className = "flex gap-2 lg:gap-10 lg:pr-28 ml-auto" >
        <
        div >
        <
        Link to = "/cart"
        className = "text-lg font-medium text-white mt-2 hover:text-blue-200 " >
        Cart <
        /Link> <
        /div> <
        Menu as = "div"
        className = "relative inline-block text-left" >
        <
        div >
        <
        Menu.Button className = "inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500" >
        Options { " " } <
        div className = "w-4 h-4 lg:w-7 lg:h-7 rounded-full bg-Dark-grey mt-3 lg:mt-1" / >
        <
        ChevronDownIcon className = "-mr-1 ml-2 h-5 w-5"
        aria - hidden = "true" /
        >
        <
        /Menu.Button> <
        /div> <
        Transition as = { Fragment }
        enter = "transition ease-out duration-100"
        enterFrom = "transform opacity-0 scale-95"
        enterTo = "transform opacity-100 scale-100"
        leave = "transition ease-in duration-75"
        leaveFrom = "transform opacity-100 scale-100"
        leaveTo = "transform opacity-0 scale-95" >
        <
        Menu.Items className = "origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" >
        <
        div className = "py-1" >
        <
        Menu.Item > {
            ({ active }) => ( <
                Link to = ""
                className = {
                    classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block px-4 py-2 text-sm"
                    )
                } >
                Account settings <
                /Link>
            )
        } <
        /Menu.Item> <
        Menu.Item > {
            ({ active }) => ( <
                Link to = ""
                className = {
                    classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block px-4 py-2 text-sm"
                    )
                } >
                Support <
                /Link>
            )
        } <
        /Menu.Item> <
        Menu.Item > {
            ({ active }) => ( <
                Link to = ""
                className = {
                    classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block px-4 py-2 text-sm"
                    )
                } >
                License <
                /Link>
            )
        } <
        /Menu.Item> <
        form method = "POST"
        action = "#" >
        <
        Menu.Item > {
            ({ active }) => ( <
                button type = "submit"
                className = {
                    classNames(
                        active ?
                        "bg-gray-100 text-gray-900" :
                        "text-gray-700",
                        "block w-full text-left px-4 py-2 text-sm"
                    )
                }
                onClick = {
                    () => {
                        localStorage.removeItem("signedUpBusinessInfo");
                        navigate("/");
                    }
                } >
                Log out <
                /button>
            )
        } <
        /Menu.Item> <
        /form> <
        /div> <
        /Menu.Items> <
        /Transition> <
        /Menu> <
        /div> <
        /head>
    );
}

export default Header;