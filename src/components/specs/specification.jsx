import Wrapper from "../wrapper";
import Details from "./details";
import ModesNRating from "./modesNRating";
import Online from "./online";

export default function Specifications(){
    return(
        <section>
            <Wrapper>
                <ModesNRating/>
                <Details/>
                <Online/>
            </Wrapper>
        </section>
    )
}