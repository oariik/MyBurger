import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import navigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Aux';



const sideDrawer = (props) => (
        const attachedClasses = [classes.sideDrawer, classes.Close] ;
if (props.open) {
    attachedClasses = [classes.sideDrawer, classes.Open];
}
return (
    <Aux>
        <Backdrop show={props.open} clicked={props.closed}>
            <div className={classes.SideDrawer}>
                <div className={classes.Logo}>
                    <Logo />
                </div>
                <nav> <NavigationItems /> </nav>
            </div>
        </Backdrop>
        <Aux>
            );
                    
                    
                    );
            
export default sideDrawer;