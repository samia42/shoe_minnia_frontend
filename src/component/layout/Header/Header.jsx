import React from 'react';
import { Link} from 'react-router-dom';
import SiteNav, {ContentGroup} from 'react-site-nav'; 
import Logo from '../../logo/Logo';

const Header = () => {
    return (
        <> 
      
            <SiteNav 
            align="left"
            rowHeight="100"
            background="transparent"
            color="#BB84E8"
             fontSize="20"
             fontFamily="Arial, sans-serif">
                <ContentGroup title={ <Logo/> }/> 
                <ContentGroup title="Home" height="200">
                <ul> 
                    <li><Link to="/my-story">My Story</Link></li>
                    <li><Link to="/">Home</Link></li>
                </ul>
                </ContentGroup>
                <ContentGroup title="Products" height="200">
                Free text followed by some links.<br/>
                <a href="mailto:yusinto@gmail.com">Email</a><br/>
                <a href="https://github.com/yusinto">Github</a>
                </ContentGroup>
            </SiteNav>
           
           
               
        </>
    );
};

export default Header;