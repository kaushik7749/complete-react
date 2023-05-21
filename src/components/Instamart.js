import { useState } from "react";

//we are passing isVisible and setIsVisible as prop in below section
const Section = ({title, description, isVisible, setIsVisible}) => {
    return(
        <div className='border border-black p-2 m-2'>
        <h3 className='font-bold text-xl'>{title}</h3>
        {
            isVisible ? (
                <button
                onClick={() => setIsVisible(!isVisible)}
                className='cursor-pointer underline'>Hide</button>
            ) : (
                <button
                onClick={() => setIsVisible(!isVisible)}
                className='cursor-pointer underline'>Show</button>
            )
        }

        {isVisible && <p>{description}</p>}
        </div>
    );
};

//Now here parent(InstaMart) has the control over 3 children Instamart state
const Instamart = () => {
    const [visibleSection, setIsVisibleSection] = useState("about")
    return (<div>
        <h1 className='text-3xl p-2 font-bold'>InstaMart</h1>
        <Section 
        title={"About InstaMart"}
        description={"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32.The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham"}
        isVisible = {visibleSection === "about"} //Now my parent has control over children
        setIsVisible = {() =>setIsVisibleSection("about")}  //Passing the about key
        />

        <Section 
        title={"Team InstaMart"}
        description={"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32.The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham"}
        isVisible = {visibleSection === "team"}
        setIsVisible = {() =>setIsVisibleSection("team")}
        />

        <Section 
        title={"Careers"}
        description={"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32.The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham"}
        isVisible = {visibleSection === "career"}
        setIsVisible = {() =>setIsVisibleSection("career")}
        />
        
        {/* <AboutInstaMart />
        <DetailsofInstaMart />
        <TeamofInstaMart />
        <Product />
        <Careers /> */}
    </div>
    );
};

export default Instamart;