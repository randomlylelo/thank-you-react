import React, {Component} from 'react';
import { Link } from "react-router-dom";
import checkPng from "../src/check.png";

export class TopBar extends Component {
    render() {
        return(
            <div class="xl:h-25 block xl:bg-grayPc ">
                <div className="xl:float-left">
                    <div className="bg-graySmall xl:bg-grayPc p-2.5 xl:p-0">
                        <a
                        href="/"
                        className="text-white block font-bold text-center no-underline text-xs xl:font-headerPc xl:text-40px xl:float-left xl:inline-block xl:font-normal xl:pt-3.75 xl:bg-grayPc"
                        >
                        California Institute of Technology{" "}
                        <span className="hidden xl:inline">(Caltech)</span>
                        </a>
                    </div>
                    </div>
                    {/* Hidden makes the thing hidden on mobile so afterwards no need for xl. Would probs be a good idea to do it but im lazy */}
                    <div className="hidden xl:block float-right pt-3.75">
                    {/* Home Links */}
                    <div className=" text-right pb-2.5 uppercase font-bold text-sm pr-2 h-4.5 text-links">
                        <a href="http://www.admissions.caltech.edu/">
                        Caltech Admissions Home
                        </a>
                    </div>
                    {/* "Header? Label for persons name" */}
                    <div className="relative top-5">
                        <div className="block">
                        <ul className="">
                            <li>
                            <span className="text-white text-xs">You :)</span>
                            <a
                                href="https://youtu.be/dQw4w9WgXcQ"
                                className="text-xxs pl-1.25 text-linkRed visited:text-linkBlue"
                            >
                                Logout
                            </a>
                            </li>
                        </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export class BottomBar extends Component {
    render(props) {
        return(
            <div>
                <div>
                    <footer className="hidden xl:block pt-2.5">
                        <p className="pb-2.5 text-xxs uppercase text-lightGray">
                            {this.props.name}
                            <br />
                            {this.props.address}
                            <br />
                            <br />
                        </p>
                    </footer>
                </div>
            </div>
        );
    }
}

class Banner extends Component {
    render(props) {

        var labelList = this.props.bannerList.map(function(label) {
            return(
                <div className={label.style}>
                    <h1 className="text-center">{label.lbl}</h1>
                </div>
            );
        });
        
        return(
            <div className="flex flex-col items-center">
                <div className="xl:w-3/4 w-full h-56 bg-orange shadow-2xl my-3 flex justify-center items-center">
                    {labelList}
                </div>
            </div>
        );
    }
}

class NavItem extends Component {
    render(props) {

        return(
            <div>
                <nav>
                    <ul>
                        <li>
                        <Link to={this.props.location} className="text-orange">
                            {this.props.navTitle}
                        </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        );
    }
}

class InfoSection extends Component {
    render(props) {

        var infoList = this.props.infoList.map(function(info) {
            return(
                <div>
                    <ul>
                        <li className="text-md font-bold bg-greenHeader my-2.5">
                            <h2 className="pl-1 xl:text-grayPc">{info.title}</h2>
                        </li>
                        <li>
                            <h3 className="font-bold">{info.header}</h3>
                        </li>
                        <li>
                            <h4>{info.content}</h4>
                        </li>
                        <NavItem location={info.page} navTitle={info.navTitle}/>
                    </ul>
                </div>
            );
        });

        return(
            <div>
                {infoList}
            </div>
        );
    }
}

export class CheckList extends Component {
    render() {

        var checkList = this.props.checkList.map(function(item) {
            return(
                <tr className="w-full">
                    <td className="w-1/20 px-2 border-b-2">
                        <img src={checkPng} alt=""/>
                    </td>
                    <td className="w-1/10 px-3 border-b-2">
                        {item.status}
                    </td>
                    <td className="w-3/4 px-3 border-b-2">
                        {item.name}
                    </td>
                    <td className="w-1/10 px-6 border-b-2">
                        {item.date}
                    </td>
                </tr>
                
            );
        });

        return(
            <div className="shadow-md font-sans w-full">
                <table>
                    <tr className="bg-lightGray w-full border-b-2">
                        <td className="w-0"></td>
                        <td className="w-3/20 px-0">Status</td>
                        <td className="w-3/4 px-3">Details</td>
                        <td className="w-1/10 px-6">Date</td>
                    </tr>
                    {checkList}
                </table>
            </div>
        );
    }
}

export class MidSection extends Component {

    

    render(props) {
    
        return(
            
            <div className="xl:w-1000 xl:m-auto p-2.5 xl:bg-white">
                <div>
                    {/* I have to do xl bc website uses 1.5em, but I don't have default text saved so 1.25rem is clsoe enough. */}
                    <h1 className="font-bold fontFamily-sans text-xl mb-2.5">
                        {this.props.title}
                    </h1>
                    
                    <Banner bannerList={this.props.bannerLabels}/>

                    <InfoSection infoList={this.props.infoArray}/>

                    <CheckList checkList={this.props.checkItems}/>
                    
                </div>

            </div>
        );
    }
}

