import Wrapper from "../wrapper";
import Carousel from "./carousel";
import Warning from "./warning";

export default function OtherProducts(){
    return(
        <Wrapper x={16} t={16} b={24}>
            <h2 className="text-3xl text-footer-heading font-semibold">More like this</h2>
            <Carousel/>
            <Warning/>
        </Wrapper>
    )
}