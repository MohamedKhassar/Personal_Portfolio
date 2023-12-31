import { BiMouse } from "react-icons/bi";
import SlideImg from "./body/SlideImg";
import SlideText from "./body/SlideText";
import Skills from "./body/Skills";
const Body = () => {
    return (
        <div className="grid gap-y-5 bg">
            <div className="flex justify-between flex-row-reverse items-center">
                <SlideImg />
                <SlideText />
            </div>
            <span className="flex items-center justify-center translate-y-96 my-14">
                <hr  className="w-[300px] border-black dark:border-white"/><a href="#skills" target="_self"><BiMouse className="dark:fill-white" size={30}/></a><hr className="w-[300px] border-black dark:border-white"/>
            </span>
            
                <Skills />
        </div>
    );
}

export default Body;
